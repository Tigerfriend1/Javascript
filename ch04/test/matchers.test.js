describe("Jest Matchers 실습", () => {
  // toBe() - 원시 타입 값의 동등성을 확인
  test("2 더하기 2는 4이다", () => {
    expect(2 + 2).toBe(4);
  });

  test("2 더하기 2는 0이 아니다.", () => {
    expect(2 + 2).not.toBe(0);
  });

  // toEqual() - 객체나 배열의 내용이 깊이 같음을 확인
  const data = { one: 1 };
  test("객체 내용이 같은지 확인", () => {
    expect(data).toEqual({ one: 1 });
  });

  const arr1 = [1, 2];
  const arr2 = [1, 2];
  test("배열 내용이 같은지 확인", () => {
    expect(arr1).toEqual(arr2);
  });

  // toBeNull()
  // toBeDefined()
  // toBeUndefined()
  // toBeTruthy()
  // toBeFalsy()
  const n = null;
  test("null 값 확인", () => {
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  let u;
  test("undefined 값 확인", () => {
    expect(u).toBeUndefined();
    expect(u).not.toBeDefined();
    expect(u).toBeFalsy();
  });

  test("truthy 값 확인", () => {
    expect(1).toBeTruthy();
    expect("hello").toBeTruthy();
    expect({}).toBeTruthy();
    expect([]).toBeTruthy();
  });

  test("falsy 값 확인", () => {
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  // toBeGreaterThan()
  // toBeGreaterThanOrEqual()
  // toBeLessThan()
  // toBeLessThanOrEqual()
  test("숫자 비교", () => {
    expect(10).toBeGreaterThan(5);
    expect(10).toBeGreaterThanOrEqual(10);
    expect(5).toBeLessThan(10);
    expect(5).toBeLessThanOrEqual(5);
  });

  // toMatch()
  test("문자열 매칭", () => {
    expect("hello world").toMatch("world");
    expect("hello").not.toMatch("d");
  });

  // toContain()
  const fruits = ["apple", "banana", "cherry"];

  test("배열에 특정 항목이 있는지 확인", () => {
    expect(fruits).toContain("banana");
  });

  // toThrow()
  function makeError() {
    throw new Error("Error Occur!");
  }

  test("함수가 에러를 던지는지 확인", () => {
    expect(() => makeError()).toThrow();
  });
});
