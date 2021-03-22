import Vue from 'vue'
import Vuex from 'vuex'
import appstore from './modules/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    appstore
  }
})

export default store
