import axios from 'axios';
import Cookie from 'js-cookie';
import router from '@/router';

const instance = axios.create({
  timeout: 60000,
  // baseURL: 'https://www.easy-mock.com/mock/5d5125e364a9616686f5d2ea/douban-movie'
})

const COOKIE_NAME = 'movie_trailer_user'

instance.interceptors.response.use(res => {
  const data = res.data
  // 登陆失败
  if (data.code === 1003) {
    Cookie.remove(COOKIE_NAME)
    router.replace('/login')
    return
  }
  return Promise.resolve(data)
}, () => {
  router.push('/error')
})

export default {
  install: (Vue,option) => {
    Object.defineProperty(Vue.prototype, '$axios', {value:instance})
  }
}