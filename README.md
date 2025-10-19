# monaco-vue

Use `monaco-editor` loaded from CDN in Vue 2&3, no need to bundling.

[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/imguolao/monaco-vue/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@guolao/vue-monaco-editor.svg?style=flat)](https://www.npmjs.com/package/@guolao/vue-monaco-editor) [![npm downloads](https://img.shields.io/npm/dm/%40guolao%2Fvue-monaco-editor)](https://www.npmjs.com/package/@guolao/vue-monaco-editor)

English | [简体中文](https://github.com/imguolao/monaco-vue/blob/main/README.zh-CN.md)

## Why

The `monaco-editor` doesn't support ESM very well, which results in large files when the code is bundled.

But the official team has written a loader to lazy load files of the editor remotely, so we can load the files from a CDN to use it.

If you still want to import `monaco-editor` files from `node_modules` and bundle them into your code (without using remote loading), you will need to use a bundling tool. See [here](#npm-package).

## Installation

```sh
npm i @guolao/vue-monaco-editor
```

Vue `<= 2.6.14` requires [@vue/composition-api](https://github.com/vuejs/composition-api) to be installed.

```sh
npm i @guolao/vue-monaco-editor @vue/composition-api
```

Don't forget to register the `@vue/composition-api` plugin!

```ts
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
```

Of course, you can also use [unpkg](https://unpkg.com/@guolao/vue-monaco-editor/lib/umd/monaco-vue.js).

## Usage

**Global Registration**

```ts
import { createApp } from 'vue'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

const app = createApp(App)
app.use(VueMonacoEditorPlugin, {
  paths: {
    // You can change the CDN config to load other versions
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.54.0/min/vs'
  },
})
```

**Local Registration**

```ts
// main.ts
import { loader } from '@guolao/vue-monaco-editor'
loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.54.0/min/vs',
  },
})

// editor.vue
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
export default {
  components: { VueMonacoEditor },
}
```

And then, use it.

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
const editor = shallowRef()
const handleMount = editorInstance => (editor.value = editorInstance)

// your action
function formatCode() {
  editor.value?.getAction('editor.action.formatDocument').run()
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

const diffEditor = shallowRef()
const handleMount = diffEditorInstance => (diffEditor.value = diffEditorInstance)

// get the original value
function getOriginalValue() {
  return diffEditor.value.getOriginalEditor().getValue()
}

// get the modified value
function getModifiedValue() {
  return diffEditor.value.getModifiedEditor().getValue()
}
</script>
```

## Props & Events & slots

### Editor

| Name | Type | Default | Description | remark |
| --- | --- | --- | --- | --- |
| value | `string` |  | value of the current model, can use `v-model:value` | `v-model:value` |
| language | `string` |  | all language of the current model | languages supported by `monaco-editor`, [view here](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| path | `string` |  | path to the current model |  |
| defaultValue | `string` |  | default value of the current model |  |
| defaultLanguage | `string` |  | default language of the current model | languages supported by `monaco-editor` [view here](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| defaultPath | `string` |  | default path of the current model | `monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))` |
| theme | `vs` \| `vs-dark` | `vs` | the theme for the monaco editor. |  |
| line | `number` |  | number of lines to jump to |  |
| options | `object` | `{}` | [IStandaloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html) |  |
| overrideServices | `object` | `{}` | [IEditorOverrideServices](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOverrideServices.html) |  |
| saveViewState | `boolean` | `true` | save the view state of the model (scroll position, etc.) after model changes | a unique `path` needs to be configured for each model |
| width | `number` \| `string` | `100%` | container width |  |
| height | `number` \| `string` | `100%` | container height |  |
| className | `string` |  | inner container class name |  |
| @beforeMount | `(monaco: Monaco) => void` |  | execute before the editor instance is created (don't use `@before-mount` in vue2, [detail](https://v2.vuejs.org/v2/guide/components-custom-events#Event-Names)) |  |
| @mount | `(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void` |  | execute after the editor instance has been created |  |
| @change | `(value: string \| undefined, event: monaco.editor.IModelContentChangedEvent) => void` |  | execute when  the changed value change |  |
| @validate | `(markers: monaco.editor.IMarker[]) => void` |  | execute when a syntax error occurs | `monaco-editor` supports syntax-checked languages [view here](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) |
| `#default` | `slot` | `'loading...'` | loading status | when loading files from CDN, displaying the loading status will be more friendly |
| `#failure` | `slot` | `'load failed'` | failure status | example: CDN network error |

### Diff Editor

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| original | `string` |  | The original source value (left editor) |
| modified | `string` |  | The modified source value (right editor) |
| language | `string` |  | Language for the both models - original and modified (all languages that are [supported](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages) by monaco-editor) |
| originalLanguage | `string` |  | This prop gives you the opportunity to specify the language of the original source separately, otherwise, it will get the value of the language property. |
| modifiedLanguage | `string` |  | This prop gives you the opportunity to specify the language of the modified source separately, otherwise, it will get the value of language property. |
| originalModelPath | `string` |  | Path for the "original" model. Will be passed as a third argument to `.createModel` method - `monaco.editor.createModel(..., ..., monaco.Uri.parse(originalModelPath))` |
| modifiedModelPath | `string` |  | Path for the "modified" model. Will be passed as a third argument to `.createModel` method - `monaco.editor.createModel(..., ..., monaco.Uri.parse(modifiedModelPath))` |
| theme  | `vs` \| `vs-dark` \| `string` | `vs` (`vs` theme equals `light` theme) | The theme for the monaco editor. Define new themes by `monaco.editor.defineTheme`. |
| options | `object` | `{}` | [IStandaloneDiffEditorConstructionOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneDiffEditorConstructionOptions.html) |
| width | `number` \| `string` | `100%` | Container width |
| height | `number` \| `string` | `100%` | Container height |
| className | `string` |  | Inner container class name |
| @beforeMount | `(monaco: Monaco) => void` |  | Execute before the editor instance is created (don't use `@before-mount` in vue2, [detail](https://v2.vuejs.org/v2/guide/components-custom-events#Event-Names)) |
| @mount | `(editor: monaco.editor.IStandaloneDiffEditor, monaco: Monaco) => void` |  | Execute after the editor instance has been created |
| `#default` | `slot` | `'loading...'` | Loading status |
| `#failure` | `slot` | `'load failed'` | Failure status |  |

## Hooks

`useMonaco` use [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader) to load `monaco-editor` from the CDN.

```vue
<template>
  <div ref="containerRef"></div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, watchEffect, nextTick } from 'vue'
import { useMonaco } from '@guolao/vue-monaco-editor'

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

`vue-monaco-editor` use [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader) to load the `monaco-editor` from the CDN(the loading process of `loader` is asynchronous).

The configuration of `loader` is global, only to be configured once.

```ts
import { createApp } from 'vue'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

const app = createApp(App)
app.use(VueMonacoEditorPlugin, {
  paths: {
    // You can change the CDN config to load other versions
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.54.0/min/vs'
  },
})
```

```ts
import { loader } from "@guolao/vue-monaco-editor"

// loaded from CDN
loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.54.0/min/vs'
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

If you still want to import `monaco-editor` files from `node_modules` and bundle them into your code (without using remote loading), you will need to use a bundling tool.

```js
import * as monaco from "monaco-editor"
import { loader } from "@guolao/vue-monaco-editor"

// loaded monaco-editor from `node_modules`
loader.config({ monaco })
```

### Vite

If you are using `vite`, you need to do this (see [#1791 (comment)](https://github.com/vitejs/vite/discussions/1791#discussioncomment-321046) for details).

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

If you are using `Rollup`, you can use the community provided plugin [rollup-plugin-monaco-editor](https://github.com/chengcyber/rollup-plugin-monaco-editor).

### Webpack

If you are using `webpack`, `monaco-editor` officially provides a `webpack` plugin called [monaco-editor-webpack-plugin](https://www.npmjs.com/package/monaco-editor-webpack-plugin), which you can install and use.

## Inspiration

MonacoVue is made possible thanks to the inspirations from the following projects:

- [monaco-loader](https://github.com/suren-atoyan/monaco-loader)
- [monaco-react](https://github.com/suren-atoyan/monaco-react/tree/master)

## License

[MIT](LICENSE)
