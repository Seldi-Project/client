import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../source/Logo.svg';
import Header from '../utils/Header';
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
      <Header left={true} title="로그인"/>
      <div id="logoDiv">
        <Logo/>
        <p id="startTitle">Seldi</p>
      </div>

      <form>
        <input name="email" type="text" placeholder="이메일" onChange={(e) => setEmailState(e.target.value)}/>

        <input name="pw" type="password" placeholder="패스워드" onChange={(e) => setPwState(e.target.value)}/>
      </form>

      <div className="btn" id="btnBlue" onClick={login}>
        <span className="btnMsg">로그인</span>
      </div>
    </div>
  );
};