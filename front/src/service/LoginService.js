import axios from "axios";

const handleLogin = async (email, password, onLogin, navigate) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/auth/login",
      {
        이메일: email,
        비밀번호: password,
      }
    );

    const data = response.data;

    if (data.닉네임 && data.accessToken && data.refreshToken) {
      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem("accessToken", data.accessToken);

      // axios 설정에서 헤더에 토큰을 추가
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.accessToken}`;

      // 사용자 로그인 처리
      onLogin(data.닉네임);

      // 페이지 이동
      navigate(`/?id=${data.닉네임}`);
    } else {
      console.error("로그인 실패:", "서버 응답에 필요한 데이터가 부족합니다.");
    }
  } catch (error) {
    console.error("로그인 중 에러:", error);
  }
};

export default handleLogin;
