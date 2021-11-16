import * as React from 'react';
import QrModule from 'qrcode.react';
import InfoHeader from '../utils/InfoHeader';
import '../../style/qr.scss';
import { ReactComponent as QrCheckIcon } from '../../source/QrCheckIcon.svg';

export default function QrItem() {
  const name = "신소정";  //test
  const stdNum = "2018100956";  //test
  const diInfo = "간편 자가진단";  //test
  const today = new Date();
  const qrValue = `${stdNum},${today.getFullYear()}${today.getMonth()+1}${today.getDate()}`;  //test 학번, 날짜

  return (
    <div className="component" id="qrItemComponent">
      <InfoHeader logoState={true}/>
      <div id="qrItemWrap">
        <p id="title">오늘 자가진단 완료!</p>
        <p id="subTitle">교내 출입 QR 코드가 발급되었습니다.</p>
        <QrModule
        id="qr-gen"
        value={qrValue}
        size={230}
        level={"H"}
        includeMargin={true}
        />
        <div id="qrBottomInfo">
          <p>이름: {name}</p>
          <p>학번: {stdNum}</p>
        </div>
        <div id="diInfo">
          <QrCheckIcon/>
          <p>{diInfo}</p>
        </div>
      </div>
    </div>
  );
};