<template>
  <div>
    <!-- 路由容器 -->
    <section>
      <router-view></router-view>
    </section>
    <!-- 选项卡组件 -->
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from '@/components/Tabbar'
export default {
  components: {
    tabbar
  }
}
</script>
<style lang="scss">

  *{
    margin:0;
    padding: 0;
  }
  html,body{
    height: 100%;
  }
  li{
    list-style: none;
  }
  section{
    padding-bottom: 50px;
  }
</style>
