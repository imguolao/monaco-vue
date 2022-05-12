import type { ExtractPropTypes, PropType, ComponentPublicInstance } from 'vue'

export const monacoContainerProps = {
  width: {
    type: [Number, String],
    required: true as true,
  },

  height: {
    type: [Number, String],
    required: true as true,
  },

  isEditorReady: {
    type: Boolean,
    required: true as true,
  },

  className: String,

  setContainerRef: Function as PropType<(ref: HTMLElement | null) => void>,
}

export type MonacoContainerProps = ExtractPropTypes<typeof monacoContainerProps> 
