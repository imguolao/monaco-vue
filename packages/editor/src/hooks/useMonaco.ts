import type { Nullable, MonacoEditor } from '../types'
import { onMounted, shallowRef } from 'vue-demi'
import loader from '@monaco-editor/loader'

export function useMonaco() {
  const monacoRef = shallowRef<Nullable<MonacoEditor>>(loader.__getMonacoInstance())

  let promise: ReturnType<(typeof loader)['init']>

  onMounted(() => {
    // the instance has already been loaded
    if (monacoRef.value) return

    promise = loader.init()
    promise
      .then(monacoInstance => (monacoRef.value = monacoInstance))
      .catch(error => {
        if (error?.type !== 'cancelation') {
          console.error('Monaco initialization error:', error)
        }
      })
  })

  // monaco mount
  const unload = () => promise?.cancel()

  return {
    monacoRef,
    unload,
  }
}
