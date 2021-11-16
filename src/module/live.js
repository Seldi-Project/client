import { createThunk } from './util/createThunk';

import { getLive } from './api/liveAPI';

import {  //액션 타입
  GET_LIVE, GET_LIVE_SUCCESS, GET_LIVE_ERROR,  //실시간 교내 인원, 유증상자 받아오기
  RESET_LIVE  //리셋
} from './type/liveType';


//초기 상태
const INIT_LIVE_STATE = {
  
};


//로그인
export const getLiveAction = createThunk(GET_LIVE, getLive, true, "/user/home");

//로그아웃 시 LIVE 초기화
export const resetLive = () => ({ type: RESET_LIVE });


//reducer
const live = (state = INIT_LIVE_STATE, action) => {
  switch(action.type) {

    //get live
    case GET_LIVE:
      return { 
        ...state
      }
    case GET_LIVE_SUCCESS:
      return {
        ...state
      }
    case GET_LIVE_ERROR:
      return {
        ...state
      }

    //reset
    case RESET_LIVE:
      return INIT_LIVE_STATE;

    default:
      return state;
  }
}

export default live;