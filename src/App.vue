<template>
  <div id="app">
    <v-app dark>
      <stability-nav-bar></stability-nav-bar>
      <router-view></router-view>
      <notifications group="notification" />
      <stability-footer></stability-footer>
    </v-app>
  </div>
</template>
            // this.$notify({
            //   group: 'notification',
            //   title: '<span style="font-size:14px"><b><u>Error:</u></b></span>',
            //   text: `<span style="font-size:14px"><br/><b>Error Getting Test Case Details.<br/>Contact Shift-Left-Dashboard Admins.</b></span>`,
            //   type: 'error'
            // })
<script>
  import StabilityFooter from './components/Footer.vue'
  import StabilityNavBar from './components/Navbar.vue'
  // import Highcharts from 'highcharts'

  export default {
    data () {
      return {
        loading: false,
        allGroups: [],
        updateCount: 0
      }
    },

    components: {
      StabilityFooter,
      StabilityNavBar
    },

    methods: {
    },

    name: 'app',

    created () {
    }
  }
</script>

<style lang="scss">
 

  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
      margin-top: 60px;
  }
  .background {
    background-color:#2C405A ;
    height: 100%;
  }
  .router-view {
    overflow-y:auto;
    height: 100%;
  }
  .app-wrap {
    overflow-y:auto;
  }
  a {
    color: white !important;
  }
  .app-main {
    padding-top: 50px;
    /*margin-left: 150px;*/
    transform: translate3d(0, 0, 0);

  }
  .hero-brand {
    .vue {
      margin-left: 10px;
      color: #36AC70;
    }
    .admin {
      color: #28374B;
    }
  }
</style>
