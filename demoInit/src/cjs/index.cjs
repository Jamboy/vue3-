/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2022-06-23 16:48:32
 * @LastEditTime: 2022-06-23 16:53:55
 */

// 导入
// const m = require("./module.cjs")
// 解构
const { foo: foo2, m } = require("./module.cjs")
console.log('m: ', m)
foo2()