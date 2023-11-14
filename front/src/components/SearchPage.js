import React from "react";
import Logo from "../module/Logo";
import SearchBar from "../module/Search";
import MedInfo from "../module/MedInfo";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Nav from "../module/Nav";
import RelationMed from "../module/RelationMed";
const SearchPage = ({ username, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchQueryFromUrl = new URLSearchParams(location.search).get("query");
  const idFromQuery = new URLSearchParams(location.search).get("id");
  const [searchQuery, setSearchQuery] = React.useState(
    searchQueryFromUrl || ""
  );
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(`검색어: ${query}`);
    const userId = username || idFromQuery;
    navigate(`/search?id=${userId}&query=${query}`);
  };
  const handleLogout = () => {
    // 로그아웃 로직
    onLogout();
    // 홈페이지로 리다이렉트 또는 다른 동작을 수행할 수 있습니다.
    navigate("/login");
  };
  return (
    <div className="SearchPage">
      <Logo />
      <SearchBar onSearch={handleSearch} value={searchQuery} />
      <Nav username={username} onLogout={handleLogout} />
      <MedInfo value={searchQuery} />
      <RelationMed />
    </div>
  );
};
export default SearchPage;
