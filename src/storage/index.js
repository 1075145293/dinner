import { Base64 } from 'js-base64'
export default {
    // language ： 语言
    // password ： 密码
    // username ： 账号
    // isCheck ： 是否记住密码
    get(key){
        return localStorage.getItem(Base64.decode(key)) || false
    },
    set(key,value) {
        localStorage.setItem(Base64.encode(key),Base64.encode(value))
    },
    remove(key) {
        localStorage.removeItem(Base64.decode(key))
    }
}
