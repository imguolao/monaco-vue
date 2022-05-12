import type { ExtractPropTypes, PropType } from 'vue'
import type { Monaco } from '@types'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

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
  'onUpdate:value': Function as PropType<(value: string) => void>,
  onBeforeMount: Function as PropType<() => void>,
  onMount: Function as PropType<(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void>,
  onChange: Function as PropType<(value: string, event: monaco.editor.IModelContentChangedEvent) => void>,
  onValidate: Function as PropType<(markers: monaco.editor.IMarker[]) => void>,
}

export type EditorProps = ExtractPropTypes<typeof editorProps> 
