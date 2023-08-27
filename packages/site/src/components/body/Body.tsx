import { defineComponent } from 'vue'
import { Editor, DiffEditor } from '@guolao/vue-monaco-editor'
import jsCode from './example'
import diffExample from './diffExample'
import './index.less'

export default defineComponent({
  name: 'DocumentBody',
  props: {
    editorTheme: {
      type: String,
      default: 'light',
    },
  },
  setup(props) {
    return () => (
      <section class="body-wrapper">
        <div class="body-editor-wrapper">
          <Editor height="500px" theme={props.editorTheme} language="javascript" value={jsCode} />
        </div>
        <div class="body-description">
          <span>Editor 👆</span>
          <span>👇 Diff Editor</span>
        </div>
        <div class="body-diff-editor-wrapper">
          <DiffEditor
            height="500px"
            theme={props.editorTheme}
            language={diffExample.lang}
            original={diffExample.original}
            modified={diffExample.modified}
          />
        </div>
      </section>
    )
  },
})
