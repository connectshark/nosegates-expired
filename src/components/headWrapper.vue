<template>
<header class="headWrapper">
  <figure>
    <img src="../assets/img/hero.jpg" alt="hero">
  </figure>
  <h1>Nosegates</h1>
  <h2>
    <a href="mailto:bobhus394@gmail.com">bobhus394@gmail.com</a>
  </h2>
  <nav>
    <ul>
      <li v-for="nav in navs" :key="nav.icon">
        <a :href="nav.link" target="_blank">
          <i class='bx' :class="nav.icon"></i>
        </a>
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  setup () {
    return {
      navs: [{
        link: 'https://www.facebook.com/EnTeng.Nose',
        icon: 'bxl-facebook-circle'
      }, {
        link: 'https://t.me/NoseGates',
        icon: 'bxl-telegram'
      }, {
        link: 'https://www.instagram.com/nose_gates/',
        icon: 'bxl-instagram'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';
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
    font-size: 48px;
    line-height: 1.5;
    color: $yellow;
    font-weight: bold;
    -webkit-text-stroke: 2px $gray;
    letter-spacing: -2px;
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
        a{
          color: $blue;
          display: block;
          i{
            font-size: 25px;
            line-height: 40px;
          }
        }
        
      }
    }
  }
}
</style>