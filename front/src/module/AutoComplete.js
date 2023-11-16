import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const AutoComplete = ({ inputValue, onItemSelect }) => {
  const [dropDownList, setDropDownList] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    if (inputValue === "") {
      setDropDownList([]);
    } else {
      axios
        .get(`http://localhost:8000/auto?query=${inputValue}`)
        .then((response) => {
          const data = response.data;
          //드롭다운 기능
          if (Array.isArray(data)) {
            setDropDownList(data);
            console.log(data);
          } else if (typeof data === "object") {
            setDropDownList([data]);
          } else {
            console.error("Invalid data format:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    setPage(1);
  }, [inputValue]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        loaderRef.current &&
        window.innerHeight + window.scrollY >= loaderRef.current.offsetTop
      ) {
        axios
          .get(
            `http://localhost:8000/auto?query=${inputValue}&page=${page + 1}`
          )
          .then((response) => {
            const newData = Array.isArray(response.data) ? response.data : [];
            setDropDownList((prevList) => [...prevList, ...newData]);
            setPage((prevPage) => prevPage + 1);
          })
          .catch((error) => {
            console.error("Error fetching more data:", error);
          });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inputValue, page]);

  const handleItemClick = (item) => {
    onItemSelect(item.약이름);
  };

  return (
    <div
      className="CompletionContainer"
      style={{
        overflowY: dropDownList.length > 5 ? "scroll" : "hidden",
        maxHeight: "300px",
      }}
    >
      <div className="autocomplete-list">
        <div className="auto-lists">
          {dropDownList.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item.약이름}
            </li>
          ))}
          <div ref={loaderRef}></div>
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
