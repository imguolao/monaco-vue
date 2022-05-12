import loader from '@monaco-editor/loader'
import Editor from './components/editor'
import MonacoContainer from './components/monacoContainer'
import { useMonaco } from './hooks'

export type { MonacoContainerProps } from './components/monacoContainer'
export type { EditorProps } from './components/editor'

export { MonacoContainer, loader, useMonaco }
export default Editor
