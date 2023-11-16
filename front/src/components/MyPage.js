import React from "react";
import Logo from "../module/Logo";
import Nav from "../module/Nav";
import MyProfile from "../module/MyProfile";

const MyPage = ({ username, handleLogout, medicine }) => {
  return (
    <div>
      <Logo />
      <Nav username={username} onLogout={handleLogout} />
      <MyProfile />
      <main className="MyPage-main">
        <div style={{padding: "300px"}}>
          .
        </div>
        <section className="Mypage-se">
          <div className="Mypage-se-title">
            약의 부작용
          </div>
          <div className="Mypage-se-container">
            {/*
            {medicine.sideEffect.map((effect, index) => (
              <div className="Mypage-se-content" key={index}>
                <img src={effect.imageUrl} />
                <div className="Mypage-se-content-title">
                  {effect.sideEffectName}
                </div>
              </div>
            ))}
            */}
          </div>
        </section>
        <section className="Mypage-caution">
          <div className="Mypage-se-title">
            약의 부작용 & 주의사항
          </div>
          <div className="Mypage-caution-container">
            <div className="Mypage-caution-img">
              <img src={medicine.image} />
            </div>
            <div className="Mypage-caution-content">
              <div className="Mypage-caution-name">
                {medicine.name}
              </div>
              <div className="Mypage-caution-about">
                {medicine.caution}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default MyPage;
