import React from "react";
import Logo from "../module/Logo";
import Nav from "../module/Nav";
import MyProfile from "../module/MyProfile";
const MyPage = ({ username, handleLogout }) => {
  return (
    <div>
      <Logo />
      <Nav username={username} onLogout={handleLogout} />
      <MyProfile />
    </div>
  );
};
export default MyPage;
