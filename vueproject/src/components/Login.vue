<template>
  <div id="app">
    <h1>day la login</h1>
    <div class="container">
      <div class="row">
        <div class="col-6 mx-auto">
      <form action="http://api.test.tech2.vn:81/api/auth/signup"
        @submit.prevent="login()">
        <div class="alert alert-danger" v-if="error!=null">{{error}}</div>
         <div class="form-group">
            <label for="email">Email address</label>
            <input v-model="infologin.email" type="email" class="form-control" id="email" placeholder="Enter email"/>
          </div>
          <div class="form-group">
            <label for="password">Pass Word</label>
            <input v-model="infologin.password" type="password" class="form-control" id="password" value="day la input" placeholder="Pass Word" />
          </div>
          <button class="btn btn-danger btn-block">login</button>

      </form> 
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseRequest from '../core/BaseRequest.js';

export default {
  data(){
    return{
      infologin:{
        email:'phamkhanh025@gmail.com',
        password:'123123'
      },
      error:null,
    }
  },
  methods:{
    login:function(){
      BaseRequest.post('auth/login', this.infologin)
      // this.axios.post('http://api.test.tech2.vn:81/api/auth/login',
      //   this.infologin
      // )
      .then( (data) =>{
        window.localStorage.setItem('user',JSON.stringify(data));
         this.$router.push('/dashbox');
      })
      .catch( (error) =>{
        this.error=error.response.data.error;
        console.log(this.error);
      })
    }
  }
}
</script>

<style>

</style>
