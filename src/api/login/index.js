import service from '@/service/'
import qs from 'qs'

// 登录
export const login = function (params) {
    return service({
        method: 'GET',
        url: '/api/login',
        params
    })
}


export const register = function (data={}) {
    return service({
        method: 'POST',
        url: '/api/register',
        data: qs.stringify(data)
    })
}

export const postIdea = function (data={}) {
    return service({
        method: 'post',
        url: '/api/postIdea',
        data: qs.stringify(data)
    })
}