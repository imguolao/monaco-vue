import loader from '@monaco-editor/loader'
import VueMonacoEditor from './components/Editor'
import VueMonacoDiffEditor from './components/DiffEditor'

export type { EditorProps, VueMonacoEditorEmitsOptions } from './components/Editor'
export type { MonacoEditor } from './types/index'

export { install } from './install'
export { useMonaco } from './hooks'
export { loader }
export { VueMonacoEditor, VueMonacoDiffEditor }
export { VueMonacoEditor as Editor, VueMonacoDiffEditor as DiffEditor }

export default VueMonacoEditor
