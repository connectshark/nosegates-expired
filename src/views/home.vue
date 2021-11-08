<template>
<div class="home">
  <HeadWrapper :socials="data.social"/>
  <section class="link-group">
    <ul class="links">
      <li class="link" v-for="link in data.links" :key="link.link">
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
      <li v-for="card in data.utils" :key="card.name" class="link">
        <Card
          :title="card.title"
          :url="card.url"
          :img="card.img"
        />
      </li>
    </ul>
  </section>
  <FooterWrapper/>
</div>
</template>

<script>
import { ref } from 'vue'
import HeadWrapper from '../components/headWrapper.vue'
import Link from '../components/link.vue'
import Card from '../components/card.vue'
import FooterWrapper from '../components/footerWrapper.vue'
import fetchData from '../hook/fetchData'
export default {
  components: {
    HeadWrapper,
    Link,
    Card,
    FooterWrapper
  },
  setup () {
    const cards = ref([])
    const { data } = fetchData.get('index.json')
    return {
      data,
      cards
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