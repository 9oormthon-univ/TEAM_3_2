import React, { useState } from "react";
import Logo from "../module/Logo";
import Search from "../module/Search";
import MedInfo from "../module/MedInfo";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../module/Nav";
import RelationMed from "../module/RelationMed";
import handleSearch from "../service/SearchService";
import SideEffect from "../module/SideEffect";
import Footer from "../module/Footer";

const SearchPage = ({
  username,
  onLogout,
  onSearch,
  onSearchList,
  searchResults,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchQueryFromUrl = new URLSearchParams(location.search).get("query");
  const idFromQuery = new URLSearchParams(location.search).get("id");
  const [searchQuery, setSearchQuery] = useState(searchQueryFromUrl || "");

  const handleSearchCallback = async (query) => {
    const accessToken = localStorage.getItem("accessToken");

    try {
      setSearchQuery(query);
      console.log(`검색어: ${query}`);
      const userId = username || idFromQuery;
      var pageNo = 1;
      if (accessToken) {
        onSearch(query, userId);
        onSearchList(query, pageNo);

        navigate(`/searchList?id=${userId}&query=${query}&page=${pageNo}`);
      }
    } catch (error) {
      console.error("검색 중 오류 발생:", error.message);
    }
  };

  const handleLogout = () => {
    // 로그아웃 로직을 수행합니다.
    onLogout();
    // 홈페이지로 리다이렉트 또는 다른 동작을 수행할 수 있습니다.
    navigate("/login");
  };

  return (
    <div className="SearchPage">
      <Logo />
      <Search onSearch={handleSearchCallback} value={searchQuery} />
      <Nav username={username} onLogout={handleLogout} />
      <MedInfo
        username={username}
        value={searchQuery}
        searchResults={searchResults}
      />
      <RelationMed />
      <SideEffect />
      <Footer footerTop={"1200px"} />
    </div>
  );
};

export default SearchPage;
