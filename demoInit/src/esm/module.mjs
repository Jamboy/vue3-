/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2022-06-23 16:58:04
 * @LastEditTime: 2022-06-23 17:07:59
 */

const m = 'hello world from m'

const foo = () => {
  console.log("hello world from foo")
}

// export default m
// export default foo
// export default 'hello world from m'

// export {
//   m as m3
// }
export const m5 = 'hello world from m5'

export {
  m,
  foo
}