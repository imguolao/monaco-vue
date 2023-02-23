# monaco-vue

🎉 version `v1` suport vue 2&3 now ✌

Use [monaco-editor](https://microsoft.github.io/monaco-editor/) loaded from [CDN](#cdn) in [Vue 2&3](https://vuejs.org/), no need to configure plugins in `webpack` (or `rollup`, ` vite`) and other packaging tools.

[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/imguolao/monaco-vue/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@guolao/vue-monaco-editor.svg?style=flat)](https://www.npmjs.com/package/@guolao/vue-monaco-editor)

English | [中文](https://github.com/imguolao/monaco-vue/blob/main/README.zh-CN.md)

View [Demo](https://imguolao.github.io/monaco-vue/).

If you want to use [monaco-editor](https://microsoft.github.io/monaco-editor/) as `NPM Package` to load `monaco-editor` files from `node_modules` to package into your code, you still need to Use the plugin for the packaging tool, [viewed here](#npm-package).

## Installation

```sh
npm i @guolao/vue-monaco-editor
```

Vue `<= 2.6.14` requires [@vue/composition-api](https://github.com/vuejs/composition-api) to be installed.

```sh
npm i @guolao/vue-monaco-editor @vue/composition-api
```

Of course, you can also use [unpkg](https://unpkg.com/@guolao/vue-monaco-editor/lib/umd/monaco-vue.js).

## Usage

```ts
import { createApp } from 'vue'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

const app = createApp(App)
app.use(VueMonacoEditorPlugin)
```

```vue
<template>
  <vue-monaco-editor
    v-model:value="code"
    theme="vs-dark"
    @change="handleChange"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const code = ref('// some code...')
const handleChange = console.log
</script>
```

## Props & Events & slots

| Name | Type | Default | Description | remark |
| --- | --- | --- | --- | --- |
| defaultValue | `string` |  | default value of the current model |  |
| defaultLanguage | `string` |  | default language of the current model | languages supported by `monaco-editor` [view here](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| defaultPath | `string` |  | default path of the current model | `monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))` |
| value | `string` |  | value of the current model, can use `v-model:value` | `v-model:value` |
| language | `string` |  | language of the current model | languages supported by `monaco-editor` [view here](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| path | `string` |  | path to the current model |  |
| theme | `light` \| `vs-dark` | `light` | theme of the `monaco-editor` | `monaco.editor.defineTheme(...)` |
| line | `number` |  | number of lines to jump to |  |
| options | `object` | `{}` | [IStandaloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneEditorConstructionOptions.html) |  |
| overrideServices | `object` | `{}` | [IEditorOverrideServices](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IEditorOverrideServices.html) |  |
| saveViewState | `boolean` | `true` | save the view state of the model (scroll position, etc.) after model changes | a unique `path` needs to be configured for each model |
| width | `number` \| `string` | `100%` | container width |  |
| height | `number` \| `string` | `100%` | container height |  |
| className | `string` |  | container class name |  |
| onBeforeMount | `(monaco: Monaco) => void` |  | execute before the editor instance is created |  |
| onMount | `(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void` |  | execute after the editor instance has been created |  |
| onChange | `(value: string \| undefined, event: monaco.editor.IModelContentChangedEvent) => void` |  | execute when  the changed value change |  |
| onValidate | `(markers: monaco.editor.IMarker[]) => void` |  | execute when a syntax error occurs | `monaco-editor` supports syntax-checked languages [view here](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| `#defalut` | `slot` | `'loading...'` | loading status | when loading files from CDN, displaying the loading status will be more friendly |

## Hooks

`useMonaco` use [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader) to load [monaco-editor](https://microsoft.github.io/monaco-editor/) from the CDN.

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

/*
  When the component will be unmount,
  If the monaco instance is not successfully loaded,
  You need to manually unload.
*/
onUnmounted(() => !monacoRef.value && unload())
</script>
```

## CDN

`vue-monaco-editor` use [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader) to load the [monaco-editor](https://microsoft.github.io/monaco-editor/) from the CDN(the loading process of `loader` is asynchronous).

The configuration of `loader` is global, only to be configured once.

```ts
import { createApp } from 'vue'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

const app = createApp(App)
app.use(VueMonacoEditorPlugin, {
  paths: {
    // The default CDN config
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs'
  },
})
```

```ts
import { loader } from "@guolao/vue-monaco-editor"

// loaded from CDN
loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs'
  },
})

// configurable for different languages
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

If you want to use [monaco-editor](https://microsoft.github.io/monaco-editor/) as `NPM Package` to load `monaco-editor` files from `node_modules` to package into your code, you still need to use the plugin for the packaging tool.

```js
import * as monaco from "monaco-editor"
import { loader } from "@guolao/vue-monaco-editor"

// loaded monaco-editor from `node_modules`
loader.config({ monaco })
```

### Vite

If you use `vite`, you need to do this (see [#1791 (comment)](https://github.com/vitejs/vite/discussions/1791#discussioncomment-321046) for details).

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

If you use `Rollup`, you can use the community provided plugin [rollup-plugin-monaco-editor](https://github.com/chengcyber/rollup-plugin-monaco-editor).

### Webpack

If you use `webpack`, [monaco-editor](https://microsoft.github.io/monaco-editor/) officially provides the `webpack` plugin [monaco-editor-webpack-plugin](https://www.npmjs.com/package/monaco-editor-webpack-plugin), which you can use.

## License

[MIT](LICENSE)
