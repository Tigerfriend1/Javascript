// cals.js
export const num1 = 1;
export const num2 = 2;

export function add(x, y) {
  return x + y;
}

export function sub(x, y) {
  return x - y;
}

// 한꺼번에 내보내기
const num3 = 3;
const num4 = 4;

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

export { num3, num4, mul, div };
