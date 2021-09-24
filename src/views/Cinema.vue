<template>
  <div :style="{height:height}" class="cinbox">
    <ul>
      <li v-for="item in cineam" :key="item.cinemaId">
          <span class="cinema-name p">{{item.name}}</span><br>
           <p class="price">￥{{item.lowPrice |numFilter}}起</p>
          <p class="cinema-address p">{{item.address}}</p>

      </li>
    </ul>
  </div>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
import BetterScroll from 'better-scroll'
Vue.filter('numFilter', (lowPrice) => {
  return parseFloat((lowPrice / 100).toFixed(1))
})
export default {
  data () {
    return {
      cineam: [],
      height: document.documentElement.clientHeight - 50 + 'px'
    }
  },
  mounted () {
    http({
      url: '/gateway?cityId=110100&ticketFlag=1&k=170564',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.cineam = res.data.data.cinemas
      this.$nextTick(() => {
        new BetterScroll('.cinbox', {
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          }
        })
      })
    })
  }
}
</script>
<style lang="scss" scoped>
li {
    position: relative;
    background-color: #fff;
    padding: 15px;
}
.p{
  width: 59%;
}
.cinema-name {
    color: #191a1b;
    font-size: 15px;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.cinema-address {
    color: #797d82;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.price {
color: #ff5f16;
font-size: 15px;
float: right;
text-align: center;
width: 70px;
}

.cinbox{
  overflow: hidden;
  position: relative
}
</style>
