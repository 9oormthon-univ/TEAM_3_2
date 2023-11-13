import React, { useState, useEffect } from "react";

const wholeTextArray = [
  "항 히스타민제",
  "항 우울제",
  "항 염증제",
  "항 알레르기제",
  "신경 안정제",
  "안정제",
];

const AutoComplete = ({ inputValue, onItemSelect }) => {
  const [dropDownList, setDropDownList] = useState(wholeTextArray);

  useEffect(() => {
    if (inputValue === "") {
      setDropDownList([]);
    } else {
      const choosenTextList = wholeTextArray.filter((textItem) =>
        textItem.includes(inputValue)
      );
      setDropDownList(choosenTextList);
    }
  }, [inputValue]);
  const handleItemClick = (item) => {
    onItemSelect(item);
  };

  return (
    <div className="CompletionContainer">
      <div className="autocomplete-list">
        <div className="auto-lists">
          {dropDownList.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
