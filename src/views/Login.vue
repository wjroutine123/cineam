<template>
  <div>
    login
    <input type="text" v-model="mytext"/>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mytext: ''
    }
  },
  methods: {
    handleLogin () {
      localStorage.setItem('token', this.mytext)

      this.$router.push('/center')
    }
  }
}
</script>
