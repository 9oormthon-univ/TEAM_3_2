import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Search from "../module/Search";
import Logo from "../module/Logo";
import Nav from "../module/Nav";
import Background from "../module/Background";
import MedGuideBox from "../module/MedGuideBox";
import MedKnowledgeBox from "../module/MedKnowledgeBox";
import Footer from "../module/Footer";
import handleSearch from "../service/SearchService";
import MedInfo from "../module/MedInfo";

const Main = ({
  username,
  onLogout,
  onSearch,
  onSearchList,
  searchResults,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const handleSearchCallback = async (query) => {
    setSearchQuery(query);
    console.log(`검색어: ${query}`);
    const idFromQuery = params.get("id");
    const pageNo = 1;
    const userId = idFromQuery;

    // Call the common onSearch callback
    onSearch(query, userId);
    onSearchList(query, pageNo);

    navigate(`/searchList?id=${userId}&query=${query}`);
  };

  const handleLogout = () => {
    // 로그아웃 로직
    onLogout();
    // 홈페이지로 리다이렉트 또는 다른 동작을 수행할 수 있습니다.1
    navigate("/login");
  };

  return (
    <div className="main">
      <Logo />
      <Nav username={username} onLogout={handleLogout} />
      <Search onSearch={handleSearchCallback} value={searchQuery} />
      <Background />
      <MedGuideBox />
      <MedKnowledgeBox />
      <Footer footerTop={"1875px"} />
    </div>
  );
};

export default Main;
