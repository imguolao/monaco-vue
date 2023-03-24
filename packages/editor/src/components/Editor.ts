import {
  type SetupContext,
  type PropType,
  type ShallowRef,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  computed,
  shallowRef,
  ref,
  watch,
  h,
} from 'vue-demi'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'
import { type Nullable, type MonacoEditor } from '../types'
import { useMonaco, useContainer } from '../hooks'
import { getOrCreateModel, isUndefined, defaultSlotHelper } from '../utils'

export interface EditorProps {
  defaultValue?: string
  defaultPath?: string
  defaultLanguage?: string
  value?: string
  language?: string
  path?: string

  /* === */

  theme: 'light' | string
  line?: number
  options: monacoEditor.editor.IStandaloneEditorConstructionOptions
  overrideServices: monacoEditor.editor.IEditorOverrideServices
  saveViewState: boolean

  /* === */

  width: number | string
  height: number | string
  className?: string
}

export interface VueMonacoEditorEmitsOptions {
  'update:value': (value: string | undefined) => void
  beforeMount: (monaco: MonacoEditor) => void
  mount: (editor: monacoEditor.editor.IStandaloneCodeEditor, monaco: MonacoEditor) => void
  change: (value: string | undefined, event: monacoEditor.editor.IModelContentChangedEvent) => void
  validate: (markers: monacoEditor.editor.IMarker[]) => void
}

const loadingStyle = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}

