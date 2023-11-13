import React from "react";
import Med1 from "../img/Med1.svg";
import PlusCircle from "../img/plus-circle.svg";
const MedInfo = ({ value }) => {
  return (
    <div>
      <div className="AllergicAdd">
        <img className="plus-circle" src={PlusCircle}></img>
        <span>알러지 등록</span>
      </div>
      <div className="AllergeContainer">
        <div className="MedTitle">{value}</div>
        <div className="MedIngredients">
          <span>약의 성분</span>
          <div className="MedIngredientsInfo">
            세포증식, 분화와 혈구 생성, 염증반응, 조직 재생과 신경전달 등에
            관여하는 단백질
          </div>
        </div>
        <div className="MedEfficacy">
          <span>효능 및 효과</span>
          <div className="MedEfficacyInfo">
            항히스타민제는 두드러기, 발적, 소양감 등의 알레르기성 반응에
            관여하는 히스타민의 작용을 억제하는 약물이다. 알레르기성 질환 외에도
            콧물, 재채기, 불면, 어지럼증, 구토 멀미 등을 완화하는데 사용된다.
          </div>
        </div>
        <div className="MedImageContainer">
          <img src={Med1}></img>
        </div>
      </div>
    </div>
  );
};
export default MedInfo;
