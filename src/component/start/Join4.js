import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Down } from '../../source/Down.svg';
import { ReactComponent as ExpandRight } from '../../source/ExpandRightWhite.svg';
import Header from '../utils/Header';
import '../../style/start.scss';

export default function Join3() {
  const navigate = useNavigate();

  const [all, setAll] = useState([]);


  //체크박스 핸들러
  const changeHandler = (checked, id) => {
    if (checked) {
      setAll([...all, id]);
    } else {
      // 체크 해제
      setAll(all.filter((el) => el !== id));
    }
  }
  const checkAll = () => {
    if (!all.includes('1')||!all.includes('2')||!all.includes('3')) {
      setAll(['1','2','3']);
    } else {
      setAll([]);
    }
  }

  //다음으로
  const next = () => {
    if (!all.includes('1')||!all.includes('2')||!all.includes('3')) {
      return alert("필수 약관을 동의해주세요.");
    }
    navigate('/join5');
  }

  //제출 막기
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    };
  }, true);

  return (
    <div className="component" id="joinComponent">
      <Header title="join" number={4}/>
      <form id="join4">
        <label className="inputLabel" id="accessLabel" htmlFor="accessList">약관 동의</label>
        <table id="all">
          <tbody>
            <tr>
              <td id="title">접근 권한 전체 허용</td>
              <td id="check">
                <input type="checkbox" id="accessAll" name="accessAll" value={'0'}
                onChange={(e) => checkAll()}
                checked={all.includes('1')&&all.includes('2')&&all.includes('3') ? true : false}/>
                <label htmlFor="accessAll">　　</label>
              </td>
            </tr>
          </tbody>
        </table>
        <table id="sub">
          <tbody>
            <tr>
              <td><Down/></td>
              <td id="title">이용 약관 동의(필수)</td>
              <td id="check">
                <input type="checkbox" id="access1" name="access1" value={'1'}
                onChange={(e) => changeHandler(e.target.checked, '1')}
                checked={all.includes('1') ? true : false}/>
                <label htmlFor="access1">　　</label>
              </td>
            </tr>
            <tr>
              <td><Down/></td>
              <td id="title">개인정보 수집 및 이용동의(필수)</td>
              <td id="check">
                <input type="checkbox" id="access2" name="access2" value={'2'}
                onChange={(e) => changeHandler(e.target.checked, '2')}
                checked={all.includes('2') ? true : false}/>
                <label htmlFor="access2">　　</label>
              </td>
            </tr>
            <tr>
              <td><Down/></td>
              <td id="title">본인 인증 서비스 약관 전체동의(필수)</td>
              <td id="check">
                <input type="checkbox" id="access3" name="access3" value={'3'}
                onChange={(e) => changeHandler(e.target.checked, '3')}
                checked={all.includes('3') ? true : false}/>
                <label htmlFor="access3">　　</label>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className="btn" id="btnBlue" onClick={() => next()}>
          <span className="btnMsg">다음</span>
          <ExpandRight/>
        </div>
      </form>
    </div>
  );
};