<template>
<footer>
  <h3>Thanks your click</h3>
</footer>
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
footer{
  background-color: $gray;
  padding: 20px 0;
  h3{
    font-size: 18px;
    letter-spacing: -2px;
    color: #fff;
    font-weight: bold;
  }
}
</style>