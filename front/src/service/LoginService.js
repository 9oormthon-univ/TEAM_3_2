import axios from "axios";

const handleLogin = async (email, password, onLogin, navigate) => {
  try {
    const response = await axios.post("http://localhost:8000/login", {
      아이디: email,
      비밀번호: password,
    });
    console.log("서버 응답 전문:", response);

    const data = response.data;

    if (data.message) {
      if (data.message.includes("로그인 성공")) {
        onLogin(data.닉네임);
        navigate(`/?id=${data.닉네임}`);
      } else {
        console.error("로그인 실패:", data.message);
      }
    } else {
      console.error("서버 응답에 메시지가 없습니다.");
    }
  } catch (error) {
    console.error("로그인 중 에러:", error);
  }
};

export default handleLogin;
