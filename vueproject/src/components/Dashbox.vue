<template>
  <div >
    
    <div class="container">
      <div class="row">
        <div class="col-6 mx-auto">
          <h1>day la dashbox</h1>
          <button @click="info()">xem thong tin ca nhan</button>
          <button @click="logout()">thoat</button>
          <div>
            <div>{{showuser.username}}</div>
            <div>{{showuser.email}}</div>
            <div>{{showuser.phone}}</div>
        </div>
        </div>
        
      </div>
    </div>
    <div>
    </div>
  </div>
</template> 

<script>
import httpurl from '../HTTPurl';
import BaseRequest from '../core/BaseRequest.js';
export default {
  data(){
    return{
      showuser:{},
    }
  },
  methods:{
      info: function(){
        // let user= JSON.parse(window.localStorage.getItem('user'));
       // this.axios.get(httpurl.API_url +'user',
       //     {
       //        headers:{
       //          Authorization: 'Bearer '+ user.token
       //        }
       //     }
       //    )
       BaseRequest.get('user')
        .then( data => {
             this.showuser = data;
        })
        .catch( (error) => {
            if(error.response.status == 401 || error.response.status == 404 || error.response.status == 403){
              window.localStorage.removeItem('user');
              this.$router.push('/login');
            }
            // 47:27
        });

      },
      logout: function(){
        let user= JSON.parse(window.localStorage.getItem('user'));
       this.axios.get(httpurl.API_url +'user',
           {
              headers:{
                Authorization: 'Bearer '+ user.token
              }
           }
          )
        .then( () => {
          window.localStorage.removeItem('user');
             this.$router.push('/login');
        });
      }
  }
}
  </script>

<style>

</style>
