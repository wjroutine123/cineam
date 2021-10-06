import Vue from 'vue'// ES6 模块化导入
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// vue模块化初始化方式
new Vue({
  router, // 将路由配置文件与vue项目关联， this.$router来访问路由
  store,
  render: h => h(App)
}).$mount('#app')
