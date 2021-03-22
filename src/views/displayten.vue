<template>
  <v-content style=" ">
    <div v-if="this.currentpath!='displayten'">
    <div style="margin-top:20px !important" >
      <v-text-field
          label="Search HSNUM"
          :rules="rules"
          v-model="hsnum"
          style="width:200px;margin-left: 50px;border: solid cornflowerblue;"
          hide-details="auto" 
        ></v-text-field>
        <div style="margin-top:20px;margin-left: 50px">
        <v-btn style="background-color:cornflowerblue" @click="getDetails(hsnum)">Search</v-btn>
        </div>
    </div>
    </div>
    <div v-else><h1>Initial Data Pull</h1></div>
    <div style="width:100%;padding: 0px 0px 0px !important;" v-if="showtable">
      <v-card style=""  align-end flexbox>
        <v-container fluid grid-list-md pa-2 style="margin-left: 100px">
          <v-layout row wrap>
            <v-flex xs6 style="" >
          <v-data-table
          dark
          :headers="headers"
          :items-per-page="10"
          :items="datapull"
          width="'1500px'"
          class="elevation-1 tableStyle"
          :loading="loading"
        >
        <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
        <template slot="headerCell" slot-scope="props">
            <span>
              <b style="font-size:15px;color:cornflowerblue">{{ props.header.text }}</b>
            </span>
        </template>
        </v-data-table>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
  </v-content>
</template>

<script>
import Axios from 'axios'
  export default {
    components: {
    },
    created() {
    },
    mounted() {
    },
    data: () => {
      return {
        sbuSelected: null,
        currentpath: '',
        loading: true,
        datapull:[],
        showtable:true,
        hsnum:'',
        headers:[
          {
            text: 'Hshd_num',
            align: 'start',
            sortable: true,
            value: 'Hshd_num',
          },
          { text: 'Children', value: 'Children',sortable: true },
          { text: 'Age_range', value: 'Age_range',sortable: true },
          { text: 'Marital_status', value: 'Marital_status',sortable: true },
          { text: 'Income_range', value: 'Income_range',sortable: true },
          { text: 'Homeowner_desc', value: 'Homeowner_desc',sortable: true },
          { text: 'Hshd_composition', value: 'Hshd_composition',sortable: true },
          { text: 'Hshd_size', value: 'Hshd_size',sortable: true },
          { text: 'Product_num', value: 'Product_num',sortable: true },
          { text: 'Department', value: 'Department',sortable: true },
          { text: 'Brand_type', value: 'Brand_type',sortable: true },
        ],
         rules: [
        value => !!value || 'Required.',
      ]
      }
    },
    computed: {
      testing() {
        console.log(this.testpath)
        return this.testpath
      }
    },
    methods: {
      getDetails(hsnm) {
        this.showtable=true
        this.loading=true
        Axios.get(`https://ccmidterm1.azurewebsites.net/backend/gethsnumdetails/?${hsnm!=undefined?'hsnum='+hsnm:''}`).then((res)=>{
        this.datapull=res.data['data']
        this.loading=false
      })
      }
    },
    watch:{
      '$route.name': {
        handler: function(name) {
           console.log("here")
           if(name==undefined){
             this.currentpath='displayten'
             this.getDetails()
           }
           else {
             this.currentpath=name
             if(this.currentpath!='displayten') {
               this.showtable=false
             }
             else{
               this.getDetails()
             }
           }
        },
        deep: true,
        immediate: true
      }
    }
  }
</script>

<style>
  .el-loading-mask {
    background-color: rgba(66,66,66,.9) !important;
  }
  .v-data-table {
    width: 800px !important;
    max-width: 1000px  !important;
  }
</style>
