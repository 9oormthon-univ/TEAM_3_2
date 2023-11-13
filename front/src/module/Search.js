import React, { useState, useEffect } from "react";
import MedIcon from "../img/medIcon.svg";
import SearchIcon from "../img/SearchIcon.svg";
import AutoComplete from "./AutoComplete";

const SearchBar = ({ onSearch, value }) => {
  const [inputValue, setInputValue] = useState(value || ""); // Initialize with the value from props
  const [searchCompletionVisible, setSearchCompletionVisible] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
      setSearchCompletionVisible(false);
    }
  };

  const handleInputClick = () => {
    setSearchCompletionVisible(true);
  };

  const handleItemSelect = (selectedItem) => {
    setInputValue(selectedItem);
    setSearchCompletionVisible(false);
  };

  const showDropDownList = () => {
    setSearchCompletionVisible(inputValue !== "");
  };

  useEffect(() => {
    showDropDownList();
  }, [inputValue]);

  return (
    <div>
      <div className="search"></div>
      <img className="MedIcon" src={MedIcon} alt="MedIcon"></img>
      <div className="line"></div>
      <input
        className="searchbar"
        type="text"
        placeholder="  약 이름을 검색해보세요."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        onClick={handleInputClick}
      />
      <img className="searchIcon" src={SearchIcon} alt="SearchIcon"></img>
      {searchCompletionVisible && (
        <AutoComplete inputValue={inputValue} onItemSelect={handleItemSelect} />
      )}
    </div>
  );
};

export default SearchBar;
