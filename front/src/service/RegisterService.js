import axios from "axios";
const handleRegister = async (
  username,
  password,
  nickname,
  email,
  onRegister,
  navigate
) => {
  try {
    // 서버에 등록 요청 보냄
    const response = await axios.post("http://localhost:8000/register", {
      아이디: username,
      비밀번호: password,
      닉네임: nickname,
      이메일: email,
    });

    const data = response.data;
    console.log("등록된 사용자:", data.아이디);
    // 등록 성공 후 부모 컴포넌트의 상태 업데이트
    onRegister(data.아이디);
    // 등록 성공 후 로그인 페이지로 이동
    navigate("/login");
  } catch (error) {
    // 등록 실패 처리: 에러 메시지 표시 등
    console.error("등록 실패", error);
  }
};
export default handleRegister;
