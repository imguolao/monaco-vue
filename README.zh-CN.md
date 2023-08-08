# monaco-vue

🎉 version `v1` 现在已经支持 vue 2&3 ✌

不需要给 `webpack` (or `rollup`, `vite`) 等打包工具配置插件，就可以在 [Vue](https://vuejs.org/) 中使用 [monaco-editor](https://microsoft.github.io/monaco-editor/)（从 [CDN](#cdn) 加载）。

[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/imguolao/monaco-vue/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@guolao/vue-monaco-editor.svg?style=flat)](https://www.npmjs.com/package/@guolao/vue-monaco-editor)

简体中文 | [English](https://github.com/imguolao/monaco-vue/blob/main/README.md)

查看 [Demo](https://imguolao.github.io/monaco-vue/).

如果你想以 `NPM Package` 的形式使用 [monaco-editor](https://microsoft.github.io/monaco-editor/)，从 `node_modules` 加载 `monaco-editor` 文件打包到你的代码中，则仍需要使用打包工具的插件，具体可[查看此处](#npm-package)。

## Installation

```sh
npm i @guolao/vue-monaco-editor
```

Vue `<= 2.6.14` 需要安装 [@vue/composition-api](https://github.com/vuejs/composition-api)。

```sh
npm i @guolao/vue-monaco-editor @vue/composition-api
```

当然，你也可以使用 [unpkg](https://unpkg.com/@guolao/vue-monaco-editor/lib/umd/monaco-vue.js)。

## Usage

```ts
<template>
  <vue-monaco-editor
    v-model:value="code"
    theme="vs-dark"
    :options="MONACO_EDITOR_OPTIONS"
    @mount="handleMount"
  />
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true, 
  formatOnType: true, 
  formatOnPaste: true,
}

const code = ref('// some code...')
const editorRef = shallowRef()
const handleMount = editor => (editorRef.value = editor)

// your action
function formatCode() {
  editorRef.value?.getAction('editor.action.formatDocument').run()
}
</script>
```

## Props & Events & slots

| Name | Type | Default | Description | remark |
| --- | --- | --- | --- | --- |
| defaultValue | `string` |  | 当前编辑器模型的默认值 |  |
| defaultLanguage | `string` |  | 当前编辑器模型的默认语言 | `monaco-editor` 支持的语言[查看此处](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| defaultPath | `string` |  | 当前编辑器模型的默认路径 | `monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))` |
| value | `string` |  | 当前编辑器模型的值，可以使用 `v-model:value` | `v-model:value` |
| language | `string` |  | 当前编辑器模型的语言 | `monaco-editor` 支持的语言[查看此处](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| path | `string` |  | 当前编辑器模型的路径 |  |
| theme | `light` \| `vs-dark` | `light` | `monaco-editor` 的主题 | `monaco.editor.defineTheme(...)` |
| line | `number` |  | 可以设置要跳到行数 |  |
| options | `object` | `{}` | [IStandaloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneEditorConstructionOptions.html) |  |
| overrideServices | `object` | `{}` | [IEditorOverrideServices](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IEditorOverrideServices.html) |  |
| saveViewState | `boolean` | `true` | 编辑器模型变更后，保存模型的视图状态（滚动位置等） | 需要给每个模型配置唯一 `path` |
| width | `number` \| `string` | `100%` | 容器宽度 |  |
| height | `number` \| `string` | `100%` | 容器高度 |  |
| className | `string` |  | 容器 class |  |
| onBeforeMount | `(monaco: Monaco) => void` |  | 编辑器实例创建前执行 |  |
| onMount | `(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void` |  | 编辑器实例创建后执行 |  |
| onChange | `(value: string \| undefined, monaco.editor.IModelContentChangedEvent) => void) => void` |  | 编辑改变值后执行 |  |
| onValidate | `(markers: monaco.editor.IMarker[]) => void` |  | 当语法发生错误时执行 | `monaco-editor` 支持语法校验的语言[查看此处](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| `#default` | `slot` | `'loading...'` | 加载状态 | 从 CDN 加载文件需要一段时间，显示加载状态会更为友好 |

## Hooks

`useMonaco` 使用 [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader) 从 CDN 加载 [monaco-editor](https://microsoft.github.io/monaco-editor/)。

```vue
<template>
  <div ref="containerRef"></div>
</template>

<script lang="ts" setup>
import { onUnmounted } from 'vue'
import { useMonaco, watchEffect, nextTick } from '@guolao/vue-monaco-editor'

const containerRef = ref()
const { monacoRef, unload } = useMonaco()

// watch once
const stop = watchEffect(() => {
  if (monacoRef.value && containerRef.value) {
    nextTick(() => stop())
    monacoRef.value.editor.create(containerRef.value, { ... })
  }
})

// 当组件被卸载时, 如果 monaco 实例没有加载完, 你需要手动取消加载。
onUnmounted(() => !monacoRef.value && unload())
</script>
```

## CDN

`vue-monaco-editor` 基于 [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader) 从 CDN 加载文件（`loader`的加载过程是异步）。

`loader` 的配置是全局的，仅需配置一次。

```ts
import { createApp } from 'vue'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

const app = createApp(App)
app.use(VueMonacoEditorPlugin, {
  paths: {
    // 默认配置
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs'
  },
})
```

```ts
import { loader } from "@guolao/vue-monaco-editor"

// CDN 加载
loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs'
  },
})

//  可以配置语言
loader.config({ "vs/nls": { availableLanguages: { "*": "de" } } })

// or
loader.config({
  paths: {
    vs: "...",
  },
  "vs/nls" : {
    availableLanguages: {
      "*": "de",
    },
  },
})
```

## NPM Package

如果你想以 `NPM Package` 的形式使用 [monaco-editor](https://microsoft.github.io/monaco-editor/)，从 `node_modules` 中加载 `monaco-editor` 文件并打包到你的代码中，则仍需要使用打包工具的插件。

```js
import * as monaco from "monaco-editor"
import { loader } from "@guolao/vue-monaco-editor"

// 配置从 `node_modules` 中加载 monaco-editor
loader.config({ monaco })
```

### Vite

如果使用 `vite`，你需要这样做（具体可查看 [#1791 (comment)](https://github.com/vitejs/vite/discussions/1791#discussioncomment-321046)）：

```js
import { loader } from "@guolao/vue-monaco-editor"

import * as monaco from "monaco-editor"
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker()
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker()
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker()
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

loader.config({ monaco })
```

### Rollup

如果使用 `Rollup`，你可以使用社区提供的插件 [rollup-plugin-monaco-editor](https://github.com/chengcyber/rollup-plugin-monaco-editor)。

### Webpack

如果使用 `webpack`，[monaco-editor](https://microsoft.github.io/monaco-editor/) 官方提供了 `webpack` 的插件 [monaco-editor-webpack-plugin](https://www.npmjs.com/package/monaco-editor-webpack-plugin)，你可以安装并使用它。

## License

[MIT](LICENSE)
