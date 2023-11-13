import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../module/auth"; // 경로는 필요에 맞게 조정하세요

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    loginUser(username, onLogin, navigate);
  };

  return (
    <div>
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
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default LoginPage;
