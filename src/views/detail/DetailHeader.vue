<template>
  <div>
    <div class="h" v-scrolltop = '50'>电影名</div>
    <div class="back" @click="handleback()">
      <i class="iconfont icon-back"></i>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.directive('scrolltop', {
  inserted (el, binding) {
    // console.log(el)
    el.style.display = 'none'
    window.onscroll = () => {
      // console.log(document.documentElement.scrollTop || document.body.scrollTop)
      if ((document.documentElement.scrollTop || document.body.scrollTop) > binding.value) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})
export default {
  destroyed () {

  },
  methods: {
    handleback () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
.h {
  position: fixed;
  top: 0px;
  left: 0px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  width: 100%;
  background-color: white;
}
.back {
  position: fixed;
  top: 10px;
  left: 0px;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 30px;
  line-height: 30px;
  background-color: white;
  opacity: 0.6;
}
</style>
