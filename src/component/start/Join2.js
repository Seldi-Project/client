import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendMailAction, verifyAction, setMailAction } from '../../module/user';
import { ReactComponent as ExpandRight } from '../../source/ExpandRightWhite.svg';
import Header from '../utils/Header';
import '../../style/start.scss';

export default function Join2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { schoolState } = useSelector(state => state.user.join);
  const [emailState, setEmailState] = useState("");
  const [authCodeState, setAuthCodeState] = useState("");

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

  //다음으로
  const next = () => {
    if (!verifyState) {
      return alert("메일 인증을 완료해주세요.");
    }
    dispatch(setMailAction(emailState+"@"+schoolState.mail));
    navigate('/join3');
  }

  //제출 막기
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    };
  }, true);

  return (
    <div className="component" id="joinComponent">
      <Header left={true} title="join" number={2}/>
      <form id="join2">
        <label className="inputLabel" id="emailLabel" htmlFor="school">이메일을 입력해주세요.</label>
        <input id="mailInput" name="email" type="text" onChange={(e) => setEmailState(e.target.value)} readOnly={mailState}/>
        <div id="mailTail">@{schoolState.mail}</div>
        {mailState ? <div className="smallBtn" id="done">완료</div> : <div className="smallBtn" onClick={() => sendMail()}>전송</div>}

        <label className="inputLabel" id="codeLabel" htmlFor="authCode">인증 코드를 입력해주세요.</label>
        <input id="codeInput" name="authCode" type="text" onChange={(e) => setAuthCodeState(e.target.value)} readOnly={verifyState}/>
        {verifyState ? <div className="smallBtn" id="done">완료</div> : <div className="smallBtn" onClick={() => authMail()}>확인</div>}
      
        <div className="btn" id="btnBlue" onClick={() => next()}>
          <span className="btnMsg">다음</span>
          <ExpandRight/>
        </div>
      </form>
    </div>
  );
};