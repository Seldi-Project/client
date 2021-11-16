import * as React from 'react';
import Map from './Map';
import Info from './Info';
import BottomInfo from './BottomInfo';
import '../../style/main.scss';
import { ReactComponent as SearchIcon } from '../../source/SearchIcon.svg';

export default function Main() {
  const DiagnosisState = true;  //test

  return (
    <div className="component" id="mainComponent">
      <Map DiagnosisState={DiagnosisState}/>
      <div id="searchDiv">
        <SearchIcon id="searchIcon"/>
        <input id="searchInput" type="text" placeholder="이상 반응 키워드를 검색해보세요!"/>
      </div>
      <Info DiagnosisState={DiagnosisState}/>
      <BottomInfo DiagnosisState={DiagnosisState}/>
    </div>
  );
};