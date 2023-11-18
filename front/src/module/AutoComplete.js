import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const AutoComplete = ({ inputValue, onItemSelect }) => {
  const [dropDownList, setDropDownList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const accessToken = localStorage.getItem("accessToken");
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  axios.defaults.headers.common["Content-Type"] = "application/json";

  useEffect(() => {
    if (inputValue === "") {
      setDropDownList([]);
    } else {
      setLoading(true);
      axios
        .get(
          "https://port-0-team-3-3szcb0g2blp12i5o9.sel5.cloudtype.app/api/v1/home",
          {
            params: {
              search: inputValue,
              pageNo: parseInt(page),
            },
          }
        )
        .then((response) => {
          const data = response.data;
          if (Array.isArray(data)) {
            setDropDownList(data);
          } else if (typeof data === "object") {
            setDropDownList([data]);
          } else {
            console.error("Invalid data format:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    setPage(1);
  }, [inputValue, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !loading &&
        loaderRef.current &&
        window.innerHeight + window.scrollY >= loaderRef.current.offsetTop
      ) {
        setLoading(true);
        axios
          .get(
            "https://port-0-team-3-3szcb0g2blp12i5o9.sel5.cloudtype.app/api/v1/home",
            {
              params: {
                search: inputValue,
                pageNo: parseInt(page),
              },
            }
          )
          .then((response) => {
            const newData = Array.isArray(response.data) ? response.data : [];
            setDropDownList((prevList) => [...prevList, ...newData]);
            setPage((prevPage) => prevPage + 1);
          })
          .catch((error) => {
            console.error("Error fetching more data:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inputValue, page, loading]);

  const handleItemClick = (item) => {
    onItemSelect(item.약이름);
  };

  return (
    <div className="CompletionContainer" style={{ maxHeight: "300px" }}>
      <div className="autocomplete-list">
        <div className="auto-lists">
          {dropDownList.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item.약이름}
            </li>
          ))}
          {loading && <div>Loading...</div>}
          <div ref={loaderRef}></div>
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
