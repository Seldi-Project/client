import * as React from 'react';
import { useState } from 'react';
import { ReactComponent as ExpandRight } from '../../source/ExpandRightWhite.svg';
import { ReactComponent as State0 } from '../../source/State0.svg';
import { ReactComponent as State1 } from '../../source/State1.svg';
import { ReactComponent as State2 } from '../../source/State2.svg';
import { ReactComponent as State3 } from '../../source/State3.svg';
import { diagnosisData } from '../utils/Reusable';  //마지막 문항 no일 경우 제출 막기
import '../../style/diagnosis.scss';

export default function DetailDiagnosis() {
  const [sel1, setSel1] = useState();
  const [sel2, setSel2] = useState();
  const [sel3, setSel3] = useState();
  const [sel4, setSel4] = useState();
  const [sel5, setSel5] = useState();

  //State
  const setSelState = (i, value) => {
    if (i===1) {
      setSel1(value);
    } else if (i===2) {
      setSel2(value);
    } else if (i===3) {
      setSel3(value);
    } else if (i===4) {
      setSel4(value);
    } else {
      setSel5(value);
    }
  }

  const submit = () => {
    //제출
    console.log(sel1, sel2, sel3, sel4, sel5);
  }

  return (
    <div className="diagnosisItem" id="detailDiagnosisItem">
      {diagnosisData.map(({ title, subtitle, subColor }, i) => {
        return (
          <div className="item" id="simpleItem" key={i+1}>
            <p id="title">{i+1}. {title}</p>
            <p id="subtitle" style={{color:subColor}}>{subtitle}</p>
            <div id="radioSet">
              <input type="radio" id={i+1+"no"} value={0} name={i+1} style={{display:"none"}} onChange={() => setSelState(i+1, false)}/>
              <label htmlFor={i+1+"no"}>아니요 (NO)</label>
              <input type="radio" id={i+1+"yes"} value={1} name={i+1} style={{display:"none"}} onChange={() => setSelState(i+1, true)}/>
              <label htmlFor={i+1+"yes"}>예 (YES)</label>
            </div>
          </div>
        );
      })}
      <div className="item" id="detailItem" key={5}>
        <p id="title">{5}. 본인의 상태를 체크하고, 내용을 입력해주세요.</p>
        <table id="detailRadioSet">
          <tbody>
            <tr>
              <td>
                <input type="radio" className="state" id={"radio"+5+"zero"} value={0} name={5} onChange={() => setSelState(5, 0)}/>
                <label htmlFor={"radio"+5+"zero"}><State0/><br/>좋음</label>
              </td>
              <td>
                <input type="radio" className="state" id={"radio"+5+"one"} value={1} name={5} onChange={() => setSelState(5, 1)}/>
                <label htmlFor={"radio"+5+"one"}><State1/><br/>보통</label>
              </td>
              <td>
                <input type="radio" className="state" id={"radio"+5+"two"} value={2} name={5} onChange={() => setSelState(5, 2)}/>
                <label htmlFor={"radio"+5+"two"}><State2/><br/>나쁨</label>
              </td>
              <td>
                <input type="radio" className="state" id={"radio"+5+"three"} value={3} name={5} onChange={() => setSelState(5, 3)}/>
                <label htmlFor={"radio"+5+"three"}><State3/><br/>심각</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <textarea 
        id="descript"
        placeholder="본인의 상태나 증상에 대해 간단히 기술해주세요.
        (실시간 유증상 정보에 활용됩니다.)"
      >
      </textarea>
      <div className="btn" id="btnBlue" onClick={submit}>
        <span className="btnMsg">제출하기</span>
        <ExpandRight/>
      </div>
    </div>
  );
};