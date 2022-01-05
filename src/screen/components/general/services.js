import {ConstantClass } from '../general/config';

export const asyncSendApis = async (url, data) =>{
      let method= 'GET';
      let data_send = {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
      if(data.credentials){
        data_send= Object.assign(data_send, { credentials: data.credentials });
      }
      if(data.method){
        data_send= Object.assign(data_send, { method: data.method });
      }
      if(data.body){
        if(data.form){
          let headers=Object.assign(data_send.headers,  {'Content-Type': data.form});
          data_send= Object.assign(data_send, { headers: headers });
          data_send.body=new FormData();
          for (let key in data.body) {
            data_send.body.append(key, data.body[key]);
          }
        }else{
          data_send= Object.assign(data_send, { body: data.body });
        }
      }
      if(data.token) {
        let headers=Object.assign(data_send.headers,  {'Authorization': 'Token '+ data.token});
        data_send= Object.assign(data_send, { headers: headers });
      }
      console.log(data_send)
      let response = await fetch(ConstantClass.webserviceName+url, data_send);
      let json = await response.json();
      json['status']=response.ok;
      return json;
  }

