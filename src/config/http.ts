import axios from 'axios';
import Config from 'react-native-config'
axios.defaults.baseURL= Config.API_URL
// 请求拦截器
axios.interceptors.request.use(function(config) {
  return config
},function(error) {
  return error
})

//响应拦截器
axios.interceptors.request.use(function(response) {
  return response
},function(error) {
  return error
})