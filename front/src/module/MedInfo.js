import React from "react";
import Med1 from "../img/Med1.svg";
import PlusCircle from "../img/plus-circle.svg";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const MedInfo = ({ username, value }) => {
  const location = useLocation();
  const { searchResults } = location.state || {};
  const navigate = useNavigate();
  const handleAddMed = async () => {
    try {
      const response = await axios.post("http://localhost:8000/addMedication", {
        닉네임: username,
        약정보: value,
      });
      console.log(response);
    } catch {}
    navigate(`/mypage?nickname=${username}`);
  };
  console.log("검색 페이이이이", searchResults);

  return (
    <div>
      <div className="AllergicAdd" onClick={handleAddMed}>
        <img className="plus-circle" src={PlusCircle} alt="Plus Circle" />
        <span>알러지 등록</span>
      </div>
      {searchResults.map((result, index) => (
        <div className="AllergeContainer" key={index}>
          <div className="MedTitle">{result.약이름}</div>
          <div className="MedIngredients">
            <span>{result.성분}</span>
            <div className="MedIngredientsInfo">{result.성분내용}</div>
          </div>
          <div className="MedEfficacy">
            <span>{result.약효능효과}</span>
            <div className="MedEfficacyInfo">{result.효능효과내용}</div>
          </div>
          <div className="MedImageContainer">
            <img src={result.약이미지} alt="Med1" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default MedInfo;
