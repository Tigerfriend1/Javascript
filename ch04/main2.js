/*
    날짜 : 2025.06.12
    이름 : 김태경
    내용 : ES6 모듈
*/

import { num1, num2, num3, num4, add, sub, mul, div } from "./modules/cals.js";

console.log(`num1 : ${num1}`);
console.log(`num2 : ${num2}`);
console.log(`num3 : ${num3}`);
console.log(`num4 : ${num4}`);
console.log(`add : ${add(1, 2)}`);
console.log(`sub : ${sub(1, 2)}`);
console.log(`mul : ${mul(1, 2)}`);
console.log(`div : ${div(1, 2)}`);

// 기본 export 가져오기
import Calculator from "./modules/Calculator.js";

const calc = new Calculator();
console.log(`calc.add : ${calc.add(2, 3)}`);
console.log(`calc.sub : ${calc.sub(2, 3)}`);
console.log(`calc.mul : ${calc.mul(2, 3)}`);
console.log(`calc.div : ${calc.div(2, 3)}`);

// main.js
import * as calcs from "./modules/cals.js";

console.log(`calcs.num1 : ${calcs.num1}`);
console.log(`calcs.num2 : ${calcs.num2}`);
console.log(`calcs.num3 : ${calcs.num3}`);
console.log(`calcs.num4 : ${calcs.num4}`);
console.log(`calcs.add : ${add(1, 2)}`);
console.log(`calcs.sub : ${sub(1, 2)}`);
console.log(`calcs.mul : ${mul(2, 3)}`);
console.log(`calcs.div : ${div(4, 2)}`);
