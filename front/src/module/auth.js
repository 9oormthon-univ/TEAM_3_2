export const loginUser = (username, onLogin, navigate) => {
  // 사용자 이름을 사용하여 로그인 시뮬레이션
  onLogin(username);
  // 성공적인 로그인 후 메인 페이지로 이동
  navigate("/");
};
