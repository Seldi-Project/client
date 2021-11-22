import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as JoinCamera } from '../../source/JoinCamera.svg';
import { ReactComponent as JoinLocation } from '../../source/JoinLocation.svg';
import { ReactComponent as ExpandRight } from '../../source/ExpandRightWhite.svg';
import InfoBottom from '../utils/InfoBottom';
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
    if (!all.includes('1')||!all.includes('2')) {
      setAll(['1','2']);
    } else {
      setAll([]);
    }
  }

  //다음으로
  const next = () => {
    if (!all.includes('1')||!all.includes('2')) {
      return alert("위치정보, 카메라 권한 허용은 필수입니다.");
    }
    navigate('/join4');
  }

  //제출 막기
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    };
  }, true);

  return (
    <div className="component" id="joinComponent">
      <Header title="join" number={3}/>
      <form id="join3">
        <label className="inputLabel" id="accessLabel" htmlFor="accessList">앱 접근 권한 안내</label>
        <table id="all">
          <tbody>
            <tr>
              <td id="title">접근 권한 전체 허용</td>
              <td id="check">
                <input type="checkbox" id="accessAll" name="accessAll" value={'0'}
                onChange={(e) => checkAll()}
                checked={all.includes('1')&&all.includes('2') ? true : false}/>
                <label htmlFor="accessAll">　　</label>
              </td>
            </tr>
          </tbody>
        </table>
        <table id="sub">
          <tbody>
            <tr>
              <td rowSpan="2"><JoinLocation/></td>
              <td id="title">위치정보(필수)</td>
              <td rowSpan="2" id="check">
                <input type="checkbox" id="accessLocation" name="accessLocation" value={'1'}
                onChange={(e) => changeHandler(e.target.checked, '1')}
                checked={all.includes('1') ? true : false}/>
                <label htmlFor="accessLocation">　　</label>
              </td>
            </tr>
            <tr>
              <td id="subTitle">주변 장소 탐색 및 네비게이션 안내시 사용</td>
            </tr>
            <tr>
              <td rowSpan="2"><JoinCamera/></td>
              <td id="title">카메라(필수)</td>
              <td rowSpan="2" id="check">
                <input type="checkbox" id="accessCamera" name="accessCamera" value={'2'}
                onChange={(e) => changeHandler(e.target.checked, '2')}
                checked={all.includes('2') ? true : false}/>
                <label htmlFor="accessCamera">　　</label>
              </td>
            </tr>
            <tr>
              <td id="subTitle">QR코드 인식시 사용</td>
            </tr>
          </tbody>
        </table>
        
        <InfoBottom message="필수 권한을 허용하지 않는 경우, 정상적인 서비스 이용이 어렵습니다.
        '설정>애플리케이션>셀디>권한'에서 재설정이 가능합니다."/>

        <div className="btn" id="btnBlue" onClick={() => next()}>
          <span className="btnMsg">다음</span>
          <ExpandRight/>
        </div>
      </form>
    </div>
  );
};