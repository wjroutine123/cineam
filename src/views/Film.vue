<template>
  <div>
    <film-swiper>
      <div class="swiper-slide">
        <img src="https://static.maizuo.com/v5/upload/389b3637851206ecfd54d23fd4b394d0.jpg?x-oss-process=image/quality,Q_70">
      </div>
      <div class="swiper-slide">
        <img src='https://static.maizuo.com/v5/upload/c71c7658087368381e5386b9949c7ecc.jpg?x-oss-process=image/quality,Q_70'>
      </div>
      <div class="swiper-slide">
        <img src='https://static.maizuo.com/v5/upload/005d39b95944b1b64b0ad1ad31c975bf.jpg?x-oss-process=image/quality,Q_70'>
      </div>
      <div class="swiper-slide">
        <img src='https://static.maizuo.com/v5/upload/b97a02ee03f82d27cd2765cb0b273fa6.jpg?x-oss-process=image/quality,Q_70'>
      </div>
    </film-swiper>
    <film-header></film-header>

    <!-- 容器组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from './films/FilmHeader'
import filmSwiper from './films/FilmSwiper'
export default {
  components: {
    filmHeader,
    filmSwiper
  }
}
</script>
