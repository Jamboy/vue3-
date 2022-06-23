/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2022-06-23 16:48:39
 * @LastEditTime: 2022-06-23 16:53:36
 */

// 默认导出
// module.exports = 'hello world'

// 导出函数
// module.exports = function foo() {
//   console.log("hello world")
// }

const m = "hello world from m"

const foo = () => {
  console.log("hello world from foo")
}

module.exports = {
  foo,
  m
}