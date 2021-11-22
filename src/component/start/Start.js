import * as React from 'react';
import { useNavigate } from 'react-router';
import '../../style/start.scss';
import { ReactComponent as Logo } from '../../source/Logo.svg';
import { ReactComponent as ExpandRight } from '../../source/ExpandRight.svg';

export default function Start() {
  const navigate = useNavigate();

  return (
    <div className="component" id="startComponent">

      <div id="logoDiv">
        <Logo/>
        <p id="startTitle">Seldi</p>
      </div>

      <div id="startContent">
        <p id="startContent1">환영합니다!</p>
        <p id="startContent2">안전한 학교생활, 셀디로 시작해보세요.</p>
      </div>

      <div className="btn" id="btnWhite" onClick={() => navigate("/login")}>
        <span className="btnMsg">로그인</span>
        <ExpandRight/>
      </div>

      <div className="btn" id="btnWhite" onClick={() => navigate("/join1")}>
        <span className="btnMsg">회원가입</span>
        <ExpandRight/>
      </div>

    </div>
  );
};