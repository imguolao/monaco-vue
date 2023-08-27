<template>
  <div style="height: 100%;">
    <button 
      v-for="item in files" 
      :key="item.name"
      @click="handleClick(item.name)">
      {{ item.name }}
    </button>
    <vue-monaco-editor 
      height="80vh"
      theme="vs-dark"
      :path="fileName"
      :language="file.language"
      :value="file.value"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import files from './files'

export default defineComponent({
  name: 'EditorDemo',
  setup() {
    const fileName = ref<keyof typeof files>("script.js");
    const file = computed(() => files[fileName.value]);
    const handleClick = (name: string) => fileName.value = name as keyof typeof files
    const handleChange = (val: string, event: any) => console.log(val, event)

    return { 
      fileName, 
      file, 
      files,
      handleClick,
      handleChange,
    }
  }
})
</script>
