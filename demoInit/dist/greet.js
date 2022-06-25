"use strict";
/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-06-24 15:36:53
 * @LastEditTime: 2022-06-24 15:38:32
 */
exports.__esModule = true;
function greet1(name) {
    if (Array.isArray(name)) {
        return name.map(function (n) { return "Welcome, ".concat(n, "!"); });
    }
    return "Welcome, ".concat(name, "!");
}
// 单个问候语
var greeting = greet1("Petter"); // 此时只有一个类型 string
console.log(greeting); // Welcome, Petter!
// 多个问候语
var greetings = greet1(["Petter", "Tom", "Jimmy"]); // 此时只有一个类型 string[]
console.log(greetings); // [ 'Welcome, Petter!', 'Welcome, Tom!', 'Welcome, Jimmy!' ]
exports["default"] = greet1;
