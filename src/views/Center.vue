<template>
  <div>
    center
  </div>
</template>
<script>
export default {

  // 组件内路由守卫生命周期
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  },
  // 组件生命周期
  mounted () {
    // 自己写验证？
    // 1. 需要写多遍
    // 2. 已经开始渲染了，
  }
}
</script>
