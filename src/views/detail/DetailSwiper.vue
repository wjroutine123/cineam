<template>
    <div class="swiper-container" :class="sperclass">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.css'
export default {
  props: {
    slidesperview: {
      default: 1,
      type: Number
    },
    sperclass: {
      default: 'swiper-container',
      type: String
    }
  },
  mounted () {
    new Swiper('.' + this.sperclass, {
      slidesPerView: this.slidesperview,
      spaceBetween: 20,
      freeMode: true
    })
  }
}
</script>
<style lang="scss" scoped>
.swiper-wrapper{
    img{
        width: 100%;
    }
}
</style>
