import type { MonacoContainerProps } from './types'
import { defineComponent, normalizeStyle, computed } from 'vue'
import { monacoContainerProps } from './types'
import styles from './style'
import Loading from '../loading'

export default defineComponent({
  props: monacoContainerProps,
  setup(props: MonacoContainerProps, { slots }) {
    const wrapperStyle = computed(() => {
      const { width, height } = props
      return normalizeStyle({
        ...styles.wrapper,
        width,
        height,
      })
    })

    const containerStyle = computed(() => {
      return normalizeStyle({
        ...styles.fullWidth,
        ...(!props.isEditorReady && styles.hide),
      })
    })

    return () => (
      <div style={wrapperStyle.value}>
        {!props.isEditorReady && <Loading>{slots.default?.()}</Loading>}
        <div
          ref={props.setContainerRef as any}
          style={containerStyle.value}
          class={props.className}
        />
      </div>
    )
  },
})
