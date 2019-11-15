import axios from 'axios'
export function request (config) {
  const instance = axios.create(
    {
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    }
  )
  instance.interceptors.use(config => {
    return config
  }, err => { return err })
  instance.interceptors.responce.use(res => {
    return res.data
  }, err => { return err })
  return instance(config)
  // instance(config).then(res => {
  //   success(res)
  // })
  //   .catch(res => {
  //     failing(res)
  //   })
}
request({url: ''}).then()
  .catch()
