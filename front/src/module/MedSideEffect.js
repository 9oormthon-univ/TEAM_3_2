import React, { useState, useEffect } from "react";
import axios from "axios";

const MedSideEffect = ({ medicineId }) => {
   const [mediData, setMediData] = useState({
      image: "",
      name: "",
      effect: "",
      sideEffect: "",
      caution: ""
    });

    useEffect(() => {
      axios.get(`/api/v1/home/${medicineId}`)
        .then(response => {
          const data = response.data;
          setMediData({
            image: data.image,
            name: data.name,
            effect: data.effect,
            sideEffect: data.sideEffect,
            caution: data.caution
          });
        })
        .catch(error => {
          console.error("Error fetching medicine data:", error);
        });
    }, [medicineId]);



  return (
   <div className="MyPage-main">
      <section className="Mypage-se">
      <div className="Mypage-se-title">약의 부작용</div>
      <div className="Mypage-se-container">
         {mediData.sideEffect}
         {/*
         {medicine.sideEffect.map((effect, index) => (
            <div className="Mypage-se-content" key={index}>
            <img src={effect.imageUrl} />
            <div className="Mypage-se-content-title">
               {effect.sideEffectName}
            </div>
            </div>
         ))}
         */}
      </div>
      </section>
      <section className="Mypage-caution">
         <div className="Mypage-se-title">약의 부작용 & 주의사항</div>
         <div className="Mypage-caution-container">
            <div className="Mypage-caution-img">
               <img src={mediData.image} /> 
            </div>
            <div className="Mypage-caution-content">
               <div className="Mypage-caution-name">{mediData.name}</div>
               <div className="Mypage-caution-about">
                  {mediData.caution}
               </div>
            </div>
         </div>
      </section>
   </div>
  );
};

export default MedSideEffect;