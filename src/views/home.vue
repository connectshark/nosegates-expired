<template>
<div class="home">
  <HeadWrapper/>
  <section>
    <ul>
      <Link/>
    </ul>
  </section>
</div>
</template>

<script>
import HeadWrapper from '../components/headWrapper.vue'
import Link from '../components/link.vue'
export default {
  components: {
    HeadWrapper,
    Link
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>