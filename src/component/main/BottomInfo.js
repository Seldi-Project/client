import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Certification from './Certification';
import ConfirmedInfo from './ConfirmedInfo';
import InfoBottom from '../utils/InfoBottom';
import '../../style/main.scss';
import { ReactComponent as ExpandRightGray } from '../../source/ExpandRightGray.svg';

export default function BottomInfo({ DiagnosisState }) {
  const navigate = useNavigate();

  const LiveStdNum = "1589"  //test
  const LiveSymNum = "46"  //test

  const [scrollState, setScrollState] = useState(false);
  const [bottom, setBottom] = useState("-35%");

  //스크롤
  const scroll = () => {
    if (scrollState) {
      setBottom("0px");
      setScrollState(false);
    } else {
      setBottom("-35%");
      setScrollState(true);
    }
  }

  return (
    <div className="component" id="bottomInfoComponent" style={{position: "fixed", bottom: bottom, transition: "bottom 1s"}}>

      {DiagnosisState &&
      <div id="liveInfoWrap" onClick={scroll}>
        <table id="liveInfo">
          <tbody>
            <tr id="tr1">
              <td>실시간 교내 인원</td>
              <td rowSpan="2">|</td>
              <td>실시간 유증상자</td>
              <td rowSpan="2" onClick={() => navigate("/live")}>
                <ExpandRightGray/>
              </td>
            </tr>
            <tr id="tr2">
              <td id="liveStd">{LiveStdNum}</td>
              <td id="liveSym">{LiveSymNum}</td>
            </tr>
          </tbody>
        </table>

        <InfoBottom message="정밀 자가진단시, 더 자세한 상태 확인이 가능해요!"/>
      </div>
      }
      
      <Certification/>
      <ConfirmedInfo/>
    </div>
  );
};