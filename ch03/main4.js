/*
    날짜 : 2025.06.11
    이름 : 김태경
    내용 : 상속과 다형성
*/

//////////////////////////////////////
// 프로토타입 상속
/////////////////////////////////////
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} Speak!`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
// Dog의 프로토타입을 Animal 프로토타입으로 생성
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  console.log(`멍멍!`);
};

const dog = new Dog("순돌이", "푸들");
dog.speak();
dog.bark();

//////////////////////////////////////
// 클래스 상속
/////////////////////////////////////
class Animal2 {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name}이(가) 소리를 냅니다.`);
  }
}

class Cat extends Animal2 {
  constructor(name, color) {
    super(name); // 부모 클래스의 생성자 호출
    this.color = color;
  }
  meow() {
    console.log("야옹!");
  }
  speak() {
    // 메서드 오버라이딩
    console.log(`${this.name}이(가) 우아하게 웁니다.`);
  }
}

const myCat = new Cat("나비", "갈색");
myCat.speak(); // Cat의 오버라이딩된 메서드 호출
myCat.meow();

//////////////////////////////////////
// 다형성
/////////////////////////////////////
class Animal3 {
  constructor(name) {
    this.name = name;
  }
  move() {
    console.log(`${this.name}이(가) 이동합니다.`);
  }
}

class Tiger extends Animal3 {
  constructor(name) {
    super(name); // 부모 클래스의 생성자 호출
  }

  // 메서드 오버라이딩
  move() {
    console.log(`${this.name} run!`);
  }
}

class Eagle extends Animal3 {
  constructor(name) {
    super(name); // 부모 클래스의 생성자 호출
  }

  // 메서드 오버라이딩
  move() {
    console.log(`${this.name} fly!`);
  }
}

function makeSound(animal) {
  animal.move();
}

const tiger = new Tiger("호랑이");
const eagle = new Eagle("독수리");

// Animal 클래스의 move 메서드가 객체에 따라 다르게 동작(다형성)
makeSound(tiger);
makeSound(eagle);
