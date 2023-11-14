import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleLogin from "../service/LoginService";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState(""); // 아이디 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const navigate = useNavigate(); // react-router-dom의 useNavigate 훅

  const handleLoginClick = () => {
    handleLogin(username, password, onLogin, navigate);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginClick}>로그인</button>
    </div>
  );
};

export default LoginPage;
