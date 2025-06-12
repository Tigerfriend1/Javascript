//테스트 > npm test
//자동테스트 > npx jest --watch
const { add, sub, mul, div, pow } = require("../modules/math");

//기본 테스트
test("2+3은 5입니다.", () => {
  expect(add(2, 3)).toBe(5);
});

test("2-3은 -1입니다.", () => {
  expect(sub(2, 3)).toBe(-1);
});

test("2*3은 6입니다.", () => {
  expect(mul(2, 3)).toBe(6);
});

test("2/3은 0.66666..입니다.", () => {
  expect(div(2, 2)).toBe(1);
});

// add 함수 테스트 그룹 실습
describe("add 함수 테스트 그룹", () => {
  // 기본적인 덧셈 테스트
  test("2 + 3은 5여야 합니다", () => {
    expect(add(2, 3)).toBe(5);
  });

  // 음수 덧셈 테스트
  test("-1 + 1은 0이어야 합니다", () => {
    expect(add(-1, 1)).toBe(0);
  });

  // 큰 숫자 덧셈 테스트
  test("1000 + 2000은 3000이어야 합니다", () => {
    expect(add(1000, 2000)).toBe(3000);
  });

  // 실패 테스트
  test("0 + 0은 0이어야 합니다", () => {
    expect(add(0, 0)).toBe(0);
  });

  // 소수 덧셈 테스트
  test("1.5 + 2.5는 4.0이어야 합니다", () => {
    expect(add(1.5, 2.5)).toBe(4.0);
  });
});

// sub 함수 테스트 그룹 실습
describe("sub 함수 테스트 그룹", () => {
  // 각자 실습하기
  /*
    // 코드 커버리지 테스트용
    test('1.5 + 2.5는 4.0이어야 합니다', () => {
        expect(sum1(1, 2)).toBe(3);
    });
    */
});

// mul 함수 테스트 그룹 실습
describe("mul 함수 테스트 그룹", () => {
  // 각자 실습하기
});

// div 함수 테스트 그룹 실습
describe("div 함수 테스트 그룹", () => {
  // 각자 실습하기
});
