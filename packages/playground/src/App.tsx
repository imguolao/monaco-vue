import { defineComponent, ref } from 'vue'
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider, NButton } from 'naive-ui'
import EditorDemo from './views/editor/Editor'
import DiffEditorDemo from './views/diffEditor/DiffEditor'
import Github from './components/icons/Github.vue'
import { EditorConfig, useEditorConfig } from './views/editor/Config'
import { DiffEditorConfig, useDiffEditorConfig } from './views/diffEditor/Config'
import './App.css'

const goToGithub = () => {
  window.open('https://github.com/imguolao/monaco-vue')
}

export default defineComponent({
  setup() {
    useEditorConfig()
    useDiffEditorConfig()

    const isDiffEditor = ref(false)
    const handleEditorSelect = () => (isDiffEditor.value = !isDiffEditor.value)

    return () => (
      <NLayout class="wrapper">
        <NLayoutHeader class="header" bordered>
          <div class="header--left">
            <p class="header--icon">{'<MV />'}</p>
            <p class="header--title">Monaco Editor Vue</p>
          </div>
          <div class="header--right">
            <NButton onClick={handleEditorSelect} disabled={!isDiffEditor.value}>
              Editor
            </NButton>
            <NButton onClick={handleEditorSelect} disabled={isDiffEditor.value}>
              DiffEditor
            </NButton>
            <NButton
              icon-placement="right"
              onClick={goToGithub}
              v-slots={{
                icon: () => <Github />,
              }}
            >
              Github
            </NButton>
          </div>
        </NLayoutHeader>
        <NLayout class="main" has-sider>
          <NLayoutContent class="content">{isDiffEditor.value ? <DiffEditorDemo /> : <EditorDemo />}</NLayoutContent>
          <NLayoutSider width={380}>{isDiffEditor.value ? <DiffEditorConfig /> : <EditorConfig />}</NLayoutSider>
        </NLayout>
      </NLayout>
    )
  },
})
