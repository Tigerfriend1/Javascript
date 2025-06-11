/*
    날짜 : 2025.06.11
    이름 : 김태경
    내용 : 객체지향 프로그래밍 실습
*/

// 객체 리터럴 : 중괄호 {} 내부에 키-값 쌍을 나열하여 직접 객체를 정의
const person = {
  name: "홍글동",
  age: 20,
  address: "부산",
};

console.log(`name : ${person.name}`);
console.log(`age : ${person.age}`);
console.log(`address : ${person.address}`);

const user = {
  name: "홍길동",
  age: 20,
  hello() {
    console.log(`안녕하세요. ${this.name}입니다.`);
  },
};

user.hello();

// 생성자 함수 : 함수를 사용하여 객체를 생성하는 방법
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.hello = function () {
    console.log(`안녕하세요. ${this.name}입니다.`);
  };
}

const person1 = new Person("동글동", 20);
const person2 = new Person("길동홍", 30);

person1.hello();
person2.hello();

// 클래스 : ES6에서 도입된 문법으로 객체를 생성하는 템플릿
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log(`안녕하세요. ${this.name}입니다.`);
  }
}

const jang = new User("장길동", 25);
jang.hello();

// 프로토타입 : 객체의 공통된 속성과 메소드를 정의하여 메모리 사용을 최적화
function PersonPrototype(name, age) {
  this.name = name;
  this.age = age;
}

PersonPrototype.prototype.hello = function () {
  console.log(`안녕하세요. ${this.name}입니다.`);
};
const personProto1 = new PersonPrototype("김철수", 22);

personProto1.hello();

console.log(PersonPrototype.prototype === personProto1.__proto__); // true

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;

  this.bark = function () {
    console.log(`${this.name} : 멍멍~!~!`);
  };
}

//프로토타입을 이용한 기능 추가
Dog.prototype.speak = function () {
  console.log(`${this.name} : spspk 멍멍~!~!`);
};

const dog1 = new Dog("바둑이", "진돗개");
const dog2 = new Dog("초코", "푸들");

dog1.bark();
dog2.speak();
