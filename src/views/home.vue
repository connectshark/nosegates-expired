<template>
<div class="home">
  <HeadWrapper/>
  <section>
    <ul class="links">
      <li class="link" v-for="link in links" :key="link.link">
        <Link
          :link="link.link"
          :name="link.name"
        />
      </li>
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
      links: [
        {
          link: 'https://tw.carousell.com/sandralu/',
          name: '女孩衣櫥飾品二手拍'
        },
        {
          link: 'https://blog.justlikeboss.com/financial/recyclemobile/',
          name: '舊手機回收資訊'
        },
        {
          link: 'https://www.instagram.com/tossphysio/',
          name: '辦公室族群的救星'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  padding: 40px 0;
  .links{
    width: 350px;
    margin: auto;
    .link{
      margin-bottom: 30px;
    }
  }
}
</style>