export default defineComponent({
  name: 'VueMonacoEditor',
  // TODO: vue3 use modelValue, vue2 use value
  model: {
    prop: 'value',
    event: 'update:value',
  },
  props: {
    defaultValue: String,
    defaultPath: String,
    defaultLanguage: String,
    value: String,
    language: String,
    path: String,

    /* === */

    theme: {
      type: String,
      default: 'light',
    },
    line: Number,
    options: {
      type: Object as PropType<monacoEditor.editor.IStandaloneEditorConstructionOptions>,
      default: () => ({}),
    },
    overrideServices: {
      type: Object as PropType<monacoEditor.editor.IEditorOverrideServices>,
      default: () => ({}),
    },
    saveViewState: {
      type: Boolean,
      default: true,
    },

    /* === */

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
  emits: ['update:value', 'beforeMount', 'mount', 'change', 'validate'],
  setup(props, ctx: SetupContext<VueMonacoEditorEmitsOptions>) {
    const viewStates = new Map<string | undefined, Nullable<monacoEditor.editor.ICodeEditorViewState>>()
    const containerRef = shallowRef<Nullable<HTMLElement>>(null)
    const { monacoRef, unload } = useMonaco()
    const { editorRef } = useEditor(ctx, props, monacoRef, containerRef)
    const { disposeValidator } = useValidator(ctx, props, monacoRef, editorRef)
    const isEditorReady = computed(() => !!monacoRef.value && !!editorRef.value)
    const { wrapperStyle, containerStyle } = useContainer(props, isEditorReady)

    onUnmounted(() => {
      disposeValidator.value?.()
      if (editorRef.value) {
        editorRef.value.getModel()?.dispose()
        editorRef.value.dispose()
      } else {
        unload()
      }
    })

    // value
    watch(
      () => props.value,
      newValue => {
        if (editorRef.value && editorRef.value.getValue() !== newValue) {
          editorRef.value.setValue(newValue!)
        }
      },
    )

    // path
    watch(
      () => props.path,
      (newPath, oldPath) => {
        const model = getOrCreateModel(
          monacoRef.value!,
          props.value || props.defaultValue!,
          props.language || props.defaultLanguage,
          newPath,
        )

        if (model !== editorRef.value!.getModel()) {
          props.saveViewState && viewStates.set(oldPath, editorRef.value!.saveViewState())
          editorRef.value!.setModel(model)
          props.saveViewState && editorRef.value!.restoreViewState(viewStates.get(newPath)!)
        }
      },
    )

    // options
    watch(
      () => props.options,
      options => editorRef.value && editorRef.value.updateOptions(options),
      { deep: true },
    )

    // theme
    watch(
      () => props.theme,
      theme => monacoRef.value && monacoRef.value.editor.setTheme(theme),
    )

    // language
    watch(
      () => props.language,
      language =>
        isEditorReady.value && monacoRef.value!.editor.setModelLanguage(editorRef.value!.getModel()!, language!),
    )

    // line
    watch(
      () => props.line,
      line => {
        // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
        if (editorRef.value && !isUndefined(line)) {
          editorRef.value.revealLine(line!)
        }
      },
    )

    return {
      containerRef,
      isEditorReady,
      wrapperStyle,
      containerStyle,
    }
  },
  render() {
    const {
      $slots,
      isEditorReady,
      wrapperStyle,
      containerStyle,

      // TODO: need remove, add `@deprecated` flag
      className,
    } = this

    return h(
      'div',
      {
        style: wrapperStyle,
      },
      [
        !isEditorReady &&
          h(
            'div',
            {
              style: loadingStyle,
            },
            $slots.default ? defaultSlotHelper($slots.default) : 'loading...',
          ),
        h('div', {
          ref: 'containerRef',
          key: 'monaco_editor_container',
          style: containerStyle,
          class: className,
        }),
      ],
    )
  },
})

function useEditor(
  { emit }: SetupContext<VueMonacoEditorEmitsOptions>,
  props: EditorProps,
  monacoRef: ShallowRef<Nullable<MonacoEditor>>,
  containerRef: ShallowRef<Nullable<HTMLElement>>,
) {
  const editorRef = shallowRef<Nullable<monacoEditor.editor.IStandaloneCodeEditor>>(null)

  onMounted(() => {
    const stop = watch(
      monacoRef,
      () => {
        if (containerRef.value && monacoRef.value) {
          nextTick(() => stop())
          createEditor()
        }
      },
      { immediate: true },
    )
  })

  function createEditor() {
    if (!containerRef.value || !monacoRef.value || editorRef.value) {
      return
    }

    // editor before mount
    // props.onBeforeMount?.(monacoRef.value)
    emit('beforeMount', monacoRef.value)

    const autoCreatedModelPath = props.path || props.defaultPath
    const defaultModel = getOrCreateModel(
      monacoRef.value,
      props.value || props.defaultValue!,
      props.language || props.defaultLanguage,
      autoCreatedModelPath,
    )

    editorRef.value = monacoRef.value.editor.create(
      containerRef.value,
      {
        model: defaultModel,
        theme: props.theme,
        automaticLayout: true,
        autoIndent: 'brackets',
        formatOnPaste: true,
        formatOnType: true,
        ...props.options,
      },
      props.overrideServices,
    )

    editorRef.value?.onDidChangeModelContent(event => {
      const value = editorRef.value!.getValue()
      if (value !== props.value) {
        // props['onUpdate:value']?.(value)
        emit('update:value', value)
        // props.onChange?.(value, event)
        emit('change', value, event)
      }
    })

    // editor mount
    // props.onMount?.(editorRef.value, monacoRef.value)
    emit('mount', editorRef.value, monacoRef.value)
  }

  return { editorRef }
}

function useValidator(
  { emit }: SetupContext<VueMonacoEditorEmitsOptions>,
  props: EditorProps,
  monacoRef: ShallowRef<Nullable<MonacoEditor>>,
  editorRef: ShallowRef<Nullable<monacoEditor.editor.IStandaloneCodeEditor>>,
) {
  const disposeValidator = ref<Nullable<() => void>>(null)

  const stop = watch([monacoRef, editorRef], () => {
    if (monacoRef.value && editorRef.value) {
      nextTick(() => stop())
      const changeMarkersListener = monacoRef.value.editor.onDidChangeMarkers(uris => {
        const editorUri = editorRef.value?.getModel()?.uri
        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find(uri => uri.path === editorUri.path)
          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.value!.editor.getModelMarkers({
              resource: editorUri,
            })
            // props.onValidate?.(markers)
            emit('validate', markers)
          }
        }
      })

      disposeValidator.value = () => changeMarkersListener?.dispose()
    }
  })

  return { disposeValidator }
}
