/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-06-24 15:36:53
 * @LastEditTime: 2022-06-24 15:38:32
 */

// // 单个问候语
// const greeting = greet("Petter");
// console.log(greeting); // Welcome, Petter!

// // 多个问候语
// const greetings = greet(["Petter", "Tom", "Jimmy"]);
// console.log(greetings); // [ 'Welcome, Petter!', 'Welcome, Tom!', 'Welcome, Jimmy!' ]

function greet1(name: string): string;
function greet1(name: string[]): string[];
function greet1(name: string[] | string): string[] | string {
  if (Array.isArray(name)) {
    return name.map((n) => `Welcome, ${n}!`);
  }
  return `Welcome, ${name}!`;
}

// 单个问候语
const greeting = greet1("Petter"); // 此时只有一个类型 string
console.log(greeting); // Welcome, Petter!

// 多个问候语
const greetings = greet1(["Petter", "Tom", "Jimmy"]); // 此时只有一个类型 string[]
console.log(greetings); // [ 'Welcome, Petter!', 'Welcome, Tom!', 'Welcome, Jimmy!' ]

export default greet1;
