import { defineComponent, ref, computed } from '@vue/composition-api'
import Editor, { loader } from '../../../src'
import files from './files'

// import * as monaco from 'monaco-editor'
// import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
// import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
// import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
// import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
// import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

// (self as any).MonacoEnvironment = {
//   getWorker(_: any, label: string) {
//     if (label === 'json') {
//       return new jsonWorker()
//     }
//     if (label === 'css' || label === 'scss' || label === 'less') {
//       return new cssWorker()
//     }
//     if (label === 'html' || label === 'handlebars' || label === 'razor') {
//       return new htmlWorker()
//     }
//     if (label === 'typescript' || label === 'javascript') {
//       return new tsWorker()
//     }
//     return new editorWorker()
//   },
// }

// loader.config({ monaco })

export default defineComponent({
  setup() {
    const fileName = ref<keyof typeof files>('script.js')
    const file = computed(() => files[fileName.value])
    return { fileName, file }
  },
  render() {
    const { fileName, file } = this
    return (
      <div style="height: 100vh">
        {renderButtonGroup(fileName)}
        <Editor
          height="80vh"
          theme='vs-dark'
          path={fileName}
          defaultLanguage={file.language}
          defaultValue={file.value}
          // defaultLanguage="javascript"
          // defaultValue="// some comment"
          // onChange={(val, event) => console.log(val, event)}
          // onValidate={(markers) => console.log(markers)}
        />
      </div>
    )
  }
})

function renderButtonGroup(fileName: string) {
  return (
    Object.keys(files).map(key => {
      return (
        <button
          disabled={fileName === key}
          onClick={() => (fileName = key)}
        >
          {key}
        </button>
      )
    })
  )
}
