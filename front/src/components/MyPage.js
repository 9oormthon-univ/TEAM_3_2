import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../module/Logo";
import Nav from "../module/Nav";
import MyProfile from "../module/MyProfile";
import MedShouldNotTake from "../module/MedShouldNotTake";
import MedSideEffect from "../module/MedSideEffect";
import { useNavigate } from "react-router-dom";
import Footer from "../module/Footer";

const MyPage = ({ username, onLogout }) => {
  const [email, setEmail] = useState(null);
  const [selectedMedication, setSelectedMedication] = useState(null); // 선택된 약 이름
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/${username}`
        );

        if (response.status === 200) {
          const userData = response.data;
          setEmail(userData.이메일);
        } else {
          console.error("Error during email retrieval:", response.statusText);
        }
      } catch (error) {
        console.error("Error during email retrieval:", error.message);
      }
    };

    fetchEmail();
  }, [username]);

  const handleLogout = () => {
    // 로그아웃 로직
    onLogout();
    // 홈페이지로 리다이렉트 또는 다른 동작을 수행할 수 있습니다.
    navigate("/login");
  };

  const handleMedicationSelect = (medication) => { // 선택된 약 이름 저장
    setSelectedMedication(medication);
  };

  return (
    <div>
      <Logo />
      <Nav username={username} onLogout={handleLogout} />
      <MyProfile username={username} email={email} />
      <MedShouldNotTake username={username} medicineName={handleMedicationSelect}/>
      <MedSideEffect medicineId={selectedMedication} />
      <Footer footerTop={"1500px"} />
    </div>
  );
};

export default MyPage;