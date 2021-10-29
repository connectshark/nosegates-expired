<template>
<div class="card-item">
  <a :href="link" class="bottom" target="_blank">
    <div class="top">
      <img src="../assets/img/shopee.png" alt="shopee">
      <h4>{{name}}<i class='bx bx-chevron-right'></i></h4>
    </div>
  </a>
</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    link: {
      type: String
    }
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';
@import '../assets/scss/mixin.scss';
.card-item{
  width: 200px;
  margin: auto;
  .bottom{
    display: block;
    box-shadow: 0 0 0 2px $blue;
    width: 200px;
    height: 200px;
    background-color: $bg;
    text-decoration: none;
    .top{
      box-sizing: border-box;
      width: 200px;
      height: 200px;
      box-shadow: 0 0 0 2px $blue;
      background-color: $bg;
      transform: translate(-5px, -5px);
      padding: 15px 0 0;
      img{
        display: block;
        width: 146px;
        height: 146px;
        margin: auto;
        border: 2px solid $blue;
      }
      h4{
        color: $blue;
        font-size: 24px;
        line-height: 25px;
      }
    }
  }
}
</style>