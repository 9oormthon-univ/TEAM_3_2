import React from "react";
import girtec from "../img/girtec.svg";
import allegra from "../img/allegra.svg";
import ssizal from "../img/ssizal.svg";
import perinamin from "../img/perinamin.svg";
const RelationMed = () => {
  return (
    <div className="RelationMedContainer">
      <h1 className="RelationMedInfo">관련 약 정보</h1>
      <div className="RelationMedImgContainer">
        <img className="RelationImg" src={girtec}></img>
        <div className="RelationMedTitle">
          <span>지르텍</span>
        </div>
      </div>
      <div className="RelationMedImgContainer">
        <img className="RelationImg" src={allegra}></img>
        <div className="RelationMedTitle">
          <span>알레그라</span>
        </div>
      </div>
      <div className="RelationMedImgContainer">
        <img className="RelationImg" src={ssizal}></img>
        <div className="RelationMedTitle">
          <span>씨잘</span>
        </div>
      </div>
      <div className="RelationMedImgContainer">
        <img className="RelationImg" src={perinamin}></img>
        <div className="RelationMedTitle">
          <span>페니라민</span>
        </div>
      </div>
    </div>
  );
};
export default RelationMed;
