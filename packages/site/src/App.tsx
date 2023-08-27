import { computed, defineComponent, ref } from 'vue'
import DarkMode from './components/darkMode'
import GitHubCorners from './components/gitHubCorners'
import SiteHeader from './components/header'
import DocumentBody from './components/body'
import './App.less'

export default defineComponent(() => {
  const isDarkMode = ref(true)
  const editorTheme = computed(() => (isDarkMode.value ? 'vs-dark' : 'vs'))
  return () => (
    <>
      <DarkMode class="page-dark-mode" onChange={val => (isDarkMode.value = val)} />
      <GitHubCorners class="page-github-corners" href="https://github.com/imguolao/monaco-vue" />
      <SiteHeader />
      <DocumentBody editorTheme={editorTheme.value} />
    </>
  )
})
