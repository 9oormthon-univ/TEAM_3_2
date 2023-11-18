import React from 'react';

const Modal = ({ mediName, imageUrl, closeModal }) => {
  return (
    <div className="Modal">
      <div className="Modal-box">
        <span className="Modal-close" onClick={closeModal}>
          &times;
        </span>
        <div className="Modal-medName">{mediName}</div>
        <div className="Modal-img" >
         <img src={imageUrl} className="" />
         </div>
        <div className="Modal-pre">성분 표기 서비스가 준비중입니다!</div>
      </div>
    </div>
  );
};

export default Modal;
