<template>
    <div style="height: 100%;">
      <div class="header">
        <button @click="handleEditorSelect" :disabled="isEditor">Editor</button>
        <button @click="handleEditorSelect" :disabled="!isEditor">Diff Editor</button>
      </div>
      <editor-demo v-show="isEditor" />
      <diff-editor-demo v-show="!isEditor" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
  }
})
</script>

<style>
.header {
  height: 40px;
}
</style>
