/*
    날짜 : 2025.06.09
    이름 : 김태경
    내용 : 클로저 실습
*/

const x = 1;

function outer() {
	const x = 10;

	const inner = function() {
		console.log(x);
	};
	
  return inner;
}

const innerFunc = outer();
innerFunc();

//클로저 활용
function makeCounter(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    }
}

const count1 = new makeCounter();
const count2 = new makeCounter();

count1();
count1();
count1();

count2();
count2();

count1();