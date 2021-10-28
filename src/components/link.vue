<template>
<div class="link-item">
  <a :href="link" class="bottom">
    <div class="top">
      <h4>{{name}}</h4>
      <i class='bx bxs-caret-right-circle icon'></i>
    </div>
  </a>
</div>
</template>

<script>
export default {
  props: {
    link: {
      type: String
    },
    name: {
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
.link-item{
  .bottom{
    width: 100%;
    box-shadow: 0 0 0 2px $blue;
    display: block;
    color: $yellow;
    text-decoration: none;
    .top{
      box-shadow: 0 0 0 2px $blue;
      position: relative;
      transform: translate(-5px, -5px);
      background-color: $yellow;
      transition: transform .3s;
      h4{
        font-size: 24px;
        line-height: 60px;
        background-color: $blue;
        width: 70%;
        margin: auto;
      }
      .icon{
        position: absolute;
        color: $gray;
        top: 0;
        right: 15px;
        margin: auto;
        line-height: 60px;
        font-size: 24px;
      }
    }
  }
  &:hover{
    .bottom{
      .top{
        transform: translate(-3px, -3px);
      }
    }
  }
  &:active{
    .bottom{
      .top{
        transform: translate(0, 0);
      }
    }
  }
}
</style>