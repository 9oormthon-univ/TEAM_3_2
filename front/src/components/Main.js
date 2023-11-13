import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../module/Search";
import Logo from "../img/logo.svg";
import Background from "../module/Background";
import MedGuideBox from "../module/MedGuideBox";

const Main = ({ username, onLogout }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(`검색어: ${query}`);
  };

  const handleLogout = () => {
    // 로그아웃 로직
    onLogout();
    // 홈페이지로 리다이렉트 또는 다른 동작을 수행할 수 있습니다.
    navigate("/");
  };

  return (
    <div className="main">
      <img className="Logo" src={Logo}></img>
      <Search onSearch={handleSearch} />
      <Background />
      <MedGuideBox />
      {username ? (
        <div>
          <p>로그인한 사용자: {username}</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          {/* 로그인되어 있지 않을 때 회원가입 버튼 */}
          {/* <Link to="/register">회원가입</Link>
          <Link to="/login">로그인 페이지로 이동</Link> */}
        </div>
      )}
    </div>
  );
};

export default Main;
