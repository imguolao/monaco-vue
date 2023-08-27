import {
  type PropType,
  type SetupContext,
  type ShallowRef,
  defineComponent,
  shallowRef,
  onMounted,
  onUnmounted,
  watch,
  nextTick,
  computed,
  h,
} from 'vue-demi'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'
import { type Nullable, type MonacoEditor } from '../types'
import { useMonaco, useContainer } from '../hooks'
import { defaultSlotHelper, getOrCreateModel } from '../utils'

export interface DiffEditorProps {
  original?: string
  modified?: string
  language?: string
  originalLanguage?: string
  modifiedLanguage?: string
  originalModelPath?: string
  modifiedModelPath?: string

  /* === */

  theme: 'vs' | string
  options: monacoEditor.editor.IStandaloneDiffEditorConstructionOptions

  /* === */

  width: number | string
  height: number | string
  className?: string
}

export interface VueMonacoDiffEditorEmitsOptions {
  beforeMount: (monaco: MonacoEditor) => void
  mount: (editor: monacoEditor.editor.IStandaloneDiffEditor, monaco: MonacoEditor) => void
}

const loadingStyle = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}

export default defineComponent({
  name: 'VueMonacoDiffEditor',
  props: {
    original: String,
    modified: String,
    language: String,
    originalLanguage: String,
    modifiedLanguage: String,
    originalModelPath: String,
    modifiedModelPath: String,

    /* == */

    theme: {
      type: String,
      default: 'vs',
    },
    options: {
      type: Object as PropType<monacoEditor.editor.IStandaloneDiffEditorConstructionOptions>,
      default: () => ({}),
    },

    /* == */

    width: {
      type: [Number, String] as PropType<number | string>,
      default: '100%',
    },
    height: {
      type: [Number, String] as PropType<number | string>,
      default: '100%',
    },
    className: String,
  },
  setup(props: DiffEditorProps, ctx: SetupContext<VueMonacoDiffEditorEmitsOptions>) {
    const containerRef = shallowRef<Nullable<HTMLElement>>(null)
    const { monacoRef, unload } = useMonaco()
    const { diffEditorRef } = useDiffEditor(ctx, props, monacoRef, containerRef)
    const isDiffEditorReady = computed(() => !!monacoRef.value && !!diffEditorRef.value)
    const { wrapperStyle, containerStyle } = useContainer(props, isDiffEditorReady)

    onUnmounted(() => {
      !monacoRef.value && unload()

      const models = diffEditorRef.value?.getModel?.()
      models?.original?.dispose?.()
      models?.modified?.dispose?.()

      diffEditorRef.value?.dispose?.()
    })

    // originalModelPath
    watch(
      () => props.originalModelPath,
      () => {
        if (!monacoRef.value || !diffEditorRef.value) {
          return
        }

        const originalEditor = diffEditorRef.value.getOriginalEditor()
        const model = getOrCreateModel(
          monacoRef.value,
          props.original || '',
          props.originalLanguage || props.language || 'text',
          props.originalModelPath || '',
        )

        if (model !== originalEditor.getModel()) {
          originalEditor.setModel(model)
        }
      },
    )

    // modifiedModelPath
    watch(
      () => props.modifiedModelPath,
      () => {
        if (!monacoRef.value || !diffEditorRef.value) {
          return
        }

        const modifiedEditor = diffEditorRef.value.getModifiedEditor()
        const model = getOrCreateModel(
          monacoRef.value,
          props.modified || '',
          props.modifiedLanguage || props.language || 'text',
          props.modifiedModelPath || '',
        )

        if (model !== modifiedEditor.getModel()) {
          modifiedEditor.setModel(model)
        }
      },
    )

    // modified
    watch(
      () => props.modified,
      () => {
        if (!isDiffEditorReady.value) {
          return
        }

        const modifiedEditor = diffEditorRef.value!.getModifiedEditor()
        if (modifiedEditor.getOption(monacoRef.value!.editor.EditorOption.readOnly)) {
          modifiedEditor.setValue(props.modified || '')
        } else {
          if (props.modified !== modifiedEditor.getValue()) {
            modifiedEditor.executeEdits('', [
              {
                range: modifiedEditor.getModel()!.getFullModelRange(),
                text: props.modified || '',
                forceMoveMarkers: true,
              },
            ])

            modifiedEditor.pushUndoStop()
          }
        }
      },
    )

    // original
    watch(
      () => props.original,
      () => {
        diffEditorRef.value?.getModel()?.original.setValue(props?.original || '')
      },
    )

    // language
    watch(
      () => [props.language, props.originalLanguage, props.modifiedLanguage],
      () => {
        if (!isDiffEditorReady.value) {
          return
        }

        // eslint-disable
        const { original, modified } = diffEditorRef.value!.getModel()!

        monacoRef.value!.editor.setModelLanguage(original, props.originalLanguage || props.language || 'text')

        monacoRef.value!.editor.setModelLanguage(modified, props.originalLanguage || props.language || 'text')
      },
    )

    // theme
    watch(
      () => props.theme,
      () => monacoRef.value?.editor.setTheme(props.theme),
    )

    // options
    watch(
      () => props.options,
      () => diffEditorRef.value?.updateOptions(props.options),
      { deep: true },
    )

    return {
      containerRef,
      isDiffEditorReady,
      wrapperStyle,
      containerStyle,
    }
  },
  render() {
    const { $slots, isDiffEditorReady, wrapperStyle, containerStyle, className } = this

    return h(
      'div',
      {
        style: wrapperStyle,
      },
      [
        !isDiffEditorReady &&
          h(
            'div',
            {
              style: loadingStyle,
            },
            $slots.default ? defaultSlotHelper($slots.default) : 'loading...',
          ),
        h('div', {
          ref: 'containerRef',
          key: 'monaco_diff_editor_container',
          style: containerStyle,
          class: className,
        }),
      ],
    )
  },
})

function useDiffEditor(
  { emit }: SetupContext<VueMonacoDiffEditorEmitsOptions>,
  props: DiffEditorProps,
  monacoRef: ShallowRef<Nullable<MonacoEditor>>,
  containerRef: ShallowRef<Nullable<HTMLElement>>,
) {
  const diffEditorRef = shallowRef<Nullable<monacoEditor.editor.IStandaloneDiffEditor>>(null)

  onMounted(() => {
    const stop = watch(
      monacoRef,
      () => {
        if (containerRef.value && monacoRef.value) {
          nextTick(() => stop())
          createDiffEditor()
        }
      },
      { immediate: true },
    )
  })

  function createDiffEditor() {
    if (!containerRef.value || !monacoRef.value || diffEditorRef.value) {
      return
    }

    // diff editor before mount
    emit('beforeMount', monacoRef.value)

    diffEditorRef.value = monacoRef.value.editor.createDiffEditor(containerRef.value, {
      automaticLayout: true,
      autoIndent: 'brackets',
      theme: props.theme,
      formatOnPaste: true,
      formatOnType: true,
      ...props.options,
    })

    const originalModel = getOrCreateModel(
      monacoRef.value,
      props.original || '',
      props.originalLanguage || props.language || 'text',
      props.originalModelPath || '',
    )

    const modifiedModel = getOrCreateModel(
      monacoRef.value,
      props.modified || '',
      props.modifiedLanguage || props.language || 'text',
      props.modifiedModelPath || '',
    )

    diffEditorRef.value?.setModel({
      original: originalModel,
      modified: modifiedModel,
    })

    // diff editor mount
    emit('mount', diffEditorRef.value, monacoRef.value)
  }

  return { diffEditorRef }
}
