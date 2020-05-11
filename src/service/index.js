import axios from 'axios'
// import storage from '@/storage'
const service = axios.create({
    timeout: 30000,
})

service.interceptors.request.use(config=>{
    return config
})

service.interceptors.response.use(response=>{
    return response
})
export default service

