import React from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = ({ username, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idFromQuery = params.get("id");

  // 사용자가 로그인되어 있으면서 username 또는 쿼리 매개변수에서 ID가 있는지 확인
  const isLoggedIn = !!username || !!idFromQuery;

  const handleMypage = async () => {
    try {
      if (!username) {
        console.error("Username is not available.");
        // username이 없을 경우 처리
        return;
      }

      // Express.js 서버에 사용자 정보를 요청하는 Axios 호출
      const response = await axios.get(
        `http://localhost:8000/user/${username}`
      );

      // 요청이 성공했는지 확인
      if (response.status === 200) {
        // 서버가 응답으로 사용자 정보를 전달한다고 가정
        const userData = response.data;

        // 응답에서 받은 사용자 ID를 사용하여 'mypage' 경로로 이동
        navigate(`/mypage?nickname=${userData.닉네임}`);
      } else {
        console.error(
          "Error during user information retrieval:",
          response.statusText
        );
        // 에러 처리
      }
    } catch (error) {
      console.error("Error during user information retrieval:", error.message);
      // 에러 처리
    }
  };

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
            ? `${
                username || idFromQuery
              } <div class='word2'> 님, 안녕하세요</div>`
            : "",
        }}
      ></div>
      <div className="my-page" onClick={handleMypage}>
        마이페이지
      </div>
      <div className="logout" onClick={onLogout}>
        로그아웃
      </div>
      <div className="line-16"></div>
      <div className="line-17"></div>
    </div>
  );
};

export default Nav;
