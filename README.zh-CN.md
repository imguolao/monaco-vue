# monaco-vue

> 中文文档更新不及时，请查看英文文档。

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

全局注册组件。

```ts
import { createApp } from 'vue'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

const app = createApp(App)
app.use(VueMonacoEditorPlugin, {
  paths: {
    // The recommended CDN config
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs'
  },
})
```

**Editor**

```vue
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

**Diff Editor**

```vue
<template>
  <vue-monaco-diff-editor
    theme="vs-dark"
    original="// the original code"
    modified="// the modified code"
    language="javascript"
    :options="OPTIONS"
    @mount="handleMount"
  />
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'

const OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  readOnly: true,
}

const diffEditorRef = shallowRef()
const handleMount = diffEditor => (diffEditorRef.value = diffEditor)

// get the original value
function getOriginalValue() {
  return diffEditorRef.value.getOriginalEditor().getValue()
}

// get the modified value
function getOriginalValue() {
  return diffEditorRef.value.getModifiedEditor().getValue()
}
</script>
```

## Props & Events & slots

### Editor

| Name | Type | Default | Description | remark |
| --- | --- | --- | --- | --- |
| value | `string` |  | 当前编辑器的值，可以使用 `v-model:value` | `v-model:value` |
| language | `string` |  | 当前编辑器的语言 | `monaco-editor` 支持的语言[查看此处](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| path | `string` |  | 当前编辑器的路径 |  |
| defaultValue | `string` |  | 当前编辑器的默认值 |  |
| defaultLanguage | `string` |  | 当前编辑器的默认语言 | `monaco-editor` 支持的语言[查看此处](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| defaultPath | `string` |  | 当前编辑器的默认路径 | `monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))` |
| theme | `vs` \| `vs-dark` | `vs` | 主题 |  |
| line | `number` |  | 可以设置要跳到行数 |  |
| options | `object` | `{}` | [IStandaloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html) |  |
| overrideServices | `object` | `{}` | [IEditorOverrideServices](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOverrideServices.html) |  |
| saveViewState | `boolean` | `true` | 编辑器 model 变更后，保存 model 的视图状态（滚动位置等） | 需要给每个 model 配置唯一 `path` |
| width | `number` \| `string` | `100%` | 容器宽度 |  |
| height | `number` \| `string` | `100%` | 容器高度 |  |
| className | `string` |  | 内层容器 class |  |
| onBeforeMount | `(monaco: Monaco) => void` |  | 编辑器实例创建前执行 |  |
| onMount | `(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void` |  | 编辑器实例创建后执行 |  |
| onChange | `(value: string \| undefined, monaco.editor.IModelContentChangedEvent) => void) => void` |  | 编辑改变值后执行 |  |
| onValidate | `(markers: monaco.editor.IMarker[]) => void` |  | 当语法发生错误时执行 | `monaco-editor` 支持语法校验的语言[查看此处](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| `#default` | `slot` | `'loading...'` | 加载状态 | 从 CDN 加载文件需要一段时间，显示加载状态会更为友好 |

### Diff Editor

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| original | `string` |  | 原始值 (左边编辑器) |
| modified | `string` |  | 修改值 (右边编辑器) |
| language | `string` |  | 左右两个编辑器的语言 (`monaco-editor` 支持的所有语言， [点击这里查看](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages)) |
| originalLanguage | `string` |  | 此属性可以让你单独指定原始值的语言（优先级高于 `language`） |
| modifiedLanguage | `string` |  | 此属性可以让你单独指定修改值的语言（优先级高于 `language`） |
| originalModelPath | `string` |  | 原始值 model 的路径。作为第三个参数传递给 `.createModel` 方法 -- `monaco.editor.createModel(..., ..., monaco.Uri.parse(originalModelPath))` |
| modifiedModelPath | `string` |  | 修改值 model 的路径。作为第三个参数传递给 `.createModel` 方法 -- `monaco.editor.createModel(..., ..., monaco.Uri.parse(modifiedModelPath))` |
| theme  | `vs` \| `vs-dark` \| `string` | `vs` (`vs` 主题就是 `light` 主题) | 主题 |
| options | `object` | `{}` | [IStandaloneDiffEditorConstructionOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneDiffEditorConstructionOptions.html) |
| width | `number` \| `string` | `100%` | 容器宽度 |
| height | `number` \| `string` | `100%` | 容器高度 |
| className | `string` |  | 内层容器 class |
| onBeforeMount | `(monaco: Monaco) => void` |  | 编辑器实例创建前执行 |
| onMount | `(editor: monaco.editor.IStandaloneDiffEditor, monaco: Monaco) => void` |  | 编辑器实例创建后执行 |
| `#default` | `slot` | `'loading...'` | 加载状态 |

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
    // 推荐 CDN 配置
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs'
  },
})
```

```ts
import { loader } from "@guolao/vue-monaco-editor"

// CDN 加载
loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs'
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

## Inspiration

MonacoVue 源自于以下项目:

- [monaco-loader](https://github.com/suren-atoyan/monaco-loader)
- [monaco-react](https://github.com/suren-atoyan/monaco-react/tree/master)

## License

[MIT](LICENSE)
