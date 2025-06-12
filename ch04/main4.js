/*
    날짜 : 2025.06.12
    이름 : 김태경
    내용 : 테스트 실습하기
*/

//테스트 대상
function add(a, b) {
  return a + b;
}

//테스트 함수
function testAdd(a, b, expected) {
  const result = add(a, b);

  if (result === expected) {
    console.log(`테스트 성공!, add(${a},${b}) = ${result}`);
  } else {
    console.error(
      `테스트 실패!, add(${a},${b}) = ${result}, expected: ${expected}`
    );
  }
}

// 테스트 실행
testAdd(1, 2, 3);
testAdd(1, 1, 2);
testAdd(-1, 2, 1);
testAdd(1, 1, 3);
