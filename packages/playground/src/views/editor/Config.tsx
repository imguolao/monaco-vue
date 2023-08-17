import { defineComponent, reactive, toRefs, provide, inject, UnwrapRef, InjectionKey } from 'vue'
import { NSelect, NH2 } from 'naive-ui'

export interface Theme {
  value: string
  label: string
}

export const themes: Theme[] = [
  {
    label: 'Visual Studio',
    value: 'vs',
  },
  {
    label: 'Visual Studio Dark',
    value: 'vs-dark',
  },
  {
    label: 'High Contrast Dark',
    value: 'hc-black',
  },
]

type Config = {
  theme: string
}

type Context = {
  config: UnwrapRef<Config>
}

const injectKey: InjectionKey<Context> = Symbol('editor')

export function useEditorConfig() {
  const config = reactive<Config>({
    theme: 'vs',
  })

  provide(injectKey, { config })

  return {
    ...toRefs(config),
  }
}

export function useConfigContext() {
  const context = inject(injectKey)!
  return {
    ...toRefs(context.config),
  }
}

export const EditorConfig = defineComponent({
  setup() {
    const { theme } = useConfigContext()

    return () => (
      <div style="padding: 6px;">
        <NH2>Themes</NH2>
        <NSelect v-model:value={theme.value} options={themes as any} />
      </div>
    )
  },
})
