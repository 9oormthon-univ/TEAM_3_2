import React from "react";
import MedIcon from "../img/medIcon.svg";
import SearchIcon from "../img/SearchIcon.svg";

const SearchBar = ({ onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(e.target.value);
    }
  };
  return (
    <div>
      <div className="search"></div>
      <img className="MedIcon" src={MedIcon}></img>
      <div className="line"></div>
      <input
        className="searchbar"
        type="text"
        placeholder="  약 이름을 검색해보세요."
        onKeyPress={handleKeyPress}
      />
      <img className="searchIcon" src={SearchIcon}></img>
    </div>
  );
};

export default SearchBar;
