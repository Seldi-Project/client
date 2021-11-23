import * as React from 'react';
import { useState } from 'react';
import { ReactComponent as ExpandRight } from '../../source/ExpandRight.svg';
import { diagnosisData } from '../utils/Reusable';  //마지막 문항 no일 경우 제출 막기
import '../../style/diagnosis.scss';

export default function SimpleDiagnosis() {
  const [sel1, setSel1] = useState();
  const [sel2, setSel2] = useState();
  const [sel3, setSel3] = useState();
  const [sel4, setSel4] = useState();

  //State
  const setSelState = (i, value) => {
    if (i===1) {
      setSel1(value);
    } else if (i===2) {
      setSel2(value);
    } else if (i===3) {
      setSel3(value);
    } else {
      setSel4(value);
    }
  }

  const submit = () => {
    //제출
    console.log(sel1, sel2, sel3, sel4);
  }

  return (
    <div className="diagnosisItem" id="simpleDiagnosisItem">
      {diagnosisData.map(({ title, subtitle, subColor }, i) => {
        return (
          <div className="item" id="simpleItem" key={i+1}>
            <p id="title">{i+1}. {title}</p>
            <p id="subtitle" style={{color:subColor}}>{subtitle}</p>
            <div id="radioSet">
              <input type="radio" className="radio" id={i+1+"no"} value={0} name={i+1} style={{display:"none"}} onChange={() => setSelState(i+1, false)}/>
              <label htmlFor={i+1+"no"}>아니요 (NO)</label>
              <input type="radio" className="radio" id={i+1+"yes"} value={1} name={i+1} style={{display:"none"}} onChange={() => setSelState(i+1, true)}/>
              <label htmlFor={i+1+"yes"}>예 (YES)</label>
            </div>
          </div>
        );
      })}
      <div className="btn" id="btnBlue" onClick={submit}>
        <span className="btnMsg">제출하기</span>
        <ExpandRight/>
      </div>
    </div>
  );
};