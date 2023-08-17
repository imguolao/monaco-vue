import { defineComponent } from 'vue'
import { DiffEditor } from '@guolao/vue-monaco-editor'
import example from './example'
import { useConfigContext } from './Config'

export default defineComponent({
  setup() {
    const { theme } = useConfigContext()

    return () => (
      <DiffEditor original={example.original} modified={example.modified} language={example.lang} theme={theme.value} />
    )
  },
})
