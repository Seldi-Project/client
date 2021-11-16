import * as React from 'react';
import Header from '../utils/Header';
import { today } from '../utils/Reusable';
import TimeSelect from '../utils/TimeSelect';
import '../../style/live.scss';
import LiveItem from './LiveItem';

export default function Live() {
  const name = "소정";  //test
  const myData = { desc: "두통이 살짝 있어요.", state: "bad" }
  const data10 = [  //test
    { desc: "잔 기침이 조금 있음.", state: "soso", dist: 10 },
    { desc: "비염이 있긴 한데 콧물이 나와요.", state: "bad", dist: 10 }
  ]
  const data50 = [  //test
    { desc: "열이 조금 있고, 다른 질환은 없음", state: "soso", dist: 50 },
    { desc: "감기걸림, 병원 이미 다녀옴", state: "bad", dist: 50 },
    { desc: "검사 후 기숙사에서 자가격리중..", state: "sobad", dist: 50 },
    { desc: "검사 후 기숙사에서 자가격리중..", state: "sobad", dist: 50 },
    { desc: "검사 후 기숙사에서 자가격리중..", state: "sobad", dist: 50 },
    { desc: "검사 후 기숙사에서 자가격리중..", state: "sobad", dist: 50 },
    { desc: "검사 후 기숙사에서 자가격리중..", state: "sobad", dist: 50 },
    { desc: "검사 후 기숙사에서 자가격리중..", state: "sobad", dist: 50 },
    { desc: "검사 후 기숙사에서 자가격리중..", state: "sobad", dist: 50 }
  ]
  
  return (
    <div className="component" id="liveComponent">
      <Header title="실시간 유증상자"/>
      <div id="fixedTop">
        <p className="subtitle">유증상이 있고, 정밀 자가진단을 한 사람들의 증상 내용이에요.</p>
        <p className="subtitle">{name}님과 실시간 거리순으로 보여주고, 매일 자동으로 갱신해요!</p>
        
        <div id="liveHeader">
          <span id="date">{today}</span>
          <TimeSelect/>
        </div>
      </div>
      
      <div id="liveItems">
        <div id="myItem">
          <LiveItem desc={myData.desc} state={myData.state}/>
        </div>

        <div className="liveItem">
          <table className="liveTitleTable">
            <tbody>
              <tr>
                <td id="dist">10M 이내</td>
                <td id="num">{data10.length}명</td>
              </tr>
            </tbody>
          </table>
          {data10.map(({ desc, state }, i) => {
            return <LiveItem desc={desc} state={state} index={i} key={i}/>;
          })}
        </div>

        <div className="liveItem">
          <table className="liveTitleTable">
            <tbody>
              <tr>
                <td id="dist">50M 이내</td>
                <td id="num">{data50.length}명</td>
              </tr>
            </tbody>
          </table>
          {data50.map(({ desc, state }, i) => {
            return <LiveItem desc={desc} state={state} index={i+data10.length} key={i+data10.length}/>;
          })}
        </div>
      </div>
    </div>
  );
};