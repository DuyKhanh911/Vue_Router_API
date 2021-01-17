<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-4 mx-auto">
          <div class="alert alert-success" v-if="showmessage">
            <p>dang ki thanh cong</p>
          </div>
          <form action="http://api.test.tech2.vn:81/api/auth/signup"
            @submit.prevent="touch()"
          >
            <div class="form-group">
              <label for="email">Email address</label>
              <input v-model="infouser.email" type="email" class="form-control" id="email" placeholder="Enter email">
            </div>

            <div class="form-group">
              <label for="username">User Name</label>
              <input v-model="infouser.username" type="text" class="form-control" id="username" placeholder="User name">
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input v-model="infouser.phone" type="text" class="form-control" id="phone" placeholder="Phone">
            </div>

            <div class="form-group">
              <label for="pass">Pass Word</label>
              <input v-model="infouser.password" type="password" class="form-control" id="pass" placeholder="Pass">
            </div>

            <div class="form-group">
              <label for="pre_pass">Pre Pass</label>
              <input v-model="infouser.password_confirmation" type="password" class="form-control" placeholder="pre_Pass">
            </div>
            <button class="btn btn-success btn-block">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      infouser:{
        username:'',
        email:'',
        phone:'',
        password:'',
        password_confirmation:'',
      },
      showmessage:false
    }
  },
  methods:{
    touch: function(){
      this.axios.post('http://api.test.tech2.vn:81/api/auth/signup',
      this.infouser)
        // {
        //   username:'khanhkhanhklhanhs',
        //   email:'ohamkhanhasnhs@gmail.com',
        //   phone:'216546854654654654',
        //   password:'123123',
        //   password_confirmation:'123123'
        // })
      .then((response) => {
        console.log(response.data)
          this.showmessage=true;
          this.$router.push('/login');
      })
      .catch(function (error) {
       console.log(error.response.data.errors);
  })
    }
  }
}
   
</script>

<style>

</style>
