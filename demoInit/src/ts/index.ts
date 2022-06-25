/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-06-23 17:47:16
 * @LastEditTime: 2022-06-24 15:38:03
 */
// import md5 from "md5";
// console.log("md5: ", md5("111"));
import greet1 from "./greet";

// 单个问候语
const greeting = greet1("Petter"); // 此时只有一个类型 string
console.log("index:", greeting); // Welcome, Petter!

// 定义数组
const strs: string[] = ["hello world", "11"];
const nums: number[] = [2, 11];
const booleans: boolean[] = [true, false];

interface TestObj {
  title: string;
  year: number;
}

const objs: TestObj[] = [{ title: "11", year: 1 }];

interface UserItem {
  name: string;
  age: number;
  foods: string[];
}

// 继承
interface Admin extends UserItem {
  permissions: string;
}

//继承排除属性
// 继承Omit<T, K extends string | number | symbol>
// T表示要继承的对象，后面为排除的属性
interface Admin1 extends Omit<UserItem, "name | age"> {
  permissions: string;
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName() {
    console.log("this.name;: ", this.name);
    return this.name;
  }
}

class Student extends Person {
  source: string;
  constructor(name: string, age: number, source: string) {
    super(name, age);
    this.source = source;
  }
  getName() {
    console.log("this.name1111", this.name);
    return this.name;
  }
}

const p1: Person = new Person("Jamboy", 12);
p1.getName();
console.log("p1: ", p1);

const p2: Student = new Student("ffff", 1, "1");
console.log("p2: ", p2);
p2.getName();

// 写法一：函数声明
function sum1(x: number, y: number): number {
  return x + y;
}

// 写法二：函数表达式
const sum2 = function (x: number, y: number): number {
  return x + y;
};

// 写法三：箭头函数
const sum3 = (x: number, y: number): number => x + y;

// 写法四：对象上的方法
const obj = {
  sum4(x: number, y: number) {
    return x + y;
  },
};

function getData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("http://example.com/");
    }, 2000);
  });
}
getData().then((res) => console.log("res: ", res));

const getData1: () => Promise<string> = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("http://example.com11/");
    }, 2000);
  });
};
getData1().then((res) => console.log("res1: ", res));

// 对单人或者多人打招呼
function greet(name: string | string[]): string | string[] {
  if (Array.isArray(name)) {
    return name.map((n) => `Welcome, ${n}!`);
  }
  return `Welcome, ${name}!`;
}

// 这里的入参显式指定了 any
function getFirstWord1(msg: any) {
  // 这里使用了 String 来避免程序报错
  console.log(String(msg).split(" ")[0]);
  return msg;
}

const temp1111 = <String>getFirstWord1("Hello World");

getFirstWord1(123);
