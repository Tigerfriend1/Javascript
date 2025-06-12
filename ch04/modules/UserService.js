class UserService {
  constructor() {
    this.users = [];
  }

  // 사용자 추가
  addUser(name, age) {
    if (age < 18) {
      throw new Error("User must be at least 18 years old");
    }
    const user = { name, age };
    this.users.push(user);
    return user;
  }

  // 사용자 조회
  getUser(name) {
    return this.users.find((user) => user.name === name);
  }

  // 사용자 삭제
  deleteUser(name) {
    const userIndex = this.users.findIndex((user) => user.name === name);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }

  // 사용자 정보 업데이트
  updateUser(name, newAge) {
    const user = this.getUser(name);
    if (!user) {
      throw new Error("User not found");
    }
    user.age = newAge;
    return user;
  }
}

module.exports = UserService;
