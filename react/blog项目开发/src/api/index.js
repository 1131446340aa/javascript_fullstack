import axios from 'axios'
import { message } from 'antd'
axios.defaults.timeout = 5000
axios.default.baseUrl = "http://xiangxi.red/api"

axios.interceptors.request.use(
    config => {
        config.headers = {

        }
        return config
    },
    err => {
        message.error('请求出错')
        return Promise.reject(err)
    }
)
axios.interceptors.response.use(
    res => {
        return res
    },
    err => {
        message.error('请求出错')
        return Promise.reject(err)
    }
)
export default {
    get(url, parmas = {}) {
        return new Promise((reslove, reject) => {
            axios.get(url, { parmas }).then(res=>{
                reslove(res.data)
            })
        })
    },
    post(url, parmas = {}) {
        return new Promise((reslove, reject) => {
            axios.post(url, parmas).then(res=>{
                reslove(res.data)
            })
        })
    }
}