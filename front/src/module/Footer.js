import React from "react";
const Footer = ({ footerTop }) => {
  return (
    <div className="Footer" style={{ top: footerTop }}>
      <div className="Footer_Text">
        이용약관 | 개인정보처리방침 | 책임의 한계와 법적고지 | 회원정보 고객센터
        <br />
        AllerGenie Copyright @ ALLERGENIE Corp. All Rights Reserved
      </div>
    </div>
  );
};
export default Footer;
