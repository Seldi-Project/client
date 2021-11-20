import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { school } from '../utils/Reusable';
import { sendMailAction, verifyAction, registerAction } from '../../module/user';
import '../../style/start.scss';

export default function Join() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [schoolState, setSchoolState] = useState({ collegeId: "학교를 선택해주세요.", mail: "학교를 선택해주세요.", collegeName: "학교를 선택해주세요."});
  const [emailState, setEmailState] = useState("");
  const [authCodeState, setAuthCodeState] = useState("");
  const [pwState, setPwState] = useState("");
  const [pwCheckState, setPwCheckState] = useState("");
  const [nameState, setNameState] = useState("");
  const [stdNumState, setStdNumState] = useState("");
  const [phNum1State, setPhNum1State] = useState("");
  const [phNum2State, setPhNum2State] = useState("");
  const [phNum3State, setPhNum3State] = useState("");

  const { mailState, verifyState } = useSelector(state => state.user.join);

  //메일 전송
  const sendMail = () => {
    if (schoolState.collegeId==="학교를 선택해주세요.") {
      return alert("학교를 선택해주세요.");
    }
    dispatch(
      sendMailAction({
        email: emailState+"@"+schoolState.mail
      })
    );
  }

  //메일 인증
  const authMail = () => {
    dispatch(
      verifyAction({
        email: emailState+"@"+schoolState.mail,
        code: authCodeState
      })
    )
  }

  //input 빈칸 체크
  const inputCheck = () => {
    let message = "";
    if (schoolState.code==="학교를 선택해주세요.") {
      message = "학교를 선택해주세요.";
    } else if (!verifyState) {
      message = "메일 인증을 완료해주세요.";
    } else if (!nameState) {
      message = "이름을 입력해주세요.";
    } else if (pwState!==pwCheckState) {
      message = "비밀번호 확인이 일치하지 않습니다.";
    } else if (!stdNumState) {
      message = "학번을 입력해주세요.";
    } else if (!phNum1State||!phNum2State||!phNum3State||phNum1State.length>3||phNum2State.length>4||phNum3State.length>4) {
      message = "연락처를 정확히 입력해주세요."; 
    } else {
      return true;
    }
    return alert(message);
  }

  //회원가입
  const submit = async() => {
    if (inputCheck()) {
      const res = await dispatch(
        registerAction({
          collegeId: schoolState.collegeId,
          confirmPw: pwCheckState,
          email: emailState+"@"+schoolState.mail,
          name: nameState,
          password: pwState,
          phoneNum: phNum1State+phNum2State+phNum3State,
          studentNum: stdNumState
        })
      )
      if (res.result) {
        navigate("/login");
      }
    }
  }

  return (
    <div className="component" id="joinComponent">
      <form>
        <label htmlFor="school">학교</label>
        <select name="school" onChange={(e) => setSchoolState(school[e.target.value])}>
          {school.map(({ collegeName, collegeId }, index) => {
            return <option key={collegeId} value={index}>{collegeName}</option>;
          })}
        </select>

        <label htmlFor="email">이메일</label>
        <input name="email" type="text" onChange={(e) => setEmailState(e.target.value)} readOnly={mailState}/>@{schoolState.mail}
        {mailState ? <div id="done">완료</div> : <div onClick={() => sendMail()}>전송</div>}

        <label htmlFor="authCode">인증코드</label>
        <input name="authCode" type="text" onChange={(e) => setAuthCodeState(e.target.value)} readOnly={verifyState}/>
        {verifyState ? <div id="done">완료</div> : <div onClick={() => authMail()}>확인</div>}

        <label htmlFor="pw">비밀번호</label>
        <input name="pw" type="password" onChange={(e) => setPwState(e.target.value)}/>

        <label htmlFor="pwCheck">비밀번호 확인</label>
        <input name="pwCheck" type="password" onChange={(e) => setPwCheckState(e.target.value)}/>
      
        <label htmlFor="name">이름</label>
        <input name="name" type="text" onChange={(e) => setNameState(e.target.value)}/>

        <label htmlFor="stdNum">학번</label>
        <input name="stdNum" type="text" onChange={(e) => setStdNumState(e.target.value)}/>

        <label htmlFor="phNum">연락처</label>
        <input name="phNum" type="number" pattern="\d*" 
          onChange={(e) => setPhNum1State(e.target.value)}
        />-
        <input type="number" pattern="\d*"
          onChange={(e) => setPhNum2State(e.target.value)}
        />-
        <input type="number" pattern="\d*" 
          onChange={(e) => setPhNum3State(e.target.value)}
        />
      
        <div onClick={() => submit()}>회원가입</div>
      </form>
    </div>
  );
};