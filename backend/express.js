const express = require("express");
const mysql = require("mysql");
const dbconfig = require("./config/database");
const bcrypt = require("bcrypt");
const connection = mysql.createConnection(dbconfig);
const cors = require("cors");

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());
// 이 부분을 추가하여 클라이언트에게 알림 메시지를 전달하는 함수를 정의
function sendNotificationToClient(res, message) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    message,
  });
}

app.post("/register", async (req, res) => {
  const { 아이디, 비밀번호, 이메일, 닉네임 } = req.body;

  try {
    // 아이디가 이미 사용 중인지 확인
    const checkDuplicateQuery =
      "SELECT COUNT(*) as count FROM 회원 WHERE 아이디 = ?";

    connection.query(
      checkDuplicateQuery,
      [아이디],
      async (duplicateError, [duplicateResults]) => {
        if (duplicateError) {
          console.error("아이디 고유성 확인 중 에러:", duplicateError);
          res.status(500).json({ error: "내부 서버 오류" });
          return;
        }

        const duplicateCount = duplicateResults.count;

        if (duplicateCount > 0) {
          // 아이디가 이미 사용 중
          sendNotificationToClient(
            res,
            "이미 사용 중인 아이디입니다. 다른 아이디를 선택하세요."
          );
          return;
        }

        // 아이디가 고유하면 등록 계속 진행
        const hashedPassword = await bcrypt.hash(비밀번호, 10);

        // 사용자 데이터를 데이터베이스에 삽입
        connection.query(
          "INSERT INTO 회원(아이디, 비밀번호, 이메일, 닉네임) VALUES (?, ?, ?, ?)",
          [아이디, hashedPassword, 이메일, 닉네임],
          (registrationError, results) => {
            if (registrationError) {
              console.error("등록 중 에러:", registrationError);
              res.status(500).json({ error: "내부 서버 오류" });
            } else {
              console.log("사용자가 성공적으로 등록되었습니다", 아이디);
              const registeredUser = {
                아이디,
                이메일,
                닉네임,
                id: results.insertId, // Assuming your table has an auto-incrementing ID
              };

              // 등록 성공 알림을 클라이언트에게 전달
              sendNotificationToClient(res, "등록 성공");
            }
          }
        );
      }
    );
  } catch (error) {
    console.error("비밀번호 해싱 중 에러:", error);
    res.status(500).json({ error: "내부 서버 오류" });
  }
});

/////로그인
app.post("/login", async (req, res) => {
  const { 아이디, 비밀번호 } = req.body;

  try {
    // 아이디에 해당하는 사용자 정보를 가져옴
    const getUserQuery = "SELECT * FROM 회원 WHERE 아이디 = ?";

    connection.query(
      getUserQuery,
      [아이디],
      async (getUserError, [userResults]) => {
        if (getUserError) {
          console.error("사용자 정보 조회 중 에러:", getUserError);
          res.status(500).json({ error: "내부 서버 오류" });
          return;
        }

        if (!userResults) {
          // 사용자가 존재하지 않음
          sendNotificationToClient(res, "존재하지 않는 아이디입니다.");
          return;
        }

        // 비밀번호 검증
        const isPasswordValid = await bcrypt.compare(
          비밀번호,
          userResults.비밀번호
        );

        if (isPasswordValid) {
          // 로그인 성공
          const { 닉네임, 이름, 이메일 } = userResults;
          res.json({
            message: `로그인 성공 ${닉네임}`,
            닉네임,
            이름,
            이메일,
          });
        } else {
          // 비밀번호 불일치
          sendNotificationToClient(res, "비밀번호가 일치하지 않습니다.");
        }
      }
    );
  } catch (error) {
    console.error("로그인 중 에러:", error);
    res.status(500).json({ error: "내부 서버 오류" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
