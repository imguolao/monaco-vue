import { defineComponent, reactive, toRefs, provide, inject, UnwrapRef, InjectionKey } from 'vue'
import { NSelect, NH2 } from 'naive-ui'
import { themes } from '../editor/Config'

type Config = {
  theme: string
}

type Context = {
  config: UnwrapRef<Config>
}

const injectKey: InjectionKey<Context> = Symbol('diff editor')

export function useDiffEditorConfig() {
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

export const DiffEditorConfig = defineComponent({
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
