/*
    날짜 : 2025.06.09
    이름 : 김태경
    내용 : this 바인딩 실습
*/

// 1) 전역공간에서 this - window 객체
console.log(this);
// 2) 일반함수 this - window 객체
function hello(){
    console.log(this);
}
hello();
// 3) 메서드 함수 this
// * 메서드란, 객체에서의 함수.
const person = {
     nane: '홍글동',
     hello: function(){
        console.log(this);
        console.log(this.nane);
     }
}
person.hello();

// 4) 생성자 함수 this
function Person(name, age){

    this.name = name;
    this.age = age;

    this.hello = function(){
        console.log(`name : ${this.name}, age : ${this.age}`);
    }
}
const hong = new Person("홍길등", 21);
hong.hello();

// 5) 명시적 바인딩 this
function introduce(age, job) {
    console.log(`Name: ${this.name}, Age: ${age}, Job: ${job}`);
}
  
const user = { 
    name: 'John' 
};
  
introduce.call(user, 25, 'Developer');  // call() : 첫 번째 인자로 this로 바인딩할 객체를 받고, 이후 인자들을 함수의 인자로 전달하며 함수를 즉시 실행
introduce.apply(user, [35, 'Designer']); // apply() : call과 유사하지만, 함수의 인자들을 배열 형태로 전달
  
const boundIntroduce = introduce.bind(user, 40, 'Scientist'); // this가 바인딩된 새로운 함수를 반환하며, 함수를 즉시 실행하지는 않음
boundIntroduce();

// 6) 화살표 함수 this
const student = {
    name: '홍길동',
    greeting: function(){
        const study = function(){
            console.log(`${this.name} Studing!!`); //일반함수의  this는 전역
        }
        const work = () => {
            console.log(`${this.name} work!!`); //화살표 함수의  this는 상위스코프 함수의 자기참조.
        }
        study();
        work();
    }
};
student.greeting();

