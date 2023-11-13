import React, { useState, useEffect } from "react";
import MedIcon from "../img/medIcon.svg";
import SearchIcon from "../img/SearchIcon.svg";
import AutoComplete from "./AutoComplete";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchCompletionVisible, setSearchCompletionVisible] = useState(false);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(e.target.value);
    }
  };
  const handleInputClick = () => {
    setSearchCompletionVisible(true);
  };
  const handleItemSelect = (selectedItem) => {
    // Handle the selected item here, for example, update the input value
    setInputValue(selectedItem);

    // You can also perform other actions here if needed

    // Close the dropdown
    setSearchCompletionVisible(false);
  };
  const showDropDownList = () => {
    if (inputValue === "") {
      setSearchCompletionVisible(false);
    } else {
      setSearchCompletionVisible(true);
    }
  };

  useEffect(() => {
    showDropDownList();
  }, [inputValue]);
  return (
    <div>
      <div className="search"></div>
      <img className="MedIcon" src={MedIcon}></img>
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
      <img className="searchIcon" src={SearchIcon}></img>
      {searchCompletionVisible && (
        <AutoComplete inputValue={inputValue} onItemSelect={handleItemSelect} />
      )}
    </div>
  );
};

export default SearchBar;
