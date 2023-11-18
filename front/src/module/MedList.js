import React from "react";
import PlusCircle from "../img/plus-circle.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import handleSearch from "../service/SearchService";
import handleSearchList from "../service/SearchListService";

const MedList = ({
  username,
  value,
  searchListResults,
  onSearchList,
  onSearch,
}) => {
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
  const totalPage = searchListResults && searchListResults.totalPage;

  // 다음 페이지로 이동하는 함수
  const handlePageChange = (page) => {
    navigate(`/searchList?id=${username}&query=${value}&page=${page}`);
    onSearchList(value, page);
  };
  const highlightedText = (text, query) => {
    if (query !== "" && text.includes(query)) {
      const parts = text.split(new RegExp(`(${query})`, "gi"));

      return (
        <>
          {parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
              <mark key={index} className="highlighted-mark">
                {part}
              </mark>
            ) : (
              part
            )
          )}
        </>
      );
    }

    return text;
  };
  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPage; i++) {
      buttons.push(
        <div key={i} onClick={() => handlePageChange(i)}>
          {i}
        </div>
      );
    }
    return buttons;
  };

  return (
    <div>
      <div className="searchvalue">
        {highlightedText(value, value)} 이 포함된 검색 결과
      </div>
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
              <div className="MedTitleList">
                {highlightedText(med.약이름, value)}
              </div>
              <div className="MedIngredientsList">
                <div className="MedIngredientsInfoList">{med.성분내용}</div>
              </div>
            </div>
          ))}
      </div>
      <div className="PaginationButtons">{renderPaginationButtons()}</div>
    </div>
  );
};

export default MedList;
