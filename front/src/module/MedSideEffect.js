import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./ModalIngredient";

const MedSideEffect = ({ medicineId }) => {
  const [mediData, setMediData] = useState({
    image: "",
    name: "",
    effect: "",
    caution: "",
  });

  useEffect(() => {
   if (medicineId) {
     axios.get(`/api/v1/home/${medicineId}`)
       .then((response) => {
         const data = response.data;
         setMediData({
           image: data.image,
           name: data.name,
           effect: data.effect,
           caution: data.caution,
         });
       })
       .catch((error) => {
         console.error("Error fetching medicine data:", error);
       });
   } else {
     // Handle the case when medicineName is null
     setMediData({
       image: "",
       name: "",
       effect: "",
       caution: "",
     });
   }
 }, [medicineId]);

 const [modalVisible, setModalVisible] = useState(false);
 const handleImageClick = () => {
   setModalVisible(!modalVisible);
 };
 const closeModal = () => {
   setModalVisible(false);
 };


  return (
    <div className="MyPage-main">
      <section className="Mypage-se">
        <div className="Mypage-se-title">약의 효능</div>
        <div className="Mypage-se-container">
         {mediData.sideEffect}
        </div>
      </section>
      <section className="Mypage-caution">
        <div className="Mypage-se-title">약의 부작용 & 주의사항</div>
        <div className="Mypage-caution-container">
          <div className="Mypage-caution-img" onClick={handleImageClick}>
            <img src={mediData.image}  />
          </div>
          <div className="Mypage-caution-content">
            <div className="Mypage-caution-name">{mediData.name}</div>
            <div className="Mypage-caution-about">{mediData.caution}</div>
          </div>
        </div>
        {modalVisible && (
          <Modal mediName={mediData.name} imageUrl={mediData.image} closeModal={closeModal}  />
        )}
      </section>
    </div>
  );
};

export default MedSideEffect;
