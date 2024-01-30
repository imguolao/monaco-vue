<template>
    <div style="height: 100%;">
      <div class="header">
        <button :disabled="isEditor" @click="handleEditorSelect">Editor</button>
        <button :disabled="!isEditor" @click="handleEditorSelect">Diff Editor</button>
      </div>
      <editor-demo v-show="isEditor" />
      <diff-editor-demo v-show="!isEditor" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import EditorDemo from './editor/EditorDemo.vue'
import DiffEditorDemo from './diffEditor/DiffEditorDemo.vue'

export default defineComponent({
  components: {
    EditorDemo,
    DiffEditorDemo,
  },
  setup() {
    const isEditor = ref(true)
    const handleEditorSelect = () => isEditor.value = !isEditor.value

    return {
      isEditor,
      handleEditorSelect,
    }
  },
})
</script>

<style>
.header {
  height: 40px;
}
</style>
