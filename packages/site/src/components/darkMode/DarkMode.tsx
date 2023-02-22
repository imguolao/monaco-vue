import type { PropType } from "vue";
import { defineComponent, ref, computed, watchEffect } from "vue";
import "./index.less";

export default defineComponent({
  name: "DarkMode",
  props: {
    onChange: Function as PropType<(value: boolean) => void>,
  },
  setup(props) {
    const isDarkMode = ref(true);
    const modeText = computed(() => (isDarkMode.value ? "Dark" : "Light"));
    const modeEmoji = computed(() => (isDarkMode.value ? "🌒" : "🌞"));

    watchEffect(() => {
      document.documentElement.setAttribute(
        "data-color-mode",
        modeText.value.toLowerCase(),
      );
    });

    function handleClick() {
      isDarkMode.value = !isDarkMode.value;
      props.onChange?.(isDarkMode.value);
    }

    return () => (
      <span class="dark-mode-wrapper" onClick={handleClick}>
        <span class="dark-mode-text">{modeEmoji.value}</span>
        <span>{modeText.value}</span>
      </span>
    );
  },
});
