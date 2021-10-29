import { ref, onMounted } from 'vue'

const load = {
  mountLoad () {
    const loading = ref(true)
    onMounted(() => {
      loading.value = false
    })
    return {
      loading
    }
  }
}

export default load