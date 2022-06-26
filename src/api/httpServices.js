import axios from 'axios'
import {MessageBoxData, Message} from 'element-plus'
import store from '@store'
import {getToken} from '@/util/auth'


const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
})

service.interceptors.request.use(
    config => {
        if(store .getters.token) {
            config.headers['X-token'] = getToken()
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if(res.code !== 200) {
            console.log('服务异常: ', res.message)
            return Promise.reject(new Error(res.message || 'Error'))
        }else {
            return res
        }
    },
    error => {
        console.log('服务异常： ' + error)
    },
)

export default service
