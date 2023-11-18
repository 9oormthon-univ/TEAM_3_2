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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const nickname = username;
  const accessToken = localStorage.getItem("accessToken");
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  axios.defaults.headers.common["Content-Type"] = "application/json";
  console.log(accessToken);
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await axios.get(
          `https://port-0-team-3-3szcb0g2blp12i5o9.sel5.cloudtype.app/api/v1/mypage`
        );

        if (response.status === 200) {
          const userData = response.data;
          setEmail(userData.email);
        } else {
          console.error("Error during email retrieval:", response.statusText);
        }
      } catch (error) {
        console.error("Error during email retrieval:", error.message);
      } finally {
        setLoading(false);
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

  const handleMedicationSelect = (medication) => {
    // 선택된 약 이름 저장
    setSelectedMedication(medication);
  };

  return (
    <div>
      <Logo />
      <Nav username={username} onLogout={handleLogout} />
      <MyProfile username={username} email={email} />
      <MedShouldNotTake
        username={username}
        medicineName={handleMedicationSelect}
      />
      <MedSideEffect medicineId={selectedMedication} />
      <Footer footerTop={"1500px"} />
    </div>
  );
};

export default MyPage;
