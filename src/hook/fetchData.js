import { ref } from 'vue'

const fetchData = {
  get (path) {
    const data = ref([])
    const dataLoading = ref(true)
    fetch( process.env.VUE_APP_API_URL + `/repos/connectshark/linktree-data/contents/${path}?ref=master`, {
      headers: { Accept: 'application/vnd.github.v3.raw' }
    }).then(res => res.json())
      .then(res => {
        data.value = res
        dataLoading.value = false
      })
      .catch(() => {
        dataLoading.value = false
        alert('警告')
      })

    return {
      data,
      dataLoading
    }
  }
}

export default fetchData