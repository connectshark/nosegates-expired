<template>
<header class="headWrapper">
  <transition name="fade">
    <figure v-show="!loading">
      <img src="../assets/img/hero.jpg" alt="hero" @dragstart.prevent @load="loadEnd">
    </figure>
  </transition>
  <h1>Nosegates</h1>
  <h2>
    <a href="mailto:bobhus394@gmail.com">bobhus394@gmail.com</a>
  </h2>
  <nav>
    <ul>
      <li v-for="nav in socials" :key="nav.icon">
        <a :href="nav.url" target="_blank">
          <i class='bx' :class="nav.icon"></i>
        </a>
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    socials: {
      type: Array
    }
  },
  setup () {
    const loading = ref(true)

    const loadEnd = () => {
      loading.value = false
    }

    return {
      loading,
      loadEnd
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/animation.scss';
.headWrapper{
  padding: 40px 0 0;
  figure{
    img{
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 50%;
      border: 5px solid $yellow;
    }
  }
  h1{
    color: $yellow;
    @include title;
    @include stroke (2px);
  }
  h2{
    a{
      font-size: 18px;
      color: $gray;
      text-decoration: none;
      line-height: 1;
    }
  }
  nav{
    padding: 20px 0 0;
    ul{
      li{
        display: inline-block;
        margin: 0 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 0 0 2px $blue;
        background-color: $yellow;
        transform: scale(1);
        transition: transform .3s;
        a{
          color: $blue;
          display: block;
          i{
            font-size: 25px;
            line-height: 40px;
          }
        }
        &:hover{
          transform: scale(1.3);
        }
      }
    }
  }
}
</style>