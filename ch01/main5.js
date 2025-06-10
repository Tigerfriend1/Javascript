/*
    날짜 : 2025.06.09
    이름 : 김태경
    내용 : 실행컨텍스트 실습
*/

var x = 1;
const y=1;

function foo (a) {
    var x=3;
  const y = 4;

  function bar (b) {
    const z = 5;
    console.log(a + b + x + y + z);
  }
  bar(10);
}

foo(20); 