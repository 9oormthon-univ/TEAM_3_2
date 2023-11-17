import React from "react";
import MyImage from "../img/profile.svg";
import addCircle from "../img/MyPlusCircle.svg";

import { Link } from "react-router-dom";

const MyProfile = ({ username, email }) => {
  return (
    <div>
      <div className="MyIcon">
        <img src={MyImage} alt="Profile Icon" />
      </div>
      <p className="MyProfile-username">{username}님,</p>
      <p className="MyProfile-email">{email}</p>
      <div className="addMedSearch">
        <img src={addCircle} alt="Add Circle" />
        <Link to="/search" style={{ textDecoration: "none", color: "inherit" }}>
          약 정보 추가하기
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;