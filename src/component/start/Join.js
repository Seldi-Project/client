import React, { useState } from 'react';
import { school } from '../utils/Reusable';
import '../../style/start.scss';

export default function Join() {
  const [schoolState, setSchoolState] = useState({ code: "학교를 선택해주세요.", mail: "학교를 선택해주세요.", name: "학교를 선택해주세요."});
  const [emailState, setEmailState] = useState("");
  const [authCodeState, setAuthCodeState] = useState("");
  const [pwState, setPwState] = useState("");
  const [pwCheckState, setPwCheckState] = useState("");
  const [nameState, setNameState] = useState("");
  const [stdNumState, setStdNumState] = useState("");
  const [phNum1State, setPhNum1State] = useState("");
  const [phNum2State, setPhNum2State] = useState("");
  const [phNum3State, setPhNum3State] = useState("");

  //메일 전송
  const sendMail = () => {

  }

  //메일 인증
  const authMail = () => {

  }

  return (
    <div className="component" id="joinComponent">
      <form>
        <label htmlFor="school">학교</label>
        <select name="school" onChange={(e) => setSchoolState(school[e.target.value])}>
          {school.map(({ name, code }, index) => {
            return <option key={code} value={index}>{name}</option>;
          })}
        </select>

        <label htmlFor="email">이메일</label>
        <input name="email" type="text" onChange={(e) => setEmailState(e.target.value)}/>@{schoolState.mail}
        <div onClick={() => sendMail()}>전송</div>

        <label htmlFor="authCode">인증코드</label>
        <input name="authCode" type="text" onChange={(e) => setAuthCodeState(e.target.value)}/>
        <div onClick={() => authMail()}>확인</div>

        <label htmlFor="pw">비밀번호</label>
        <input name="pw" type="password" onChange={(e) => setPwState(e.target.value)}/>

        <label htmlFor="pwCheck">비밀번호 확인</label>
        <input name="pwCheck" type="password" onChange={(e) => setPwCheckState(e.target.value)}/>
      
        <label htmlFor="name">이름</label>
        <input name="name" type="text" onChange={(e) => setNameState(e.target.value)}/>

        <label htmlFor="stdNum">학번</label>
        <input name="stdNum" type="text" onChange={(e) => setStdNumState(e.target.value)}/>

        <label htmlFor="phNum">연락처</label>
        <input name="phNum" type="text" onChange={(e) => setPhNum1State(e.target.value)}/>
        -<input type="text" onChange={(e) => setPhNum2State(e.target.value)}/>
        -<input type="text" onChange={(e) => setPhNum3State(e.target.value)}/>
      </form>
    </div>
  );
};