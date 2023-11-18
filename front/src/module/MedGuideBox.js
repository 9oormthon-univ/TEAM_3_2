import React from "react";
import cup from "../img/cup.svg";
import medIcon from "../img/mainMedicon.svg";
const MedGuideBox = () => {
  return (
    <div className="MedGuideContainer">
      <h1 className="medGuide">지니가 알려주는 올바른 약 복용법</h1>
      <div className="medGuideBox1">
        <img
          src={cup}
          style={{ position: "absolute", left: "22.5vw", top: "6.5vh" }}
        ></img>
        <img
          src={medIcon}
          style={{ position: "absolute", left: "25vw", top: "6.5vh" }}
        ></img>
        <h1>약은 물과 함께,</h1>
        <span>
          약은 물과 함께 복용하는 것이 가장 좋습니다. 물과 함께 마시면 약을 녹여
          흡수를 돕고, 식도나 위에 달라붙지 않도록 해요. 또한 위장장애의 위험도
          줄일 수 있어요.
        </span>
      </div>
      <div className="goormGuide"></div>
      <div className="medGuideBox2"></div>
      <div className="medGuideBox3"></div>
      <div className="goormGuideFooter"></div>
    </div>
  );
};

export default MedGuideBox;
