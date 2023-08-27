import { defineComponent } from 'vue'
import { Editor } from '@guolao/vue-monaco-editor'
import example from './example'
import { useConfigContext } from './Config'

export default defineComponent({
  setup() {
    const { theme } = useConfigContext()
    return () => <Editor value={example.code} language={example.lang} theme={theme.value} />
  },
})
