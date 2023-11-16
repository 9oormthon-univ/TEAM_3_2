import React from "react";
import Logo from "../module/Logo";
import Nav from "../module/Nav";
const MyPage = ({ username, handleLogout }) => {
  return (
    <div>
      <Logo />
      <Nav username={username} onLogout={handleLogout} />
    </div>
  );
};
export default MyPage;
