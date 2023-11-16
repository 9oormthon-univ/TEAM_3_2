import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleLogin from "../service/LoginService";
import Logo from "../module/Logo";
import Footer from "../module/Footer";
import ID_Icon from "../img/id-icon.svg";
import PW_Icon from "../img/pw-icon.svg";
import {ReactComponent as GoormBig} from "../img/goorm-login.svg";
import {ReactComponent as GoormSmall} from "../img/goorm-login-small.svg";

const LoginPage = ({ onLogin }) => {
  const [email, setUsername] = useState(""); // 아이디 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [isChecked, setIsChecked] = useState(false); //로그인 유지 체크 여부
  const navigate = useNavigate(); // react-router-dom의 useNavigate 훅

  const handleLoginClick = () => {
    handleLogin(email, password, onLogin, navigate);
  };

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
  };

  const goRegister = () => {
    navigate('/register');
  };

  return (
    <div className="main">
      <Logo />
      <nav className="LoginPage-nav">
        <span>로그인</span> | 회원가입
      </nav>
      <main className="LoginPage-main">
        <GoormBig className="LoginPage-goorm1" />
        <GoormSmall className="LoginPage-goorm2" />
        <article className="loginBox">
          <div className="loginBox-title">
            로그인
          </div>
          <section>
            <div className="loginBox-contents">
              이메일
            </div>
            <div className="login-tf">
              <img src={ID_Icon}></img>
              <input
                type="text"
                placeholder=" "
                value={email}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="loginBox-contents" style={{marginTop: "30px"}}>
              비밀번호
            </div>
            <div className="login-tf">
              <img src={PW_Icon}></img>
              <input
                type="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="check">
              <input 
                className="checkBox"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckbox}
               />
              <div className="checkText">로그인 상태 유지</div>
            </div>
          </section>
          <button className="loginBtn" onClick={handleLoginClick}>
            로그인
          </button>
        </article>
        <article className="goRegister">
          <span style={{marginRight: "11px", color: "#878787"}}>
            아직 회원이 아니신가요?
          </span>
          <span onClick={goRegister} style={{cursor: "pointer"}}>
            회원가입하러 가기 {" >"}
          </span>
        </article>
      </main>
      <Footer footerTop={"904px"}/>
    </div>
  );
};

export default LoginPage;