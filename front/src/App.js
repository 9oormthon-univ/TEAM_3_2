import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import SearchPage from "./components/SearchPage";
import handleSearch from "./service/SearchService";
import MyPage from "./components/MyPage";
import SearchItemListPage from "./components/SearchItemListPage";
import handleSearchList from "./service/SearchListService";
import "./style/style.scss";
import "./style/style_1.scss";

const App = () => {
  const [loginUsername, setLoginUsername] = React.useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchListResults, setSearchListResults] = useState([]);
  const handleSearchCallback = async (query, userId) => {
    // Similar to your existing search logic
    try {
      const results = await handleSearch(query, userId);
      setSearchResults(results);
    } catch (error) {
      console.error("검색 중 오류 발생:", error.message);
    }
  };
  const handleSearchListCallback = async (query, pageNo) => {
    // Similar to your existing search logic
    try {
      const results = await handleSearchList(query, pageNo);
      setSearchListResults(results);
    } catch (error) {
      console.error("검색 중 오류 발생:", error.message);
    }
  };
  // 로그인 처리 함수
  const handleLogin = (username) => {
    setLoginUsername(username);
  };

  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 여기에 로그아웃 로직을 구현하세요
    setLoginUsername(""); // 사용자 이름을 빈 문자열로 설정하여 로그아웃을 표현합니다.
  };
  const handleRegister = (username) => {
    // 여기에 실제 회원가입 로직을 추가하세요
    // 예시로 사용자 이름을 설정합니다
    setLoginUsername(username);
  };

  return (
    <Router>
      <Routes>
        {/* Main 컴포넌트에 onLogout 함수를 전달하여 로그아웃 처리를 가능하게 합니다. */}
        <Route
          path="/"
          element={
            <Main
              onSearch={handleSearchCallback}
              onSearchList={handleSearchListCallback}
              searchResults={searchResults}
              username={loginUsername}
              onLogout={handleLogout}
            />
          }
        />
        {/* LoginPage 컴포넌트에 onLogin 함수를 전달하여 로그인 처리를 가능하게 합니다. */}
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/register"
          element={<RegisterPage onRegister={handleRegister} />}
        />
        <Route
          path="/searchList"
          element={
            <SearchItemListPage
              onSearchList={handleSearchListCallback}
              username={loginUsername}
              searchResults={searchResults}
              searchListResults={searchListResults}
              onLogout={handleLogout}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              onSearch={handleSearchCallback}
              onSearchList={handleSearchListCallback}
              username={loginUsername}
              searchResults={searchResults}
              onLogout={handleLogout}
            />
          }
        />
        <Route
          path="/mypage"
          element={<MyPage username={loginUsername} onLogout={handleLogout} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
