import React from "react";
const Nav = ({ username, onLogout }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    setIsLoggedIn(!!username);
  }, [username]);
  return (
    <div className="nav">
      <div className="top-info"></div>
      <div className="Profile_picture"></div>
      <div className="Profile_Avatar"></div>
      <div className="Ellipse"></div>
      <div
        className="greetings"
        dangerouslySetInnerHTML={{
          __html: isLoggedIn
            ? `${username} <div class='word2'> 님, 안녕하세요</div>`
            : "",
        }}
      ></div>
      <div className="my-page">마이페이지</div>
      <div className="logout" onClick={onLogout}>
        로그아웃
      </div>
      <div className="line-16"></div>
      <div className="line-17"></div>
    </div>
  );
};
export default Nav;
