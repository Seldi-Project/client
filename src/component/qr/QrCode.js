import * as React from 'react';
import '../../style/qr.scss';
import Header from '../utils/Header';
import { ReactComponent as ExpandRightWhite } from '../../source/ExpandRightWhite.svg';
import QrItem from './QrItem';

export default function QrCode() {

  return (
    <div className="component" id="qrCodeComponent">
      <Header title="QR 코드"/>
      <QrItem/>
      <div className="btn" id="btnBlue">
        <span className="btnMsg" id="goDetailBtnMsg">정밀 자가진단 하러가기</span>
        <ExpandRightWhite/>
      </div>
    </div>
  );
};