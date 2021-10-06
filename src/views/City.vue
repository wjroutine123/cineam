<template>
    <div>
        <van-index-bar>
          <div v-for="data in cityList" :key="data.type">
            <van-index-anchor :index="data.type"/>
            <van-cell :title="item.name" v-for="item in data.items" :key="item.cityId" @click="handleClick(item)"/>
          </div>
        </van-index-bar>
  </div>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
import { IndexBar, IndexAnchor } from 'vant'

Vue.use(IndexBar).use(IndexAnchor)
export default {
  data () {
    return {
      cityList: []
    }
  },
  mounted () {
    http({
      url: '/gateway?k=9596464',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.cityList = this.handleData(res.data.data.cities)
      console.log(this.cityList)
    })
  },
  methods: {
    handleData (cities) {
      const wordArr = []
      const cityArr = []
      for (var i = 65; i < 91; i++) {
        wordArr.push(String.fromCharCode(i))
      }
      wordArr.forEach(wordArr => {
        var city = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === wordArr)

        if (city.length > 0) {
          cityArr.push({
            type: wordArr,
            items: city
          })
        }
      })
      console.log(cityArr)

      return cityArr
    },
    handleClick (item) {
      this.$store.commit('setCityName', item.name)
      this.$store.commit('setCityId', item.cityId)
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
