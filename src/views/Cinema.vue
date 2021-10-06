
<template>
    <div>
        <van-nav-bar title="影院">
        <template #left>{{$store.state.cityName}}
          <div @click="handleClickCity">
            <van-icon name="arrow-down" color="#000"/>
          </div>
          </template>
          <template #right>
          <van-icon name="search" size="22" color="#000" />
          </template>
        </van-nav-bar>

        <div :style="{height:height}" class="cinbox">
        <ul>
          <li v-for="item in cineam" :key="item.cinemaId">
              <span class="cinema-name p">{{item.name}}</span><br>
              <p class="price">￥{{item.lowPrice |numFilter}}起</p>
              <p class="cinema-address p">{{item.address}}</p>
          </li>
        </ul>
        </div>
    </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'
import BetterScroll from 'better-scroll'
import { NavBar, Icon } from 'vant'

Vue.use(NavBar).use(Icon)
Vue.filter('numFilter', (lowPrice) => {
  return parseFloat((lowPrice / 100).toFixed(1))
})
export default {
  data () {
    return {
      cineam: [],
      height: document.documentElement.clientHeight - 50 - 50 + 'px'
    }
  },
  methods: {
    handleClickCity () {
      this.$router.push('./city')
    }
  },
  mounted () {
    // this.height =
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=1705641`,
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.cineam = res.data.data.cinemas
      this.$nextTick(() => {
        new BetterScroll('.cinbox', {
          scrollbar: {
            fade: true,
            interactive: false
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
