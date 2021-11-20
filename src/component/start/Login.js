import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction, getProfileAction } from '../../module/user';
import '../../style/start.scss';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailState, setEmailState] = useState("");
  const [pwState, setPwState] = useState("");

  //로그인
  const login = async() => {
    if (!emailState || !pwState) {
      return alert("이메일과 비밀번호를 모두 입력해주세요.");
    }
    const res = await dispatch(
      loginAction({
        email: emailState,
        password: pwState
      })
    )
    if (res.result) {
      sessionStorage.setItem('token', res.value.jwtToken);
      await dispatch(getProfileAction());
      return navigate("/main");
    }
  }

  return (
    <div className="component" id="loginComponent">
      <label htmlFor="email">이메일</label>
      <input name="email" type="text" onChange={(e) => setEmailState(e.target.value)}/>

      <label htmlFor="pw">비밀번호</label>
      <input name="pw" type="password" onChange={(e) => setPwState(e.target.value)}/>
    
      <div className="btn" id="btnBlue" onClick={login}>
        <span className="btnMsg">로그인</span>
      </div>
    </div>
  );
};