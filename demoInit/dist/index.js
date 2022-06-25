"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-06-23 17:47:16
 * @LastEditTime: 2022-06-24 15:38:03
 */
// import md5 from "md5";
// console.log("md5: ", md5("111"));
var greet_1 = require("./greet");
// 单个问候语
var greeting = (0, greet_1["default"])("Petter"); // 此时只有一个类型 string
console.log("index:", greeting); // Welcome, Petter!
// 定义数组
var strs = ["hello world", "11"];
var nums = [2, 11];
var booleans = [true, false];
var objs = [{ title: "11", year: 1 }];
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        console.log("this.name;: ", this.name);
        return this.name;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, source) {
        var _this = _super.call(this, name, age) || this;
        _this.source = source;
        return _this;
    }
    Student.prototype.getName = function () {
        console.log("this.name1111", this.name);
        return this.name;
    };
    return Student;
}(Person));
var p1 = new Person("Jamboy", 12);
p1.getName();
console.log("p1: ", p1);
var p2 = new Student("ffff", 1, "1");
console.log("p2: ", p2);
p2.getName();
// 写法一：函数声明
function sum1(x, y) {
    return x + y;
}
// 写法二：函数表达式
var sum2 = function (x, y) {
    return x + y;
};
// 写法三：箭头函数
var sum3 = function (x, y) { return x + y; };
// 写法四：对象上的方法
var obj = {
    sum4: function (x, y) {
        return x + y;
    }
};
function getData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("http://example.com/");
        }, 2000);
    });
}
getData().then(function (res) { return console.log("res: ", res); });
var getData1 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("http://example.com11/");
        }, 2000);
    });
};
getData1().then(function (res) { return console.log("res1: ", res); });
// 对单人或者多人打招呼
function greet(name) {
    if (Array.isArray(name)) {
        return name.map(function (n) { return "Welcome, ".concat(n, "!"); });
    }
    return "Welcome, ".concat(name, "!");
}
// 这里的入参显式指定了 any
function getFirstWord1(msg) {
    // 这里使用了 String 来避免程序报错
    console.log(String(msg).split(" ")[0]);
    return msg;
}
var temp1111 = getFirstWord1("Hello World");
getFirstWord1(123);
