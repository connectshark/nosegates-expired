<template>
<div class="home">
  <HeadWrapper/>
  <section class="link-group">
    <ul class="links">
      <li class="link" v-for="link in links" :key="link.link">
        <Link
          :link="link.link"
          :name="link.name"
        />
      </li>
    </ul>
  </section>
  <h3>實用工具</h3>
  <section class="utils">
    <ul class="links">
      <li v-for="card in cards" :key="card.name" class="link">
        <Card
          :name="card.name"
          :link="card.link"
        />
      </li>
    </ul>
  </section>
  <FooterWrapper/>
</div>
</template>

<script>
import HeadWrapper from '../components/headWrapper.vue'
import Link from '../components/link.vue'
import Card from '../components/card.vue'
import FooterWrapper from '../components/footerWrapper.vue'
export default {
  components: {
    HeadWrapper,
    Link,
    Card,
    FooterWrapper
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
      ],
      cards: [
        {
          name: '蝦皮短網址',
          link: 'https://shopee.nosegates.com/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';
.link-group, .utils{
  padding: 40px 0;
  .links{
    width: 340px;
    margin: auto;
    .link{
      margin-bottom: 30px;
    }
  }
}
h3{
  background-color: $yellow;
  color: $gray;
  box-shadow: 0 0 0 2px $gray;
  font-size: 24px;
  line-height: 2;
  width: 200px;
  margin: auto;
  padding: 10px;
}
</style>