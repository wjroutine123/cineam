import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityName: '北京',
    cityId: '110100'
  },
  mutations: {
    setCityName (state, data) {
      state.cityName = data
    },
    setCityId (state, data) {
      state.cityId = data
    }
  },
  actions: {
  },
  modules: {
  }
})
