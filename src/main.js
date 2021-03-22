import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import Notifications from 'vue-notification'
import NoData from 'highcharts/modules/no-data-to-display'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'

Highcharts.setOptions({
  time: {
    useUTC: false
  }
})
NoData(Highcharts)
Vue.use(HighchartsVue, { Highcharts })

Vue.config.productionTip = false
Vue.use(Notifications)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
