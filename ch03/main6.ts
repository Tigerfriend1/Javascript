/*
    날짜 : 2025.06.11
    이름 : 김태경
    내용 : 타입스크립트 실습

    1) 타입스크립트 설치
     > npm install --save-dev typescript

    2) 타입스크립트 설정
     > npx tsc --init
     > tsconfig.json > 62번줄 outDir: ./dist 설정

    3) 타입스크립트 컴파일
     > npx tsc
     > npx tsc --watch
*/

console.log("1) Hello ______________________________");
let hello: string = "Hello TypeScript!!";
console.log(hello);

console.log("2) 기본타입 ______________________________");

let value1: number = 1;
let value2: number = 1.2;
let value3: boolean = true;
let value4: string = "A";
let value5: string = "Hello";
let value6: undefined = undefined;
let value7: null = null;
let value8: any = 1;
value8 = "any value";
let value9: unknown = "greeting";

if (typeof value9 === "string") {
  value9 = value9.toUpperCase();
}
console.log(`value1 : ${value1}`);
console.log(`value2 : ${value2}`);
console.log(`value3 : ${value3}`);
console.log(`value4 : ${value4}`);
console.log(`value5 : ${value5}`);
console.log(`value6 : ${value6}`);
console.log(`value7 : ${value7}`);
console.log(`value8 : ${value8}`);
console.log(`value9 : ${value9}`);

console.log("3) 배열과 튜플 ______________________________");
// 배열
let list1: number[] = [1, 2, 3];
let list2: string[] = ["apple", "banana", "cherry"];

// 튜플 : 타입과 갯수가 정해진 배열
let t1: [string, number] = ["hello", 11];

console.log(`list1 : ${list1}`);
console.log(`list2 : ${list2}`);
console.log(`t1 : ${t1}`);

console.log("4) 함수 ______________________________");
function plus(value1: number, value2: number): number {
  return value1 + value2;
}
function greeting(name: string): string {
  return `Hello~ ${name}`;
}
function welcome(): void {
  console.log("welcome void~");
}
// never :함수가 정상종료가 아닌 예외가 발생하는 함수 반환 타입.
function error(message: string): never {
  throw new Error(message);
}
console.log(plus(1, 2));
console.log(greeting("동글동글"));
welcome();
//error("예외발생~~!!!");

console.log("5) 클래스 ______________________________");
class Person {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public get getName(): string {
    return this.name;
  }
  hello(): void {
    console.log(`${this.name}, ${this.age}`);
  }
}

const hong: Person = new Person("글이동", 21);
hong.hello();

console.log("6) 상속 ______________________________");
console.log("7) 인터페이스 ______________________________");
interface User {
  name: string;
  age: number;
}
const user1: User = {
  name: "동홍글",
  age: 23,
};

console.log(user1);

interface Vehicle {
  brand: string;
  drive(): void;
}

class Car implements Vehicle {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  drive(): void {
    console.log(`im ${this.brand}`);
  }
}

const bmw: Car = new Car("BMW");
bmw.drive();

console.log("8) 제네릭 ______________________________");
function identity<T>(arg: T): T {
  return arg;
}

const result1: string = identity<string>("hello");
const result2: number = identity<number>(1);
console.log(result1);
console.log(result2);

console.log("9) 기타타입 ______________________________");

//유니언 타입 : 둘 이상의 타입을 가지는 타입
let userid: number | string; //userid 값이 number 또는 string

userid = 100;
console.log(`userid:${userid}`);
userid = "asb12";
console.log(`userid:${userid}`);

//타입 별칭
type kilogram = number;
type meter = number;

let weight: kilogram = 70;
let height: meter = 1.75;
console.log(`weight: ${weight}`);
console.log(`height: ${height}`);

// 타입 가드
function isNumber(x: any): x is number {
  return typeof x === "number";
}

console.log(`isNumber: ${isNumber(1)}`);
console.log(`isNumber: ${isNumber("number")}`);

// Nullable
let var1: string = "hello";
//var1 = null;

let var2: string | null = "welcome";
console.log(`var2:${var2}`);

var2 = null;
console.log(`var2:${var2}`);

//조건부 타입
type MaybeString = string | null | undefined;
type MustBeString = NonNullable<MaybeString>; // -> string

let text1: MaybeString = "hello";
let text2: MaybeString = null;
let text3: MaybeString = undefined;
let text4: MustBeString = "MustBeString~";

console.log(`text1 : ${text1}`);
console.log(`text2 : ${text2}`);
console.log(`text3 : ${text3}`);
console.log(`text4 : ${text4}`);
