import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Search from "../module/Search";
import Logo from "../module/Logo";
import Nav from "../module/Nav";
import Background from "../module/Background";
import MedGuideBox from "../module/MedGuideBox";
import MedKnowledgeBox from "../module/MedKnowledgeBox";
import Footer from "../module/Footer";

const Main = ({ username, onLogout }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(`검색어: ${query}`);
    const idFromQuery = params.get("id"); // Assuming you have idFromQuery available
    const userId = username || idFromQuery;

    // Use navigate to go to the search page with both id and query parameters
    navigate(`/search?id=${userId}&query=${query}`);
  };

  const handleLogout = () => {
    // 로그아웃 로직
    onLogout();
    // 홈페이지로 리다이렉트 또는 다른 동작을 수행할 수 있습니다.
    navigate("/login");
  };

  return (
    <div className="main">
      <Logo />
      <Nav username={username} onLogout={handleLogout} />
      <Search onSearch={handleSearch} value={searchQuery} />
      <Background />
      <MedGuideBox />
      <MedKnowledgeBox />
      <Footer />
    </div>
  );
};

export default Main;
