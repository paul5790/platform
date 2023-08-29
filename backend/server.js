const express = require("express");
const app = express();
const cors = require("cors"); // CORS 관련 미들웨어를 사용하기 위해 cors 패키지를 설치했습니다.

// 미들웨어 설정
app.use(express.json()); // JSON 파싱을 위한 미들웨어
app.use(cors()); // CORS 관련 미들웨어

// 데이터를 요청하는 라우트 핸들러
app.post("/data/user", (req, res) => {
  try {
    // 데이터를 클라이언트에게 반환
    console.log("user post성공");
    res.json(userData);
  } catch (error) {
    console.log(error)
  }
});

app.post("/data/monitoring", (req, res) => {
  try {
    // 데이터를 클라이언트에게 반환
    console.log("monitoring post성공");
    const combinedData = { headers: randHeader, data: randData };
    res.json(combinedData);
  } catch (error) {
    console.log(error);
  }
});

const PORT = 13000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});

// 예시로 사용할 JSON 데이터
const userData = [
  {
    USERID: "paul",
    PASSWORD: "0123",
  },
  {
    USERID: "hyun",
    PASSWORD: "1234",
  },
];

const randHeader = ["No.", "Name", "Value"]

const randData = [
  {
    no: 1,
    name: "a",
    value: 159,
  },
  {
    no: 2,
    name: "b",
    value: 237,
  },
  {
    no: 3,
    name: "c",
    value: 262,
  },
  {
    no: 4,
    name: "d",
    value: 305,
  },
  {
    no: 5,
    name: "e",
    value: 356,
  },
  {
    no: 6,
    name: "f",
    value: 375,
  },
  {
    no: 7,
    name: "g",
    value: 392,
  },
  {
    no: 8,
    name: "h",
    value: 408,
  },
  {
    no: 9,
    name: "i",
    value: 452,
  },
  {
    no: 10,
    name: "j",
    value: 518,
  },
  {
    no: 11,
    name: "k",
    value: 518,
  },
  {
    no: 12,
    name: "l",
    value: 518,
  },
  {
    no: 8,
    name: "h",
    value: 408,
  },
  {
    no: 9,
    name: "i",
    value: 452,
  },
  {
    no: 10,
    name: "j",
    value: 518,
  },
  {
    no: 11,
    name: "k",
    value: 518,
  },
  {
    no: 12,
    name: "l",
    value: 518,
  },
  {
    no: 13,
    name: "l",
    value: 518,
  },
  {
    no: 14,
    name: "l",
    value: 518,
  },
  {
    no: 15,
    name: "l",
    value: 518,
  },
];