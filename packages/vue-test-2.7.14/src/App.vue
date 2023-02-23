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
        :default-language="file.language"
        :default-value="file.value"
        @change="handleChange"
      />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
// import Editor from '@guolao/vue-monaco-editor'
import files from './files'

export default defineComponent({
  // components: { Editor },
  setup() {
    const fileName = ref<keyof typeof files>("script.js");
    const file = computed(() => files[fileName.value]);
    const handleClick = (name: keyof typeof files) => fileName.value = name
    const handleChange = (val: string, event: any) => console.log(val, event)

    return {
      fileName,
      file,
      files,
      handleClick,
      handleChange,
    }
  },
})
</script>
