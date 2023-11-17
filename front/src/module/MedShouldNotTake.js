import React, { useState, useEffect } from "react";
import axios from "axios";

const MedShouldNotTake = ({ username }) => {
  const [medicationInfo, setMedicationInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to retrieve medication information for the given username
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

  return (
    <div className="MedShouldNotTakeContainer">
      <h1>먹으면 안되는 약</h1>
      <div className="Med">
        {medicationInfo.map((med, index) => (
          <div className="addMedCircle" key={index}>
            <p>{med.약정보}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedShouldNotTake;
