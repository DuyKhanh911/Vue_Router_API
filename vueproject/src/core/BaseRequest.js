import http from '../HTTPurl.js';
const axios = require('axios');
// let dataUser= window.localStorage.getItem('user');
//      let user = null;
//      if(dataUser){
//         user = JSON.parse(dataUser);
//      }
export default{
  _getHeader(){
     let dataUser= window.localStorage.getItem('user');
     let user = null;
     if(dataUser){
        user = JSON.parse(dataUser);
     }
             let headers = {};
     if(user !== null){

        headers.Authorization= 'Bearer '+ user.token;
     }
     return headers;
  },
  get(url){
    return new Promise( (resolve,reject) => {
     axios.get(http.API_url + url,
          {
            headers: this._getHeader()
          }
          )
     .then( response =>{
        resolve(response.data);
     })
      .catch( error =>{
        reject(error);
     });
  });
},
    
  post(url,data){
    return new Promise( (resolve,reject) =>{
       axios.post(http.API_url + url,
        data,
          {
            headers: this._getHeader()
          }
          )
       .then( response =>{
        resolve(response.data);
     })
      .catch( error =>{
        reject(error);
     });
    });
  }
}
