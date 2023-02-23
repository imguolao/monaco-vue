import loader from '@monaco-editor/loader'
import VueMonacoEditor from './components/Editor'

type Options = Parameters<typeof loader.config>[0]

export function install(app: any, options?: Options) {
  if (options) {
    loader.config(options)
  }

  app.component(VueMonacoEditor.name, VueMonacoEditor)
}
