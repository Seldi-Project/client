// @flow
import * as React from 'react';
import '../../style/start.scss';
import { ReactComponent as Logo } from '../../source/Logo.svg';
import { ReactComponent as ExpandRight } from '../../source/ExpandRight.svg';

export default function Start() {
  return (
    <div className="component" id="startComponent">

      <div id="startLogoDiv">
        <Logo/>
        <p id="startTitle">Seldi</p>
      </div>

      <div id="startContent">
        <p id="startContent1">환영합니다!</p>
        <p id="startContent2">안전한 학교생활, 셀디로 시작해보세요.</p>
      </div>

      <div className="btn" id="btnWhite">
        <span className="btnMsg">학교 선택 후 시작하기</span>
        <ExpandRight/>
      </div>

    </div>
  );
};