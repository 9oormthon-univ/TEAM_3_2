import axios from "axios";
// 이메일 중복 체크 함수
const isEmailAvailable = async (email) => {
  try {
    const response = await axios.post("http://localhost:8000/checkEmail", {
      이메일: email,
    });

    return response.data.available; // 서버에서 사용 가능 여부를 반환하는 속성에 따라 적절히 수정
  } catch (error) {
    console.error("이메일 중복 체크 실패", error);
    return false;
  }
};

const handleRegister = async (
  email,
  password,
  nickname,
  onRegister,
  navigate
) => {
  try {
    // 이메일 중복 체크
    const isAvailable = await isEmailAvailable(email);

    if (!isAvailable) {
      // 이메일이 이미 사용 중인 경우 처리
      console.log("중복된 이메일입니다.");
      return isAvailable;
    }

    // 서버에 등록 요청 보냄
    const response = await axios.post(
      "http://localhost:8000/api/v1/auth/signup",
      {
        이메일: email,
        비밀번호: password,
        닉네임: nickname,
      }
    );

    const data = response.data;
    console.log("등록된 사용자:", data.email);
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
