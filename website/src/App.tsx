import { type Ref, defineComponent, ref, computed } from 'vue'
import Editor from '../../src'
import files from './files'

export default defineComponent(() => {
  const fileName = ref<keyof typeof files>('script.js')
  const file = computed(() => files[fileName.value])
  return () => {
    return (
      <>
        {renderButtonGroup(fileName)}
        <Editor
          height="80vh"
          theme='vs-dark'
          path={fileName.value}
          defaultLanguage={file.value.language}
          defaultValue={file.value.value}
          // defaultLanguage="javascript"
          // defaultValue="// some comment"
          // onChange={(val, event) => console.log(val, event)}
          // onValidate={(markers) => console.log(markers)}
        />
      </>
    )
  }
})

function renderButtonGroup(fileName: Ref<string>) {
  return (
    Object.keys(files).map(key => {
      return (
        <button 
          disabled={fileName.value === key} 
          onClick={() => (fileName.value = key)}
        >
          {key}
        </button>
      )
    })
  )
}
