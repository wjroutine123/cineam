<template>
  <div>
    <ul>
      <li v-for="data in list" :key="data.filmId" @click="handleClick(data.filmId)">
        <img class='p' :src="data.poster">
        <span class="name dist">{{data.name}}</span>
        <span class="item dist">{{data.filmType.name}}</span>
        <p  class="dist" v-show ="data.grade">观众评分:<span class="grade">{{data.grade}}</span></p>
        <p class="r">购票</p>
        <p class="actors dist">主演：
          <span>{{data.actors|actorFilter}}</span>
        </p>
        <p class="dist">{{data.nation}} | {{data.runtime}}分钟</p>
      </li>
    </ul>
  </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'
Vue.filter('actorFilter', (actors) => {
  if (!actors) return '暂无主演'
  return actors.map(item => item.name).join(' ')
})

export default {
  name: 'Nowplaying',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    http({
      url: '/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7653672',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.list = res.data.data.films
    })
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/detail/${id}`) // 跳转页面
    }
  }
}
</script>
<style lang="scss" scoped>
.l{
  width: 84.5%;
}
.name {
  color: #191a1b;
  font-size: 16px;
  height: 22px;
  line-height: 22px;
  margin-right: 5px;
}
.item {
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
}
.grade {
    color: #ffb232;
    font-size: 14px;
}
li{
  overflow: hidden;
  padding: 10px;
  font-size: 13px;
  color: #797d82;
  background-color: #fff;
  img{
    float: left;
    width: 66px;
  }
  border-bottom: 1px solid #ededed;
}
.actors{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dist{
  margin-top: 4px;
}
.r{
  display: block;
  margin: 0 auto;
  float: right;
  text-align: center;
  color: #ff5f16;
  border: 1px solid #ff5f16;
  border-radius: 2px;
  height: 1.5rem;
  line-height: 25px;
  width: 50px;
  position: relative;
  background-color: #fff;
  margin-left: 10px;
}
.p{
  padding: 0 10px;
}
</style>
