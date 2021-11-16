// @flow
import * as React from 'react';
import { today } from './Reusable';
import '../../style/main.scss';

export default function InfoHeader({ logoState }) {
  const school = "한국기술교육대학교";

  return (
    <div className="component" id="infoHeaderComponent">
      <div id="infoHeader">
        <span className="infoHeaderItem" id="infoHeaderLeft">
          {today}
        </span>
        <span className="infoHeaderItem" id="infoHeaderRight">
          {logoState && 
          <span>
            <span id="seldi">Seldi</span>
            <span id="x">X</span>
          </span>
          }
          {school}
        </span>
      </div>
    </div>
  );
};