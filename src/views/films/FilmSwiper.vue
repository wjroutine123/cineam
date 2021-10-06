<template>
  <div class="swiper-container film">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// swiper 模块化安装
import Swiper from 'swiper/swiper-bundle.js' // swiper js
import 'swiper/swiper-bundle.css' // swiper css
export default {
  mounted () {
    new Swiper('.film', {
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      autoplay: true
    })
  }
}
</script>
<style lang="scss" scoped>
  .swiper-wrapper{
    img{
      width: 100%;
      height: 200px;
    }
  }
</style>
