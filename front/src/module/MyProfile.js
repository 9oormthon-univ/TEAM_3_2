import React from "react";
import MyImage from "../img/profile.svg";
import addCircle from "../img/MyPlusCircle.svg";
import deleteCircle from "../img/MyDeleteCircle.svg";
const MyProfile = ({ username, email }) => {
  return (
    <div>
      <div className="MyIcon">
        <img src={MyImage}></img>
      </div>
      <p className="MyProfile-username">{username}님,</p>
      <p className="MyProfile-email">{email}</p>
      <div className="addMedSearch">
        <img src={addCircle}></img>약 정보 추가하기
      </div>
      <div className="deleteMed">
        <img src={deleteCircle}></img>약 정보 삭제하기
      </div>
    </div>
  );
};
export default MyProfile;
