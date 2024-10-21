import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEndpointStore = defineStore('endpoint', () => {
  const endPoint = ref<string | null>(null)

  // function getEndpointConfig() {
  //   return EndpointService.getConfig()
  //     .then(endpoint => endPointConfig.value = endpoint.data)
  //     .catch(error => console.error(error))
  // }

  return { endPoint }
})
