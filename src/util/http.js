import axios from 'axios'
import { Toast } from 'vant'

const instance = axios.create({
  baseURL: 'https://m.maizuo.com/',
  timeout: 1000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1629975314607076447420417","bc":"110100"}'
  }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 做一些请求之前被发送
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    overlay: true,
    duration: 0
  })
  return config
}, function (error) {
  // 做一些与请求错误
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 任何位于 2xx 范围内的状态代码都会导致此函数触发
  // 对响应数据执行一些操作
  Toast.clear()
  return response
}, function (error) {
  // 任何超出范围的状态代码的2XX原因此功能可触发
  // 做一些与响应错误
  return Promise.reject(error)
})
export default instance
