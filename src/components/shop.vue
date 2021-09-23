<template>
  <nav>
    <router-link to="/cinema">
      <span>选座购票</span>
    </router-link>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 49px;
  width: 100%;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
  z-index: 100;
}
span {
  color: #fff;
}
a{
   text-decoration: none;
}
</style>
