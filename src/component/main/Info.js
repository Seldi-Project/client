import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as FloatMask } from '../../source/FloatMask.svg';
import { ReactComponent as QrIcon } from '../../source/QrIcon.svg';
import '../../style/main.scss';
import InfoBottom from '../utils/InfoBottom';
import InfoHeader from '../utils/InfoHeader';
import TimeSelect from '../utils/TimeSelect';

export default function Info({ DiagnosisState }) {
  const navigate = useNavigate();

  return (
    <div className="component" id="infoComponent">

      <div id="infoWrap">
        <FloatMask id="maskIcon"/>
        <InfoHeader logoState={false}/>

        {DiagnosisState ?
          <div>
            <p id="infoMessage1">오늘 자가진단 완료!</p>
            <p id="infoMessage2">교내 출입 QR 코드가 발급되었습니다.</p>
            <span id="qrWrap" onClick={() => navigate(`/qrcode`)}>
              <QrIcon id="qrIcon"/>
            </span>
          </div>
        :
          <div>
            <p id="infoMessage1">오늘 자가진단 하셨나요?</p>
            <p id="infoMessage2">자가진단하고, QR 코드를 발급 받으세요!</p>
          </div>
        }
      </div>
        
      {DiagnosisState ?
        <TimeSelect/>
      :
        <InfoBottom message="자가진단 완료하고, 실시간 교내 현황을 한눈에 확인하세요!"/>
      }

    </div>
  );
};