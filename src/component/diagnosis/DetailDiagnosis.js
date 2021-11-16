import * as React from 'react';
import { useState } from 'react';
import { ReactComponent as ExpandRightWhite } from '../../source/ExpandRightWhite.svg';
import '../../style/diagnosis.scss';

export default function DetailDiagnosis() {
  const [sel1, setSel1] = useState();
  const [sel2, setSel2] = useState();
  const [sel3, setSel3] = useState();
  const [sel4, setSel4] = useState();

  const simpleData = [
    { title: "현재 37.5도 이상이거나, 발열감이 있나요?"},
    { title: "평소 기저질환 외에 아래와 같은 증상이 있나요?", 
    subtitle: "'기침, 가래, 콧물, 호흡곤란, 오한, 근육통, 두통, 인후통, 후각·미각 소실 또는 폐렴",
    subColor: "red"},
    { title: "본인 혹은 동거인이 자가격리자 대상인가요?",
    subtitle: "(동거인 자가격리는 진단 결과가 음성이면 아니요 체크)"},
    { title: "허위답변으로 인한 문제 발생시 처벌을 받을 수 있고 개인정보가 수집/처리/제공되는 것에 동의합니다."}
  ] //마지막 문항 no일 경우 제출 막기

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
    <div className="diagnosisItem" id="detailDiagnosisItem">
      {simpleData.map(({ title, subtitle, subColor }, i) => {
        return (
          <div className="item" id="simpleItem" key={i+1}>
            <p id="title">{i+1}. {title}</p>
            <p id="subtitle" style={{color:subColor}}>{subtitle}</p>
            <table id="radioSet">
              <tbody>
                <tr id="head">
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
                <tr id="body">
                  <td>
                  <input type="radio" id={i+1+"1"} value={1} name={i} style={{display:"none"}} onChange={() => setSelState(i+1, 1)}/>
                  <label htmlFor={i+1+"1"}/>
                  </td>
                  <td>
                  <input type="radio" id={i+1+"2"} value={2} name={i} style={{display:"none"}} onChange={() => setSelState(i+1, 2)}/>
                  <label htmlFor={i+1+"2"}/>
                  </td>
                  <td>
                  <input type="radio" id={i+1+"3"} value={3} name={i} style={{display:"none"}} onChange={() => setSelState(i+1, 3)}/>
                  <label htmlFor={i+1+"3"}/>
                  </td>
                  <td>
                  <input type="radio" id={i+1+"4"} value={4} name={i} style={{display:"none"}} onChange={() => setSelState(i+1, 4)}/>
                  <label htmlFor={i+1+"4"}/>
                  </td>
                  <td>
                  <input type="radio" id={i+1+"5"} value={5} name={i} style={{display:"none"}} onChange={() => setSelState(i+1, 5)}/>
                  <label htmlFor={i+1+"5"}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
      <div className="btn" id="btnBlue" onClick={submit}>
        <span className="btnMsg">제출하기</span>
        <ExpandRightWhite/>
      </div>
    </div>
  );
};