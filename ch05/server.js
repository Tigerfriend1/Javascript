const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// 미들웨어 설정
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen("8282", () => {
  console.log("서버 실행 중...");
});

const session = new Map();
const crypto = require("crypto");

function generateToken() {
  return crypto.randomBytes(24).toString("hex");
}

//모든 요청 함수에 대한 공통 처리를 담당하는 필터
const clientId = "a1001";
// app.use((req, res, next) => {
//   console.log("요청 실행...");

//   const csrfToken = generateToken();
//   console.log(`csrfToken : ${csrfToken}`);

//   session.set(clientId, csrfToken);
//   res.cookie("csrfToken", csrfToken);
//   next();
// });

app.get("/", (req, res) => {
  const csrfToken = generateToken();
  console.log(`csrfToken : ${csrfToken}`);

  session.set(clientId, csrfToken);
  res.cookie("csrfToken", csrfToken);
  res.send(`
    <h2>비밀번호 변경</h2>
    <form action='/changePassword' method='POST'>
        <input type='hidden' name='csrfToken' value=${csrfToken} />
        <input type='password' name='password'/>
        <button type='submit'>비밀번호 변경</button>
    </form>
    `);
});

app.post("/changePassword", (req, res) => {
  const csrfToken = req.body.csrfToken;
  const password = req.body.password;

  const sessionToken = session.get(clientId);
  if (sessionToken != csrfToken) {
    console.log(`CSRF 공격 탐지!!!`);
    res.status(403).send("CSRF 토큰 불일치!!!");
    return;
  }
  res.send(`<p>${password}로 비밀번호 변경완료!</p>`);
});
