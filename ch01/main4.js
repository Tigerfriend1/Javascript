var var1 = 1; // 전역 변수(전역 스코프)
let num1 = 1;

if (true) {
  var var2 = 2; // 블록 변수(블록 스코프)
  let num2 = 2;
  
  if (true) {
    var var3 = 3; // 블록 변수(블록 스코프)
    let num3 = 3;
  }
}

function outer() {
  var var4 = 4; // 함수 변수(함수 스코프)
  let num4 = 4;

  function inner() {
    var var5 = 5; // 함수 변수(함수 스코프)
    let num5 = 5;
  }
}

console.log(var1);
console.log(var2);
console.log(var3);
//console.log(var4);
//console.log(var5);

console.log(num1);
//console.log(num2);
//console.log(num3);
//console.log(num4);
//  console.log(num5);


console.log('--------------------------------------');

var x = 'global x';
var y = 'global y';

function outer() {
  var z = "outer's local z";
  
  console.log(x);
  console.log(y);
  console.log(z);
  
  function inner() {
		var x = "inner's local x";
		console.log(x);
		console.log(y);
		console.log(z);
  }
  
  inner();
}

outer();

console.log(x);
console.log(y);