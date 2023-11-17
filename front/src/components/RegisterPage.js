import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleRegister from "../service/RegisterService";
import Logo from "../module/Logo";
import Footer from "../module/Footer";
import { ReactComponent as Register } from "../img/register.svg";
import Valid from "../img/isCheckedTrue.svg";
import InValid from "../img/invalid.svg";

const RegisterPage = ({ onRegister }) => {
  const [email, setEmail] = useState(""); // 이메일 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const [passwordValid, setPasswordValid] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isTypingEmail, setIsTypingEmail] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const navigate = useNavigate(); // react-router-dom의 useNavigate 훅

  const handleRegisterClick = () => {
    handleRegister(email, password, nickname, onRegister, navigate);
  };

  const validatePassword = (password) => {
    // 영문+숫자, 8~16자 확인
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,16}$/;
    const isValid = passwordRegex.test(password);
    setPasswordValid(isValid);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsTyping(true);
    validatePassword(newPassword);
  };

  const handlePasswordBlur = () => {
    setIsTyping(false);
  };

  const validateEmail = (email) => {
    // 이메일 형식 및 '@' 포함 여부 확인!
    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    const isValidEmail = emailRegex.test(email);
    setEmailValid(isValidEmail);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsTypingEmail(true);
    validateEmail(newEmail);
  };

  const handleEmailBlur = () => {
    setIsTypingEmail(false);
  };
  const goLogin = () => {
    navigate("/login");
  };

  return (
    <div className="main">
      <Logo />
      <nav className="LoginPage-nav">
        <span onClick={goLogin}>로그인</span> | 회원가입
      </nav>
      <main className="register-main">
        <Register className="register-svg" />
        <article className="register-box">
          <div className="register-title">회원가입</div>
          <div className="welcome">Welcome to AllerGenie !</div>
          <section>
            <div className="loginBox-contents">이메일</div>
            <div className="register-tf">
              <input
                className="register-input"
                type="text"
                placeholder="이메일을 입력해주세요."
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
              />
            </div>
            {!isTypingEmail && email && (
              <div className="id-message">
                {emailValid ? (
                  <>
                    <img src={Valid} alt="Valid Email" />
                    <span className="validateMessage">
                      사용 가능한 이메일입니다.
                    </span>
                  </>
                ) : (
                  <>
                    <img src={InValid} alt="Invalid Email" />
                    <span className="validateMessage">
                      사용 불가능한 이메일입니다.
                    </span>
                  </>
                )}
              </div>
            )}
            <div className="loginBox-contents">비밀번호</div>
            <div className="register-tf">
              <input
                className="register-input"
                type="text"
                placeholder="비밀번호를 입력해주세요."
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
              />
            </div>
            {!isTyping && password && (
              <div className="pw-message">
                {passwordValid ? (
                  <>
                    <img src={Valid} alt="Valid Password" />
                    <span className="validateMessage">
                      사용 가능한 비밀번호입니다.
                    </span>
                  </>
                ) : (
                  <>
                    <span className="pw-redMessage">
                      * 8~16자의 영문, 숫자를 사용해주세요.
                    </span>
                    <img src={InValid} alt="Invalid Password" />
                    <span className="validateMessage">
                      사용 불가능한 비밀번호입니다.
                    </span>
                  </>
                )}
              </div>
            )}
            <div className="loginBox-contents">닉네임</div>
            <div className="register-tf">
              <input
                className="register-input"
                type="text"
                placeholder="닉네임을 입력해주세요."
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
          </section>
          <button className="registerBtn" onClick={handleRegisterClick}>
            가입하기
          </button>
        </article>
        <article className="goLogin">
          <span style={{ marginRight: "11px", color: "#878787" }}>
            이미 회원이신가요?
          </span>
          <span onClick={goLogin} style={{ cursor: "pointer" }}>
            로그인하러 가기 {" >"}
          </span>
        </article>
      </main>

      <Footer footerTop={"1198px"} />
    </div>
  );
};

export default RegisterPage;
