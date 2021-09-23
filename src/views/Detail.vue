<template>
  <div v-if="filmInfo">
    <!-- <img :src="filmInfo.poster"> -->
    <detail-header></detail-header>
    <div
      :style="{ backgroundImage: 'url(' + filmInfo.poster + ')' }"
      class="bg"
    ></div>
    <div class="film-detail">
      <span class="film-name">{{ filmInfo.name }}</span>
      <span class="film-item">{{ filmInfo.filmType.name }}</span>
      <p class="grey-text">{{ filmInfo.category }}</p>
      <p class="grey-text">{{ filmInfo.premiereAt |dateFilter}}上映</p>
      <p class="grey-text">{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</p>
      <p class="grey-text" :class="isShow?'':'synopsis'">{{filmInfo.synopsis}}</p>
      <div style="text-align:center;"><i class="iconfont grey-text" @click="handClick" :class="isShow?'icon-less':'icon-moreunfold'"></i></div>
    </div>

    <div class="distance"></div>

    <p class="title-bar">演职人员</p>
    <detail-swiper :slidesperview ="4" sperclass="actors">
      <div class="swiper-slide" v-for="(item ,index) in filmInfo.actors" :key="index">
        <img :src="item.avatarAddress"/>
      </div>
    </detail-swiper>

    <div class="distance"></div>

    <p class="title-bar">剧照</p>
    <detail-swiper :slidesperview ="3" sperclass="photos">
      <div class="swiper-slide" v-for="(item ,index) in filmInfo.photos" :key="index">
           <div :style="{ backgroundImage: 'url(' + item + ')' }" class="photo"></div>
      </div>
    </detail-swiper>

    <div class="distance"></div>
    <shop></shop>
  </div>

</template>
<script>
import http from '@/util/http'
import moment from 'moment'
import Vue from 'vue'
import DetailSwiper from './detail/DetailSwiper'
import DetailHeader from './detail/DetailHeader'
import Shop from '../components/shop'
Vue.filter('dateFilter', (date) => {
  return moment(date * 1000).format('YYYY-MM-DD')
})
export default {
  data () {
    return {
      filmInfo: null,
      isShow: false
    }
  },
  components: {
    DetailSwiper,
    DetailHeader,
    Shop
  },
  methods: {
    handClick () {
      this.isShow = !this.isShow
    }
  },
  mounted () {
    // 动态路由获取参数
    console.log(this.$route.params.myid) // 当前匹配的路由对象

    // query 获取参数
    // console.log(this.$route.query.myid)
    console.log('利用传来的id，根据后端的接口，拿回对应id的详细信息')
    http({
      url: `/gateway?filmId=${this.$route.params.myid}&k=6010073`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data.data.film)
      this.filmInfo = res.data.data.film
    })
  }
}
</script>
<style lang="scss" scoped>
.bg {
  height: 210px;
  background-position: center;
  background-size: cover;
}
.synopsis{
  height: 50px;
  overflow: hidden;
}
.film-detail{
  padding: 15px;
  padding-top: 12px;
}
.film-name {
    color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;
}
.film-item {
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    display: inline-block;
}
.grey-text {
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
    padding: 1px;
}
.distance {
  height: 10px;
  background-color: #f5f5f5;
}
.title-bar {
    width: 100%;
    padding: 15px;
}
.photo{
    height: 100px;
    background-position: center;
    background-size: cover;
  }
</style>
