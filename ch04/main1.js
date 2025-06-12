/*
    날짜 : 2025.06.12
    이름 : 김태경
    내용 : 모듈 실습하기
*/

//ES6 Modules
// import { PI, hello } from "./modules/module1.js";

// console.log(PI);
// console.log(hello("동홍글"));

// CommonJS (브라우저 지원X, node.js에서만 지원)
const module2 = require("./modules/module2.js");
console.log(module2.add(1, 2));
console.log(module2.sub(1, 2));
