import type { ShallowRef } from 'vue'
import type { EditorProps } from './types'
import type { Nullable, Monaco } from '@types'

import { 
  defineComponent, 
  nextTick, 
  onMounted,
  onUnmounted,
  computed,
  shallowRef,
  ref,
  watch,
  watchEffect,
} from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { useMonaco } from '@hooks'
import { editorProps } from './types'
import { getOrCreateModel, isUndefined } from '@utils'
import MonacoContainer from '../monacoContainer'

export default defineComponent({
  props: editorProps,
  setup(props, { slots }) {
    const viewStates = new Map<string | undefined, Nullable<monaco.editor.ICodeEditorViewState>>()
    const containerRef = shallowRef<Nullable<HTMLElement>>(null)
    const setContainerRef = (el: Nullable<HTMLElement>) => containerRef.value = el
    const { monacoRef, unload } = useMonaco()
    const { editorRef } = useEditor(props, monacoRef, containerRef)
    const { disposeValidator } = useValidator(props, monacoRef, editorRef)
    const isEditorReady = computed(() => !!monacoRef.value && !!editorRef.value)

    onUnmounted(() => {
      disposeValidator.value?.()
      editorRef.value!.getModel()?.dispose()
      editorRef.value?.dispose() ?? unload()
    })

    // value
    watch(() => props.value, newValue => {
      if (editorRef.value && editorRef.value.getValue() !== newValue) {
        editorRef.value.setValue(newValue!)
      }
    })

    // path
    watch(() => props.path, (newPath, oldPath) => {
      const model = getOrCreateModel(
        monacoRef.value!,
        props.value || props.defaultValue!,
        props.language || props.defaultLanguage,
        newPath,
      )

      if (model !== editorRef.value!.getModel()) {
        props.saveViewState && viewStates.set(oldPath, editorRef.value!.saveViewState())
        editorRef.value!.setModel(model);
        props.saveViewState && editorRef.value!.restoreViewState(viewStates.get(newPath)!)
      }
    })
  
    // options
    watch(
      () => props.options,
      options => editorRef.value && editorRef.value.updateOptions(options),
      { deep: true },
    )

    // theme
    watch(
      () => props.theme, 
      theme => monacoRef.value && monacoRef.value.editor.setTheme(theme)
    )

    // language
    watch(
      () => props.language,
      language => isEditorReady.value && 
        monacoRef.value!.editor.setModelLanguage(editorRef.value!.getModel()!, language!)
    )

    // line
    watch(
      () => props.line,
      line => {
        // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
        if (editorRef.value && !isUndefined(line)) {
          editorRef.value.revealLine(line!);
        }
      }
    )

    return () => (
      <MonacoContainer
        setContainerRef={setContainerRef}
        width={props.width}
        height={props.height}
        isEditorReady={isEditorReady.value}
      >
        {slots.default?.() ?? 'loading...'}
      </MonacoContainer>
    )
  }
})

function useEditor(
  props: EditorProps,
  monacoRef: ShallowRef<Nullable<Monaco>>,
  containerRef: ShallowRef<Nullable<HTMLElement>>,
) {
  const editorRef = shallowRef<Nullable<monaco.editor.IStandaloneCodeEditor>>(null)

  onMounted(() => {
    const stop = watchEffect(() => {
      if (monacoRef.value) {
        nextTick(() => stop())
        createEditor()
      }
    })
  })

  function createEditor() {
    if (!containerRef.value || !monacoRef.value) {
      return
    }

    // editor before mount
    props.onBeforeMount?.()

    const autoCreatedModelPath = props.path || props.defaultPath
    const defaultModel = getOrCreateModel(
      monacoRef.value,
      props.value || props.defaultValue!,
      props.language || props.defaultLanguage,
      autoCreatedModelPath,
    )

    editorRef.value = monacoRef.value.editor.create(containerRef.value, {
      model: defaultModel,
      theme: props.theme,
      automaticLayout: true,
      autoIndent: 'brackets',
      formatOnPaste: true,
      formatOnType: true,
      ...props.options
    }, props.overrideServices)

    editorRef.value?.onDidChangeModelContent(event => {
      const value = editorRef.value!.getValue()
      if (value !== props.value) {
        props['onUpdate:value']?.(value)
        props.onChange?.(value, event)
      }
    })

    // editor mount
    props.onMount?.(editorRef.value, monacoRef.value)
  }

  return { editorRef }
}

function useValidator(
  props: EditorProps,
  monacoRef: ShallowRef<Nullable<Monaco>>,
  editorRef: ShallowRef<Nullable<monaco.editor.IStandaloneCodeEditor>>,
) {
  const disposeValidator = ref<Nullable<() => void>>(null)

  const stop = watchEffect(() => {
    if (monacoRef.value && editorRef.value) {
      nextTick(() => stop())
      const changeMarkersListener = monacoRef.value.editor.onDidChangeMarkers(uris => {
        const editorUri = editorRef.value?.getModel()?.uri
        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find((uri) => uri.path === editorUri.path)
          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.value!.editor.getModelMarkers({ resource: editorUri })
            props.onValidate?.(markers)
          }
        }
      })

      disposeValidator.value = () => changeMarkersListener?.dispose()
    }
  })

  return { disposeValidator }
}
