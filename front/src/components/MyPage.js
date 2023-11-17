import React from "react";
import Logo from "../module/Logo";
import Nav from "../module/Nav";
import MyProfile from "../module/MyProfile";
import { useNavigate } from "react-router-dom";
import MedShouldNotTake from "../module/MedShouldNotTake";
import MedSideEffect from "../module/MedSideEffect";
import axios from "axios";

const MyPage = ({ username, onLogout }) => {
  const [email, setEmail] = React.useState(null);
  const [medicineId, setMedicineId] = "";
  const navigate = useNavigate();

  React.useEffect(() => {
    // Fetch the email information
    const fetchEmail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/${username}`
        );

        if (response.status === 200) {
          const userData = response.data;
          setEmail(userData.이메일);
          setMedicineId(userData.medicineId)
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
  return (
    <div>
      <Logo />
      <Nav username={username} onLogout={handleLogout} />
      <MyProfile username={username} email={email} />
      <MedShouldNotTake username={username} />
      <MedSideEffect medicineId={medicineId} />
    </div>
  );
};
export default MyPage;
