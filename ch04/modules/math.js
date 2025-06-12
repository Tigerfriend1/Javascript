function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function pow(a, b) {
  return a ** b;
}

// Jest 테스트를 하려면 CommonJS 모듈 해야 됨
module.exports = { add, sub, mul, div, pow };
