import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import handleRegister from "../service/RegisterService";
import Logo from "../module/Logo";
import Footer from "../module/Footer";
import {ReactComponent as Register} from "../img/register.svg";

const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState(""); // 아이디 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const [email, setEmail] = useState(""); // 이메일 상태
  const navigate = useNavigate(); // react-router-dom의 useNavigate 훅
  const handleRegisterClick = () => {
    handleRegister(username, password, nickname, email, onRegister, navigate);
  };

  const goLogin = () => {
    navigate('/login');
  };

  return (
    <div className="main">
      <Logo />
      <nav className="LoginPage-nav">
      <span onClick={goLogin}>로그인</span>  | 회원가입
      </nav>
      <main className="register-main">
        <Register className="register-svg" />
        <article className="register-box">
          <div className="register-title">회원가입</div>
          <div className="welcome">Welcome to AllerGenie !</div>
          <section>
            <div className="loginBox-contents">
              아이디
            </div>
            <div className="register-tf">
              <input 
                className="register-input"
                type="text"
                placeholder="아이디를 입력해주세요."
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="loginBox-contents">
              비밀번호
            </div>
            <div className="register-tf">
              <input
                className="register-input"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="loginBox-contents">
              이메일
            </div>
            <div className="register-tf">
              <input
                className="register-input"
                type="text"
                placeholder="이메일을 입력해주세요."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="loginBox-contents">
              닉네임
            </div>
            <div className="register-tf">
              <input
                className="register-input"
                type="text"
                placeholder="닉네임을 입력해주세요."
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
          </section>
          <button className="registerBtn" onClick={handleRegisterClick}>가입하기</button>
        </article>
        <article className="goLogin">
          <span style={{marginRight: "11px", color: "#878787"}}>
            이미 회원이신가요?
          </span>
          <span onClick={goLogin} style={{cursor: "pointer"}}>
            로그인하러 가기 {" >"}
          </span>
        </article>
      </main>

    <Footer footerTop={"1198px"} />
    </div>
  );
};

export default RegisterPage;
