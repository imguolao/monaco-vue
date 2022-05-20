import type { ExtractPropTypes, PropType } from 'vue'
import type { MonacoEditor } from '../../types'
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api'

export const editorProps = {
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
    type: Object,
    default: () => ({}),
  },
  overrideServices: {
    type: Object,
    default: () => ({}),
  },
  saveViewState: {
    type: Boolean,
    default: true,
  },

  // keepCurrentModel: {
  //   type: Boolean,
  //   default: false,
  // },

  /* === */

  width: {
    type: [Number, String],
    default: '100%',
  },
  height: {
    type: [Number, String],
    default: '100%',
  },
  className: String,

  /* === */
  'onUpdate:value': Function as PropType<(value: string | undefined) => void>,
  onBeforeMount: Function as PropType<(monaco: MonacoEditor) => void>,
  onMount: Function as PropType<(editor: monacoEditor.editor.IStandaloneCodeEditor, monaco: MonacoEditor) => void>,
  onChange: Function as PropType<
    (value: string | undefined, event: monacoEditor.editor.IModelContentChangedEvent) => void
  >,
  onValidate: Function as PropType<(markers: monacoEditor.editor.IMarker[]) => void>,
}

export type EditorProps = ExtractPropTypes<typeof editorProps>
