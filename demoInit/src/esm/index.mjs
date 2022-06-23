/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-06-23 16:57:58
 * @LastEditTime: 2022-06-23 17:43:51
 */
// import m from './module.mjs'
// import { m } from '../cjs/module.cjs'
// import m from './module.mjs'

import { m as m2, foo as foo2, m5 } from './module.mjs'

import md5 from 'md5'
// console.log('m5: ', m5)

// console.log('m: ', m2)
// console.log('m: ', foo2())
// m()

const before = '123'
const after = md5(before)
console.log('after: ', after)

