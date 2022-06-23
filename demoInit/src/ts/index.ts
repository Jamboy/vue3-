/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-06-23 17:47:16
 * @LastEditTime: 2022-06-23 18:52:19
 */
function getFirstWord(word: string) {
  console.log("word: ", word.split(" ")[0]);
}

getFirstWord("hello world");
// getFirstWord(1213);

// 定义数组
const strs: string[] = ["hello world", "11"];
const nums: number[] = [2, 11];
const booleans: boolean[] = [true, false];

interface TestObj {
  title: string;
  year: number;
}

const objs: TestObj[] = [{ title: "11", year: 1 }];
