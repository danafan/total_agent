import axios from 'axios'
import router from '../router/index.js'

const baseURL = location.origin === 'http://cs_agent_admin.gxk8090.com'?
'http://cs.gxk8090.com/agentadmin/':
'http://api.gxk8090.com/agentadmin/';
// const baseURL = `${location.origin}/agentadmin/`;

// 创建axios实例，可以自定义配置
const instance = axios.create({
  baseURL,
});

instance.interceptors.response.use(response => {
  switch (response.data.code) {
    case 301:
    sessionStorage.clear();
    router.replace("/login");
  }
  return response;
},function (error) {
  if (error.response) {
    switch (error.response.status) {
      case 404:
      window.alert('参数错误');
      break;
      case 500:
      window.alert('服务器故障');
      break;
      case 504:
      window.alert('没有网络');
      break;
    }
  }
});

export default instance;