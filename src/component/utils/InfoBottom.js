import * as React from 'react';
import { ReactComponent as InfoIcon } from '../../source/InfoIcon.svg';
import '../../style/app.scss';

export default function InfoHeader({ message }) {
  return (
    <div id="bottomInfo">
      <InfoIcon id="bottomInfoIcon"/>
      <p id="bottomInfoMessage">{message}</p>
    </div>
  );
};