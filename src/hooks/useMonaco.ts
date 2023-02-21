import type { Nullable, MonacoEditor } from '../types'
import { shallowRef } from 'vue-demi'
import loader from '@monaco-editor/loader'

export function useMonaco() {
  const monacoRef = shallowRef<Nullable<MonacoEditor>>(null)

  // monaco mount
  const monacoLoader = loader.init()
  const unload = () => monacoLoader.cancel()

  monacoLoader
    .then(monacoInstance => (monacoRef.value = monacoInstance))
    .catch(error => {
      if (error?.type !== 'cancelation') {
        console.error('Monaco initialization error:', error)
      }
    })

  return {
    monacoRef,
    unload,
  }
}
