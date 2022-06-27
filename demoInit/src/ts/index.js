"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-06-23 17:47:16
 * @LastEditTime: 2022-06-24 15:38:03
 */
// import md5 from "md5";
// console.log("md5: ", md5("111"));
const greet_1 = __importDefault(require("./greet"));
// 单个问候语
const greeting = (0, greet_1.default)("Petter"); // 此时只有一个类型 string
console.log("index:", greeting); // Welcome, Petter!
// 定义数组
const strs = ["hello world", "11"];
const nums = [2, 11];
const booleans = [true, false];
const objs = [{ title: "11", year: 1 }];
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        console.log("this.name;: ", this.name);
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, source) {
        super(name, age);
        this.source = source;
    }
    getName() {
        console.log("this.name1111", this.name);
        return this.name;
    }
}
const p1 = new Person("Jamboy", 12);
p1.getName();
console.log("p1: ", p1);
const p2 = new Student("ffff", 1, "1");
console.log("p2: ", p2);
p2.getName();
// 写法一：函数声明
function sum1(x, y) {
    return x + y;
}
// 写法二：函数表达式
const sum2 = function (x, y) {
    return x + y;
};
// 写法三：箭头函数
const sum3 = (x, y) => x + y;
// 写法四：对象上的方法
const obj = {
    sum4(x, y) {
        return x + y;
    },
};
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("http://example.com/");
        }, 2000);
    });
}
getData().then((res) => console.log("res: ", res));
const getData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("http://example.com11/");
        }, 2000);
    });
};
getData1().then((res) => console.log("res1: ", res));
// 对单人或者多人打招呼
function greet(name) {
    if (Array.isArray(name)) {
        return name.map((n) => `Welcome, ${n}!`);
    }
    return `Welcome, ${name}!`;
}
// 这里的入参显式指定了 any
function getFirstWord1(msg) {
    // 这里使用了 String 来避免程序报错
    console.log(String(msg).split(" ")[0]);
    return msg;
}
const temp1111 = getFirstWord1("Hello World");
getFirstWord1(123);
