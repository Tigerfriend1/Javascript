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
