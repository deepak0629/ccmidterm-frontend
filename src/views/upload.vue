<template>
<v-container fluid>
    <v-row  style="margin-top:40px">
      <v-col cols="2">
        <v-subheader>HouseHold File</v-subheader>
      </v-col>
      <v-col cols="8">
          <input type="file" id="hsfile" ref="hsfile" />

      </v-col>
    </v-row>
<v-row>
      <v-col cols="2">
        <v-subheader>Products File</v-subheader>
      </v-col>
      <v-col cols="8">
<input type="file" id="pfile" ref="pfile" />
      </v-col>
    </v-row>
<v-row>
      <v-col cols="2">
        <v-subheader>Transaction File</v-subheader>
      </v-col>
      <v-col cols="8">
<input type="file" id="tfile" ref="tfile" />
      </v-col>
    </v-row>
    <v-row align="center" style="margin-bottom:20px"
      justify="center">
        <v-btn style="background-color:cornflowerblue" @click="submit()">Upload</v-btn>
    </v-row>

  
</v-container>
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
            hsfile:[],
            tfile:[],
            pfile:[]
      }
    },
    methods: {
      getDetails(hsnm) {
        this.showtable=true
        this.loading=true
        Axios.get(`https://ccmidterm1.azurewebsites.net/gethsnumdetails/?${hsnm!=undefined?'hsnum='+hsnm:''}`).then((res)=>{
        this.datapull=res.data['data']
        this.loading=false
      })
      },
      submit() {
          let formData = new FormData();
            formData.append('pfile', this.$refs.pfile.files[0]);
            formData.append('hsfile', this.$refs.hsfile.files[0]);
            formData.append('tfile', this.$refs.tfile.files[0]);
            Axios.post('https://ccmidterm1.azurewebsites.net/backend/upload/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then((data)=>{
                let res=data.data
                if(res.success==true){
                    this.$notify({
                group: 'notification',
                title: '<span style="font-size:14px"><b><u>Success:</u></b></span>',
                text: `<span style="font-size:14px"><br/><b>Data Has been Updated from the uploaded files</b></span>`,
                type: 'success'
            })
                }
                else{
                    this.$notify({
              group: 'notification',
              title: '<span style="font-size:14px"><b><u>Error:</u></b></span>',
              text: `<span style="font-size:14px"><br/><b>${res.msg}</b></span>`,
              type: 'error'
            })
                }
            }).catch(function(){
              this.$notify({
              group: 'notification',
              title: '<span style="font-size:14px"><b><u>Error:</u></b></span>',
              text: `<span style="font-size:14px"><br/><b>Error Sending files to server.</b></span>`,
              type: 'error'
            })
            });
            this.$notify({
              group: 'notification',
              title: '<span style="font-size:14px"><b><u>Information:</u></b></span>',
              text: `<span style="font-size:14px"><br/><b>Files Uploaded to the server. Please wait while it Processes.</b></span>`,
              type: 'info'
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
