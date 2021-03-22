<template>
  <div>
    <v-app-bar color="#1f2021" app fixed clipped-left dark>
      <v-toolbar-title app>
        <a class="nav-item hero-brand" style="text-decoration:none">
          <span class="vue">Cloud Computing &nbsp;</span><strong class="admin" style="color:#c0c2c6">Midterm</strong>
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items style="margin-right: 20px;">
        <v-btn  to="/">Initial Data Pull</v-btn>
        <v-btn  to="/dashboard">Dashboard</v-btn>
        <v-btn  to="/upload">Upload New Data</v-btn>
        <v-btn  to="/searchhsnum">Search By HS_NUM</v-btn>
      <!-- <v-btn to="/product"><v-icon>list</v-icon>By Product</v-btn> -->
      </v-toolbar-items>
      <span v-if="username">
        <span class="helper"><span style="color:#36AC70">Welcome </span><span style="color:#c0c2c6;margin-right: 5px"><b>{{ username }}</b></span></span>
      </span>
      <span></span>
    </v-app-bar>
  </div>
</template>

<script>
  // import Vue from 'vue'
  export default {
    data () {
      return {
        userName: ''
      }
    },
    computed: {
      username () {
        return this.$store.state.userName
      }
    }
  }
</script>
<style>
    .profile {
      background: #3A6F9A;
      border: 1px solid #36AC70;
      border-radius: 5px;
      vertical-align: middle;
      max-height: 25px;
      max-width: 160px;
      margin-right: 10px;
    }
</style>
