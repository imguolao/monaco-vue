import { defineComponent } from "vue";
import logo from "../../logo.svg";
import "./index.less";

export default defineComponent({
  name: "SiteHeader",
  setup() {
    const version = process.env.__VERSION__;
    return () => (
      <header class="header-wrapper">
        <img class="header-logo" alt="logo" src={logo} />
        <h1>
          Vue Monaco Editor <sup class="header-sup-text">v{version}</sup>
        </h1>
        <p class="header-description">MonacoEditor component for Vue.</p>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/imguolao/monaco-vue"
          >
            View On Github
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.npmjs.com/package/@guolao/vue-monaco-editor"
          >
            View On NPM
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://microsoft.github.io/monaco-editor"
          >
            Monaco Ediotor Documentation
          </a>
        </div>
      </header>
    );
  },
});
