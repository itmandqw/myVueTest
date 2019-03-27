import { get, post } from './http'
//  这里写接口的调用方法,在合适的页面中调用
console.log('get方法', get)
console.log('post方法', post)
export const getAddress = p => post('/static/gettest.json', p)
