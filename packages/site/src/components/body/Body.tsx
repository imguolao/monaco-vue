import { defineComponent } from "vue";
import Editor from "@guolao/vue-monaco-editor";
import jsCode from "./example";
import "./index.less";

export default defineComponent({
  name: "DocumentBody",
  props: {
    editorTheme: {
      type: String,
      default: "light",
    },
  },
  setup(props) {
    return () => (
      <section class="body-wrapper">
        <div class="body-editor-wrapper">
          <Editor
            height="500px"
            theme={props.editorTheme}
            defaultLanguage="javascript"
            defaultValue={jsCode}
          />
        </div>
      </section>
    );
  },
});
