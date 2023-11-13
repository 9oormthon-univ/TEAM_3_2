import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // 여기에 실제 회원가입 로직을 추가하세요
    // 예시로 사용자 이름을 부모 컴포넌트로 전달합니다
    onRegister(username);
    // 회원가입 후 메인 페이지로 이동
    navigate("/");
  };

  return (
    <div>
      <h2>회원가입</h2>
      <input
        type="text"
        placeholder="아이디"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>가입하기</button>
      <p>
        이미 계정이 있으신가요? <Link to="/login">로그인 페이지로 이동</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
