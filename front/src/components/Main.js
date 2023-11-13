import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../module/Search";
import Logo from "../img/logo.svg";
import Nav from "../module/Nav";
import Background from "../module/Background";
import MedGuideBox from "../module/MedGuideBox";
import MedKnowledgeBox from "../module/MedKnowledgeBox";
import Footer from "../module/Footer";

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
    navigate("/login");
  };

  return (
    <div className="main">
      <img className="Logo" src={Logo}></img>
      <Nav username={username} onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Background />
      <MedGuideBox />
      <MedKnowledgeBox />
      <Footer />
    </div>
  );
};

export default Main;
