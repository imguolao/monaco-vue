<template>
  <vue-monaco-diff-editor
    height="80vh"
    theme="vs-dark"
    :original="original"
    :modified="modified"
    :language="lang" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import example from './example'

export default defineComponent({
  name: 'DiffEditorDemo',
  setup() {
    return { ...example }
  }
})
</script>
