// @flow
import * as React from 'react';
import { useState } from 'react';
import Header from '../utils/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SimpleDiagnosis from './SimpleDiagnosis';
import DetailDiagnosis from './DetailDiagnosis';
import InfoBottom from '../utils/InfoBottom';
import '../../style/diagnosis.scss';

export default function Diagnosis() {
  const navigate = useNavigate();

  const [selection, setSelection] = useState("simple");

  const changeType = (type) => {
    navigate(`/diagnosis/${type}`)
    setSelection(type);
  }

  return (
    <div className="component" id="diagnosisComponent">
      <Header title="자가진단"/>
      <div id="diagnosisTop">
        <div id="selectDiagnosis">
          <span className="selection" id={selection==="simple"?"selected":"notSelected"} onClick={() => changeType("simple")}>간편</span>
          <span className="selection" id={selection==="detail"?"selected":"notSelected"} onClick={() => changeType("detail")}>정밀</span>
        </div>
        <InfoBottom message="정밀 자가진단시, 더 자세한 현황과 유증상 내역을 알 수 있어요!"/>
      </div>

      <div className="itemWrap" id="diagnosisItemWrap">
        <Routes>
          <Route path="/simple" element={<SimpleDiagnosis/>}/>
          <Route path="/detail" element={<DetailDiagnosis/>}/>
        </Routes>
      </div>
    </div>
  );
};