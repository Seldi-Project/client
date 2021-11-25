import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../style/main.scss';
import { ReactComponent as Cert1 } from '../../source/Cert1.svg';
import { ReactComponent as Cert2 } from '../../source/Cert2.svg';

export default function Certification() {
  const { firstVaccination, secondVaccination } = useSelector(state => state.user.user);
  const [certStyle, setSertStyle] = useState("calc(50vw - 150px)");
  //본인인증 추가하기

  //증명서 선택
  const changeSelect = (num) => {
    if (num === 2) {
      setSertStyle("calc(50vw - 50px)");
    } else if (num === 1) {
      setSertStyle("calc(50vw - 150px)")
    }
  }

  return (
    <div className="component" id="certificationComponent">
      <div className="bottomInfoHeader" id="certificationHeader">
        <p id="title">접종 증명서</p>
        <p id="subTitle">코로나 19 관련 백신 접종과 본인인증 증명서가 연동됩니다.</p>
      </div>
      <div id="certifications" style={{"transform":`translateX(${certStyle})`, "transition":"transform 1s"}}>
        <div className="certification" style={{"opacity":`${secondVaccination || 0.4}`}} onClick={() => changeSelect(2)}>
          <Cert2/>
        </div>
        
        <div className="certification" style={{"opacity":`${firstVaccination || 0.4}`}} onClick={() => changeSelect(1)}>
          <Cert1/>
        </div>
      </div>
    </div>
  );
};