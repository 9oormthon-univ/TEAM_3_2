import React from "react";
import PlusCircle from "../img/plus-circle.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import handleSearch from "../service/SearchService";

const MedList = ({ username, value, searchListResults }) => {
  const handleAddMed = async () => {
    try {
      const response = await axios.post("http://localhost:8000/addMedication", {
        닉네임: username,
        약정보: value,
      });
      console.log(response);
    } catch (error) {
      console.error("약물 추가 중 오류:", error.message);
    }
  };

  const navigate = useNavigate();

  const handleClick = async (medName) => {
    try {
      // handleSearch를 사용하여 상세 정보를 가져옵니다.
      const searchResults = await handleSearch(medName, username);
      // 검색 결과와 함께 MedInfo 페이지로 이동합니다.
      navigate(`/search?id=${username}&query=${medName}`, {
        state: { searchResults },
      });
    } catch (error) {
      console.error("클릭 처리 중 오류:", error.message);
    }
  };

  const medicineList = searchListResults && searchListResults.medicineList;
  const currentPage = searchListResults && searchListResults.currentPage;
  const totalPage = searchListResults && searchListResults.totalPage;
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      // 이전 페이지로 이동하는 로직
      navigate(
        `/searchList?id=${username}&query=${value}&page=${currentPage - 1}`
      );
    }
  };

  // 다음 페이지로 이동하는 함수
  const handleNextPage = () => {
    if (currentPage < totalPage) {
      navigate(
        `/searchList?id=${username}&query=${value}&page=${currentPage + 1}`
      );
    }
  };

  return (
    <div>
      <div className="AllergicAdd" onClick={handleAddMed}>
        <img className="plus-circle" src={PlusCircle} alt="알러지 등록"></img>
        <span>알러지 등록</span>
      </div>
      <div className="ListAllerge">
        {medicineList &&
          medicineList.map((med, index) => (
            <div
              className="AllergeContainerList"
              key={index}
              onClick={() => handleClick(med.약이름)}
            >
              <div className="MedTitleList">{med.약이름}</div>
              <div className="MedIngredientsList">
                <span>약의 성분</span>
                <div className="MedIngredientsInfoList">{med.성분내용}</div>
              </div>
            </div>
          ))}
      </div>
      <div className="PaginationButtons">
        {currentPage > 1 && (
          <button onClick={() => handlePreviousPage}>이전</button>
        )}
        {currentPage < totalPage && (
          <button onClick={handleNextPage}>다음</button>
        )}
      </div>
    </div>
  );
};

export default MedList;
