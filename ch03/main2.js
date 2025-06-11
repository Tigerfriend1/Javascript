/*
    날짜 : 2025.06.11
    이름 : 김태경
    내용 : 클래스 실습
*/

//////////////////////////////////////
// 클래스 프로토타입 메소드
//////////////////////////////////////
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 프로토타입 메소드
  sayHello() {
    console.log(`say Hello to everyone, 저는 ${this.name}입니다.`);
  }
  // 정적 메소드
  static sayHi() {
    console.log("say Hi to everyone");
  }
}

// 객체 생성(인스턴스)
const me = new Person("동글이", 30);

// 메소드 호출
me.sayHello();
// 정적 메소드 호출
Person.sayHi();

//////////////////////////////////////
// 클래스 일반 메소드
//////////////////////////////////////
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log("멍멍!");
  }

  introduce() {
    console.log(`이름: ${this.name}, 종 : ${this.breed}.`);
  }
}

const myDog = new Dog("순돌이", "푸들");
myDog.bark(); // 일반 메서드 호출
myDog.introduce(); // 일반 메서드 호출

//////////////////////////////////////
// 클래스 정적 메소드
//////////////////////////////////////
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.add(5, 3)); // 정적 메서드 호출
console.log(MathUtils.multiply(2, 4)); // 정적 메서드 호출

//////////////////////////////////////
// 접근자 프로퍼티
//////////////////////////////////////
class Circle {
  constructor(radius) {
    this._radius = radius; // 내부적으로 사용할 속성 (관례적으로 _ 접두사 사용)
  }

  get radius() {
    console.log("Getter 호출됨: 반지름 반환");
    return this._radius;
  }

  set radius(newRadius) {
    console.log("Setter 호출됨: 반지름 설정");
    this._radius = newRadius;
  }

  get area() {
    return Math.PI * this._radius * this._radius;
  }
}

const circle = new Circle(5);
console.log(circle.radius); // Getter 호출
circle.radius = 10; // Setter 호출
console.log(circle.area); // Getter를 통해 _radius에 접근하여 넓이 계산

//////////////////////////////////////
// 클래스 필드
//////////////////////////////////////
class Rectangle {
  width; // public 필드
  height = 10; // public 필드 (초기값 할당)
  #color; // private 필드

  constructor(width, color) {
    this.width = width;
    this.#color = color;
  }

  getColor() {
    return this.#color; // private 필드 접근
  }
}

const rect = new Rectangle(5, "blue");
console.log(rect.width);
console.log(rect.height);
console.log(rect.getColor());
