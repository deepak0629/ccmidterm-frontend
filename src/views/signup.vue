<template>
<v-container fluid>
    <v-form ref="form">
    <v-row  style="margin-top:40px">
      <v-col cols="1">
        <v-subheader><b>Username:</b></v-subheader>
      </v-col>
      <v-col cols="8">
            <v-text-field
            label="Username"
            :rules="rules"
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
            :rules="rules"
            v-model="password"
            type="password"
            style="width:400px;margin-left: 50px;border: solid cornflowerblue;"
            hide-details="auto" 
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1">
        <v-subheader><b> Email:</b></v-subheader>
      </v-col>
      <v-col cols="8">
            <v-text-field
            label="Email"
            v-model="email"
            :rules="rules"
            style="width:400px;margin-left: 50px;border: solid cornflowerblue;"
            hide-details="auto" 
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row  style="margin-bottom:20px;margin-top:30px"
      >
        <v-btn style="background-color:cornflowerblue;margin-left:200px;" @click="signup()">Sign Up</v-btn>
    </v-row>

    </v-form>
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
            password:'',
            email:'',
            rules: [
                value => !!value || 'Required.',
                value => value.length>=4 || 'Min 4 Characters required'
            ]
      }
    },
    methods: {
      signup() {
          if(this.$refs.form.validate()) {
          let formData = new FormData();
          formData.append('username',this.username)
          formData.append('password',this.password)
          formData.append('email',this.email)
            Axios.post('https://ccmidterm1.azurewebsites.net/backend/signup/',
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
                text: `<span style="font-size:14px"><br/><b>Signed Up Successfully</b></span>`,
                type: 'success'
            })
            this.$router.push({name:'login'})
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
              text: `<span style="font-size:14px"><br/><b>Error Signing Up.</b></span>`,
              type: 'error'
            })
            });
          }
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
