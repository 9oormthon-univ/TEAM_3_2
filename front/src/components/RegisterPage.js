import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import handleRegister from "../service/\bRegisterService";

const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState(""); // 아이디 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const [email, setEmail] = useState(""); // 이메일 상태
  const navigate = useNavigate(); // react-router-dom의 useNavigate 훅
  const handleRegisterClick = () => {
    handleRegister(username, password, nickname, email, onRegister, navigate);
  };
  return (
    <div>
      <h2>회원가입</h2>
      <input
        type="text"
        placeholder="이메일"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="닉네임"
        onChange={(e) => setNickname(e.target.value)}
      />
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
      <button onClick={handleRegisterClick}>가입하기</button>
      <p>
        이미 계정이 있으신가요? <Link to="/login">로그인 페이지로 이동</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
