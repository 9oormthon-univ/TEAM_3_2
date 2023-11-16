import React from "react";
import Sleepy from "../img/sleep.svg";
import Stomach from "../img/stomach.svg";
import Vomit from "../img/vomit.svg";
import Eyeloss from "../img/Eyeloss.svg";
const SideEffect = () => {
  return (
    <div>
      <div className="SideEffect-Container">
        <h1 className="sideEffectText">부작용</h1>
        <div className="sideEffectImgContainer">
          <img src={Sleepy}></img>
          <img src={Stomach}></img>
          <img src={Vomit}></img>
          <img src={Eyeloss}></img>
        </div>
        <div className="sideEffectTypeContainer">
          <div className="sideEffectType">복통</div>
          <div className="sideEffectType">복통</div>
          <div className="sideEffectType">복통</div>
          <div className="sideEffectType">복통</div>
        </div>
        <div className="sideEffectInfo">
          약물의 종류에 따라 정도가 다르지만 대표적인 부작용은 졸음, 진정작용과
          같은 중추신경계 부작용이다.
        </div>
        <h1 className="sideEffectWarning">주의사항 & 해결방안</h1>
        <div className="sideEffectWarningInfo">
          자동차 운전이나 위험을 수반하는 기계조작, 집중을 요하는 작업에
          종사하는 사람들은 복용하지 않도록 한다. 항콜린 작용에 의한 배뇨 및
          시력장애가 나타날 수 있으므로 전립선비대증 환자나 녹내장 환자에게는
          투여하지 않도록 한다. 중추신경억제제 또는 항콜린성 약물과 병용투여 시
          용량 조절이 요구될 수 있다. 졸음, 진정작용과 같은 중추신경계 부작용이
          증가될 수 있으므로 항히스타민제 복용 시 알코올을 섭취하지 않도록 한다.
        </div>
      </div>
    </div>
  );
};
export default SideEffect;
