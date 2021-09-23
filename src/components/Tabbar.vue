<template>
  <nav>
    <!-- 实现路径的切换，高亮切换 -->
    <!-- 监听路径改变， window.onhashchange = ()=>{ }  -->
    <ul>
      <router-link to="/film" tag="li"   activeClass="kerwinactive">
        <i class="iconfont  icon-all"></i>
        <span>电影</span>
      </router-link>
      <router-link to="/cinema" tag="li" activeClass="kerwinactive">
        <i class="iconfont  icon-pic"></i>
        <span>影院</span>
      </router-link>
      <router-link to="/center" tag="li" activeClass="kerwinactive">
        <i class="iconfont  icon-account"></i>
        <span>我的</span>
      </router-link>
    </ul>

    <!-- 声明式导航 a href -->

    <!-- 编程式导航-- location.href -->
  </nav>
</template>
<script>
import '@/assets/iconfont/iconfont.css'
export default {

}
</script>
<style lang="scss" scoped>
  .kerwinactive{
    color:red;
  }

  nav{
    position:fixed;
    left:0px;
    bottom: 0;
    background:white;
    width:100%;
    height: 50px;
    line-height: 25px;
    text-align: center;
    z-index: 99;
    ul{
      display: flex;
      li{
        flex:1;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
