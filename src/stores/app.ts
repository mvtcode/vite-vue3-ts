import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useAppStore = defineStore('notification', () => {
  const loading = ref<boolean>(false)
  const errorCode = ref<boolean>(false)

  function setLoading(data: boolean) {
    loading.value = data
  }
  function setErrorCode(data: boolean) {
    errorCode.value = data
  }

  return { loading, errorCode, setLoading, setErrorCode }
})
