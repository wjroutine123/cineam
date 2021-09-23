import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://m.maizuo.com/',
  timeout: 1000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1629975314607076447420417","bc":"110100"}'
  }
})
export default instance
