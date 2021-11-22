import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { schoolList } from '../utils/Reusable';
import { setSchoolAction } from '../../module/user';
import { ReactComponent as SearchIcon } from '../../source/SearchIcon.svg';
import { ReactComponent as JoinIcon } from '../../source/JoinIcon.svg';
import { ReactComponent as ExpandRight } from '../../source/ExpandRightWhite.svg';
import Header from '../utils/Header';
import '../../style/start.scss';

export default function Join() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const initSchoolKeyword = useSelector(state => state.user.join.keyword);
  const [schoolKeyword, setSchoolKeyword] = useState(initSchoolKeyword);
  const [schoolState, setSchoolState] = useState(useSelector(state => state.user.join.schoolState));

  const [searchRes, setSearchRes] = useState([]);  //학교 검색 결과

  useEffect(() => {
    searchSchool(initSchoolKeyword)
  }, [initSchoolKeyword])

  //학교 검색
  const searchSchool = (keyword) => {
    setSchoolKeyword(keyword);
    const res = schoolList.filter((item) => {
      if (item.desc.includes(keyword)) {
        return item;
      }
      return false;
    })
    setSearchRes(res);
  }

  //다음으로
  const next = () => {
    if (schoolState.collegeId==="학교를 선택해주세요.") {
      return alert("학교를 선택해주세요.");
    }
    dispatch(setSchoolAction(schoolKeyword, schoolState));
    navigate('/join2');
  }

  //제출 막기
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    };
  }, true);

  return (
    <div className="component" id="joinComponent">
      <Header left={true} title="join" number={1}/>
      <form id="join1">
        <label className="inputLabel" id="schoolLabel" htmlFor="school">학교를 선택해주세요.</label>
        <div id="searchDiv">
          <SearchIcon id="searchIcon"/>
          <input 
            id="searchInput" 
            type="text" 
            defaultValue={initSchoolKeyword}
            placeholder="대학교명을 입력해주세요!" 
            onChange={(e) => searchSchool(e.target.value)}
          />
        </div>
        <div id="schoolRes">
          {searchRes.length!==0 ?
            searchRes.map(({ collegeName, collegeId }) => {
              return <div className="schoolResItem" id={schoolState.collegeId===collegeId ? "selected" : "none"} key={collegeId} value={collegeId} onClick={() => setSchoolState(schoolList[collegeId-1])}>{collegeName}</div>;
            })
          :
            <div id="notResSet">
              <div id="notRes">셀디 서비스는</div>
              <div id="notRes">제휴를 맺은 학교/기관만 이용하실 수 있습니다.</div>
              <div id="icon"><JoinIcon/></div>
            </div>
          }
        </div>
      
        <div className="btn" id="btnBlue" onClick={() => next()}>
          <span className="btnMsg">다음</span>
          <ExpandRight/>
        </div>
      </form>
    </div>
  );
};