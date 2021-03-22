<template>
<v-container fluid>
    <v-row  style="margin-top:40px">
      <v-col cols="1">
        <v-subheader><b>Username:</b></v-subheader>
      </v-col>
      <v-col cols="8">
            <v-text-field
            label="Username"
            v-model="username"
            style="width:400px;margin-left: 50px;border: solid cornflowerblue;"
            hide-details="auto" 
        ></v-text-field>

      </v-col>
    </v-row>
<v-row>
      <v-col cols="1">
        <v-subheader><b> Passoword:</b></v-subheader>
      </v-col>
      <v-col cols="8">
            <v-text-field
            label="Password"
            type="password"
            v-model="password"
            style="width:400px;margin-left: 50px;border: solid cornflowerblue;"
            hide-details="auto" 
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row  style="margin-bottom:20px;margin-top:30px"
      >
        <v-btn style="background-color:cornflowerblue;margin-left:200px;" @click="login()">Login</v-btn>
         <v-btn style="background-color:cornflowerblue;margin-left:20px;" to="/signup">Sign Up</v-btn>
        
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
            username:'',
            password:''
      }
    },
    methods: {
      login() {
          const formdata=new FormData()
          formdata.append('username',this.username)
          formdata.append('password',this.password)
            Axios.post('https://ccmidterm1.azurewebsites.net/backend/login/',
                formdata
            ).then((data)=>{
                let res=data.data
                console.log(res)
                if(res.success==true){
                    this.$notify({
                group: 'notification',
                title: '<span style="font-size:14px"><b><u>Success:</u></b></span>',
                text: `<span style="font-size:14px"><br/><b>Logged In</b></span>`,
                type: 'success'
            })
            this.$store.commit('setloggedIn',true)
            console.log(this.$store.state.appstore.loggedIn)
            this.$router.push({name:'displayten'})
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
              text: `<span style="font-size:14px"><br/><b>Error Logging In.</b></span>`,
              type: 'error'
            })
            });
      }
    },
    watch:{
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
