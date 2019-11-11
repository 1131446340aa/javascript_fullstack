import axios from 'axios'
export function request (config) {
  const instance = axios.create(
    {
      baseURL: 'http://123.207.32.32:8000/api/vip',
      // baseURL: 'http://106.54.54.237:8000/api/v1',
      timeout: 5000
    }
  )
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}
