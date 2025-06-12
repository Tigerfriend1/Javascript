const UserService = require("../modules/UserService.js"); // UserService 클래스 불러오기

describe("UserService", () => {
  let userService;

  beforeEach(() => {
    userService = new UserService(); // 각 테스트 전에 새로운 인스턴스를 생성
  });

  // 사용자 추가 테스트
  test("should add a user correctly", () => {
    const user = userService.addUser("Alice", 25);
    expect(user).toEqual({ name: "Alice", age: 25 });
  });

  // 나이가 18세 미만이면 에러를 던져야 한다
  test("should throw an error when adding a user under 18", () => {
    expect(() => userService.addUser("Bob", 17)).toThrow(
      "User must be at least 18 years old"
    );
  });

  // 사용자 조회 테스트
  test("should get the correct user by name", () => {
    userService.addUser("Charlie", 30);
    const user = userService.getUser("Charlie");
    expect(user).toEqual({ name: "Charlie", age: 30 });
  });

  // 존재하지 않는 사용자 조회 시 null을 반환해야 한다
  test("should return undefined if user not found", () => {
    const user = userService.getUser("NonExistent");
    expect(user).toBeUndefined();
  });

  // 사용자 삭제 테스트
  test("should delete a user correctly", () => {
    userService.addUser("David", 28);
    const result = userService.deleteUser("David");
    expect(result).toBe(true);
    const user = userService.getUser("David");
    expect(user).toBeUndefined();
  });

  // 삭제하려는 사용자가 없으면 false를 반환해야 한다
  test("should return false when deleting a non-existent user", () => {
    const result = userService.deleteUser("NonExistent");
    expect(result).toBe(false);
  });

  // 사용자 정보 업데이트 테스트
  test("should update user age correctly", () => {
    userService.addUser("Eve", 22);
    const updatedUser = userService.updateUser("Eve", 23);
    expect(updatedUser.age).toBe(23);
  });

  // 존재하지 않는 사용자 정보 업데이트 시 에러를 던져야 한다
  test("should throw an error when updating a non-existent user", () => {
    expect(() => userService.updateUser("NonExistent", 30)).toThrow(
      "User not found"
    );
  });
});
