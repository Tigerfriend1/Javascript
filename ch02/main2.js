/*
    날짜 : 2025.06.10
    이름 : 김태경
    내용 : 고차함수 활용
*/

//////////////////////////////////////
// map() - 배열의 각 요소를 변환하여 새로운 배열 생성
const numbers = [1,2,3,4,5];

const newNumbers = numbers.map((num)=> num*num);
const resultNumbers = numbers.map( num => num % 2 == 0 );
console.log(newNumbers);
console.log(resultNumbers);


const users = [
    {id:1, name:'김유신', age: 23},
    {id:2, name:'김신유', age: 21},
    {id:3, name:'신유김', age: 30},
]

const names = users.map(user => user.name);
console.log(names);

// filter() - 배열 요소 중 특정 조건에 맞는 요소만 필터링하여 새 배열 생성
const evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers);

const ageOver30 = users.filter(user => user.age >= 30);
console.log(ageOver30);
// reduce() - 배열 요소들을 하나의 값으로 누적 및 축소
const sum = numbers.reduce((acc, curr) => acc + curr , 0);
console.log(`sum : ${sum}`);

// forEach() - 배열 요소에 대해 반복 작업 수행 (값 반환 없음)
numbers.forEach((num, i)=>{
    console.log(`numbers[${i}] : num : ${num}`);

});
// sort() - 배열 요소를 정렬 (기본은 문자열 기준 정렬) ** 원본배열을 바꿈.
const unOrderedNumbers = [2,1,4,7,5];

const ascendingNumbers = [...unOrderedNumbers].sort((num1,num2)=>num2-num1);
const decendingNumbers = [...unOrderedNumbers].sort((num1,num2)=>num1-num2);
console.log(ascendingNumbers);
console.log(decendingNumbers);

// find() - 조건을 만족하는 첫 번째 요소를 반환
const user = users.find(user => user.name == '김신유');
console.log(user);

// some() - 배열 중 하나라도 조건을 만족하면 true 반환
// every() - 배열의 모든 요소가 조건을 만족해야 true 반환
const result1 = numbers.some(num => num > 3);
const result2 = numbers.every(num => num > 0);

console.log(`result1 : ${result1}`);
console.log(`result2 : ${result2}`);


//이벤트 처리
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

//기본 이벤트 핸들러 방식
btn1.onclick = function(){
    alert('버튼1 클릭!');
};
// 리스너 방식
btn2.addEventListener('click',function(){
    alert('버튼2 클릭!');
});

//커링
function multiply(a, b) {
    return a * b;
}
  
function curriedMultiply(a) {
    return function(b) {
        return multiply(a, b);
    };
}
  
const multiplyByTwo = curriedMultiply(2);
console.log(multiplyByTwo(5));

//함성함수
function add1(num) {
    return num + 1;
}
  
function mul2(num) {
    return num * 2;
}
  
// 두 함수를 합성하는 함수
function compose(func1, func2) {
    return function(x) {
        return func1(func2(x));
    };
}
  
const add1AndMul2 = compose(add1, mul2);
  
console.log(add1AndMul2(3));