<template>
  <div v-if="filmInfo">
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

    <p>剧照</p>
    <detail-swiper :slidesperview ="3" sperclass="photos">
      <div class="swiper-slide" v-for="(item ,index) in filmInfo.photos"  :key="index">
           <div :style="{ backgroundImage: 'url('+item+')' }" class="photo"  @click="clickPreview(index)"></div>
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

import { ImagePreview } from 'vant'
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
    },
    clickPreview (index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        loop: true, // 是否开启循环播放
        closeable: true, // 是否显示关闭图标
        closeIconPosition: 'top-left' // 关闭图标位置
      })
    }
  },
  mounted () {
    // Toast.loading({
    //   message: '加载中...',
    //   forbidClick: true,
    //   overlay: true,
    //   duration: 0
    // })
    http({
      url: `/gateway?filmId=${this.$route.params.myid}&k=6010073`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filmInfo = res.data.data.film
      // Toast.clear()
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
.photo{
    height: 100px;
    background-position: center;
    background-size: cover;
  }
</style>
