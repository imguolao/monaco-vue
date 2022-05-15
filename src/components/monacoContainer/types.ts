import type { ExtractPropTypes, PropType } from 'vue'

export const monacoContainerProps = {
  width: {
    type: [Number, String],
    required: true as const,
  },

  height: {
    type: [Number, String],
    required: true as const,
  },

  isEditorReady: {
    type: Boolean,
    required: true as const,
  },

  className: String,

  setContainerRef: Function as PropType<(ref: HTMLElement | null) => void>,
}

export type MonacoContainerProps = ExtractPropTypes<typeof monacoContainerProps>
