import React, { useState } from 'react';
import '../../style/start.scss';

export default function Login() {
  const [emailState, setEmailState] = useState("");
  const [pwState, setPwState] = useState("");

  //로그인
  const login = () => {

  }

  return (
    <div className="component" id="loginComponent">
      <label htmlFor="email">이메일</label>
      <input name="email" type="text" onChange={(e) => setEmailState(e.target.value)}/>

      <label htmlFor="pw">비밀번호</label>
      <input name="pw" type="password" onChange={(e) => setPwState(e.target.value)}/>
    
      <div className="btn" id="btnBlue" onClick={() => login()}>
        <span className="btnMsg">로그인</span>
      </div>
    </div>
  );
};