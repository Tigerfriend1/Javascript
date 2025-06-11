/*
    날짜 : 2025.06.11
    이름 : 김태경
    내용 : 객체지향설계원칙과 패턴
*/

//////////////////////////////////////
// SRP : 단일 책임 원칙
/////////////////////////////////////

// 하나의 클래스가 여러 책임(기능)을 가짐
class User1 {
  save() {
    /* DB 저장 */
  }
  sendEmail() {
    /* 이메일 발송 */
  }
}

// 역할 분리
class User {
  constructor(name) {
    this.name = name;
  }
}

class UserRepository {
  save(user) {
    console.log(`${user.name}을 저장합니다.`);
  }
}

class EmailService {
  sendEmail(user) {
    console.log(`${user.name}에게 이메일 발송합니다.`);
  }
}

const user = new User("동글이");
const userRepository = new UserRepository();
const emailService = new EmailService();
userRepository.save(user);
emailService.sendEmail(user);

//////////////////////////////////////
// OCP : 개방 폐쇄 원칙
/////////////////////////////////////

// Bad: 새로운 도형이 추가될 때마다 ShapeDrawer 클래스를 수정해야 함
class ShapeDrawer {
  draw(shape) {
    if (shape.type === "circle") {
      console.log(`원을 그립니다.`);
    } else if (shape.type === "rectangle") {
      console.log(`사각형을 그립니다.`);
    }
  }
}

// Good: 새로운 도형이 추가되어도 클래스를 수정할 필요 없음
class Shape {
  draw() {
    console.log("도형을 그립니다.");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("사각형을 그립니다.");
  }
}

class Circle extends Shape {
  draw() {
    console.log("원을 그립니다.");
  }
}

const circle = new Circle();
const rectangle = new Rectangle();
circle.draw();
rectangle.draw();

//////////////////////////////////////
// LSP : 리스코프 치환 원칙
/////////////////////////////////////
class Animal {
  move() {
    console.log("Animal move...");
  }
}

class Eagle extends Animal {
  move() {
    console.log("Eagle fly...");
  }
}

// 자식(Eagle)이 부모(Animal)의 역할을 제대로 수행하니 LSP를 지킴.
const animal = new Eagle();
animal.move();

//////////////////////////////////////
// ISP : 인터페이스 분리 원칙
/////////////////////////////////////

// Bad: 모든 기기에 print, scan 강제
class Device {
  print() {}
  scan() {}
}

class Printer extends Device {
  print() {
    console.log("인쇄합니다.");
  }
  scan() {
    // 프린터는 스캔 못하는데도 구현 강제됨
  }
}

// Good: 필요한 기능만 가진 인터페이스(클래스)로 나눔
class Printable {
  print() {}
}

class Scannable {
  scan() {}
}

class SimplePrinter extends Printable {
  print() {
    console.log("인쇄 합니다.");
  }
}

class SimpleScanner extends Scannable {
  scan() {
    console.log("스캔 합니다.");
  }
}

const printer = new SimplePrinter();
const scanner = new SimpleScanner();

printer.print();
scanner.scan();

//////////////////////////////////////
// DIP : 의존성 분리 원칙
/////////////////////////////////////

// Bad: 구체적인 DB에 직접 의존
class Database1 {
  save(data) {
    console.log("Database 저장:", data);
  }
}

class UserService1 {
  constructor() {
    this.database = new Database(); // 직접 연결 (강한 결합)
  }
}

// Good ✅: 추상화에 의존 (약한 결합)
class Database {
  save(data) {}
}

class UserService2 {
  constructor(database) {
    this.database = database;
  }
  saveUser(data) {
    this.database.save(data);
    console.log(`${data} 저장 완료!`);
  }
}

// 사용
const db = new Database();
const service = new UserService2(db); // 의존 객체 db 주입
service.saveUser("홍길동");

//*디자인패턴*/
//////////////////////////////////////
// 1. 싱글톤 패턴
/////////////////////////////////////
// 싱글톤 패턴
class Singleton {
  // 내부 인스턴스를 static 변수로 저장
  static #instance;

  static getInstance() {
    // 이미 있으면 반환, 없으면 새로 생성
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }
  hello() {
    //이것은 객체를 생성해야 사용가능(싱글톤x)
    console.log("hello~~");
  }
}
const singletonA = Singleton.getInstance();
const singletonB = Singleton.getInstance();
console.log(singletonA === singletonB);
const a = new Singleton();
a.hello();
//////////////////////////////////////
// 2. 팩토리 패턴
/////////////////////////////////////
// 팩토리 패턴
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    console.log(`${this.brand} 운전 중...`);
  }
}

function carFactory(type) {
  if (type === "현대") {
    return new Car("현대");
  } else if (type === "기아") {
    return new Car("기아");
  }
}
const car1 = carFactory("현대");
const car2 = carFactory("기아");
car1.drive();
car2.drive();

//////////////////////////////////////
// 3. 옵저버 패턴
/////////////////////////////////////
// 옵서버 패턴
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

const subject = new Subject();

//옵저버1
function subscribe1(news) {
  console.log(`subscriber1 : ${news}`);
}

//옵저버2
function subscribe2(news) {
  console.log(`subscriber2 : ${news}`);
}

//옵저버 등록
subject.subscribe(subscribe1);
subject.subscribe(subscribe2);

//알림전송
subject.notify("hello!~");
