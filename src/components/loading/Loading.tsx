import { defineComponent, normalizeStyle } from 'vue'

const loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}

export default defineComponent((props, { slots }) => {
  return () => (
    <div style={normalizeStyle(loadingStyles)}>
      {slots.default?.()}
    </div>
  ) 
})
