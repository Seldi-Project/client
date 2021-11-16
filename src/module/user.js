import { createThunk } from './util/createThunk';

import { login } from './api/userAPI';

import {  //액션 타입
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR,  //로그인
  RESET_USER  //리셋
} from './type/userType';


//초기 상태
const INIT_USER_STATE = {
  
};


//로그인
export const loginAction = createThunk(LOGIN, login, true, "/user/home");

//로그아웃 시 USER 초기화
export const resetUser = () => ({ type: RESET_USER });


//reducer
const user = (state = INIT_USER_STATE, action) => {
  switch(action.type) {

    //login
    case LOGIN:
      return { 
        ...state
      }
    case LOGIN_SUCCESS:
      return {
        ...state
      }
    case LOGIN_ERROR:
      return {
        ...state
      }

    //reset
    case RESET_USER:
      return INIT_USER_STATE;

    default:
      return state;
  }
}

export default user;