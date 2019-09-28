import axios from './index'
import md5 from 'js-md5';

export default {
  post(path, params={}){
    let target = {};
    let agent_id = localStorage.getItem("agent_id");
    let secret_key = localStorage.getItem("secret_key");
    let login_token = localStorage.getItem("token");
    let timestamp = ((new Date()).getTime()/1000).toString().split('.')[0];
    if(!!agent_id){
      target.agent_id = agent_id;
      target.login_token = login_token;
      target.timestamp = timestamp;
      target.random = Math.random();
    }
    Object.assign(params, target);
    let form = new FormData();
    let obj = {};
    let arr = [];
    for(let a of Object.keys(params)){ 
      arr.push(a);
    }
    let arrSort = arr.sort(); //参数按照键名排序
    for(let b of arrSort){
      let val = params[b];
      obj[b] = val;
      form.append(b, val);
    }
    obj.secret_key = secret_key;
    let str = "";
    for(var i in obj){
      str += `${i}=${obj[i]}&`
    }
     //生成签名
     str=str.substring(0,str.length-1)
     let sign = md5(str);
     form.append('sign', sign);

     return axios.post(`${path}`, form);
   },
   get(path, params={}){
    let target = {};
    let agent_id = localStorage.getItem("agent_id");
    let secret_key = localStorage.getItem("secret_key");
    let login_token = localStorage.getItem("token");
    let timestamp = ((new Date()).getTime()/1000).toString().split('.')[0];
    if(!!agent_id){
      target.agent_id = agent_id;
      target.login_token = login_token;
      target.timestamp = timestamp;
      target.random = Math.random();
    }
    Object.assign(params, target);
    let arr = [];
    let str = '';
    for(let a of Object.keys(params)){
      arr.push(a);
    }
    let arrSort = arr.sort();
    for(let b of arrSort){
      let val = params[b];
      str += `${b}=${val}&`;
    }
    let secret = `secret_key=${secret_key}`;
    let sign = md5(str + secret);
    str = str + `sign=${sign}`
    if(!!str){
      return axios.get(`${path}?${str}`);
    }else{
      return axios.get(`${path}`);
    }
    
  }
}
