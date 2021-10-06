<template>
  <div>
    center
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  },
  mounted () {
  }
}
</script>
