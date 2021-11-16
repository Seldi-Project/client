import { createThunk } from './util/createThunk';

import { getMap } from './api/mapAPI';

import {  //액션 타입
  GET_MAP, GET_MAP_SUCCESS, GET_MAP_ERROR,  //실시간 교내 인원, 유증상자 받아오기
  RESET_MAP  //리셋
} from './type/mapType';


//초기 상태
const INIT_MAP_STATE = {
  
};


//로그인
export const getMapAction = createThunk(GET_MAP, getMap, true, "/user/home");

//로그아웃 시 LIVE 초기화
export const resetMap = () => ({ type: RESET_MAP });


//reducer
const map = (state = INIT_MAP_STATE, action) => {
  switch(action.type) {

    //get map
    case GET_MAP:
      return { 
        ...state
      }
    case GET_MAP_SUCCESS:
      return {
        ...state
      }
    case GET_MAP_ERROR:
      return {
        ...state
      }

    //reset
    case RESET_MAP:
      return INIT_MAP_STATE;

    default:
      return state;
  }
}

export default map;