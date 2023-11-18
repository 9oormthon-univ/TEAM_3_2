import React, { useState, useEffect } from "react";
import axios from "axios";
import deleteCircle from "../img/MyDeleteCircle.svg";

const MedShouldNotTake = ({ username, medicineName }) => {
  const [medicationInfo, setMedicationInfo] = useState([
    "나",
    "다",
    "가",
    "나",
  ]); // 더미 데이터 -> 추후 삭제
  const [selectedMedIndex, setSelectedMedIndex] = useState(null); // medicationInfo 배열 index 값 저장

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/mypage/${username}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch medication information");
        }

        const data = await response.json();
        setMedicationInfo(data);
      } catch (error) {
        console.error("Error fetching medication information:", error);
      }
    };

    fetchData();
  }, [username]);

  const handleMedClick = (index) => {
    setSelectedMedIndex(index);
    medicineName(medicationInfo[index]);
  };

  const handleDeleteMedication = async () => {
    //약 삭제 함수
    if (selectedMedIndex !== null) {
      // 로컬에서 삭제
      const updatedMedicationInfo = [...medicationInfo];
      const deletedMedication = updatedMedicationInfo.splice(
        selectedMedIndex,
        1
      );
      setMedicationInfo(updatedMedicationInfo);
      setSelectedMedIndex(null);

      // 약 삭제 요청
      try {
        await axios.delete(
          `http://localhost:8000/deleteMedication/${username}`,
          {
            data: { medication: deletedMedication[0] },
          }
        );
        console.log("삭제 완료");
        // 약 삭제 후 선택된 약 없음
        medicineName(null);
      } catch (error) {
        console.error("삭제 실패", error);
      }
    }
  };

  return (
    <>
      <div className="deleteMed" onClick={handleDeleteMedication}>
        <img src={deleteCircle} alt="Delete Circle" />약 정보 삭제하기
      </div>
      <div className="MedShouldNotTakeContainer">
        <h1>먹으면 안되는 약</h1>
        <div className="Med">
          {medicationInfo.map((med, index) => (
            <div
              className={`addMedCircle ${
                selectedMedIndex === index ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleMedClick(index)}
            >
              {/* {medicationInfo[index]} */}
              {med.약정보}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MedShouldNotTake;
