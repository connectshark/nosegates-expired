<template>
<div class="link">
  <a href="javascripts:;" class="bottom">
    <div class="top">
      <h4>連結</h4>
      <i class='bx bxs-caret-right-circle icon'></i>
    </div>
  </a>
</div>
</template>

<script>
export default {
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color.scss';
.link{
  .bottom{
    width: 100%;
    box-shadow: 0 0 0 2px $blue;
    display: block;
    color: $yellow;
    .top{
      box-shadow: 0 0 0 2px $blue;
      position: relative;
      top: -5px;
      left: -5px;
      background-color: $yellow;
      transition: top .3s, left .3s;
      h4{
        font-size: 24px;
        line-height: 60px;
        background-color: $blue;
        display: inline-block;
        padding: 0 20px;
      }
      .icon{
        position: absolute;
        color: $gray;
        top: 0;
        right: 20px;
        margin: auto;
        line-height: 60px;
        font-size: 24px;
      }
    }
  }
  &:hover{
    .bottom{
      .top{
        top: -3px;
        left: -3px;
      }
    }
  }
  &:active{
    .bottom{
      .top{
        top: 0;
        left: 0;
      }
    }
  }
}
</style>