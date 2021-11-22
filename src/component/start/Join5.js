import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerAction } from '../../module/user';
import { ReactComponent as ExpandRight } from '../../source/ExpandRightWhite.svg';
import Header from '../utils/Header';
import '../../style/start.scss';

export default function Join5() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { schoolState, emailState } = useSelector(state => state.user.join);
  const [pwState, setPwState] = useState("");
  const [pwCheckState, setPwCheckState] = useState("");
  const [nameState, setNameState] = useState("");
  const [stdNumState, setStdNumState] = useState("");
  const [phNum1State, setPhNum1State] = useState("");
  const [phNum2State, setPhNum2State] = useState("");
  const [phNum3State, setPhNum3State] = useState("");

  //input 빈칸 체크
  const inputCheck = () => {
    let message = "";
    if (!nameState) {
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
          email: emailState,
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
      <Header title="join" number={5}/>
      <form id="join5">
        <label className="inputLabel" id="pw" htmlFor="pw">비밀번호</label>
        <input name="pw" type="password" onChange={(e) => setPwState(e.target.value)}/>

        <label className="inputLabel" id="pwCheck" htmlFor="pwCheck">비밀번호 확인</label>
        <input name="pwCheck" type="password" onChange={(e) => setPwCheckState(e.target.value)}/>
      
        <label className="inputLabel" id="name" htmlFor="name">이름</label>
        <input name="name" type="text" onChange={(e) => setNameState(e.target.value)}/>

        <label className="inputLabel" id="stdNum" htmlFor="stdNum">학번</label>
        <input name="stdNum" type="text" onChange={(e) => setStdNumState(e.target.value)}/>

        <label className="inputLabel" id="phNum" htmlFor="phNum">연락처</label>
        <input name="phNum" type="number" pattern="\d*" 
          onChange={(e) => setPhNum1State(e.target.value)}
        />
        <input type="number" pattern="\d*"
          onChange={(e) => setPhNum2State(e.target.value)}
        />
        <input type="number" pattern="\d*" 
          onChange={(e) => setPhNum3State(e.target.value)}
        />
      
        <div className="btn" id="btnBlue" onClick={submit}>
          <span className="btnMsg">완료 후 시작하기</span>
          <ExpandRight/>
        </div>
      </form>
    </div>
  );
};