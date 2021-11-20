import { createThunk } from './util/createThunk';

import { sendMail, verify, register, login, getProfile, putVaccine } from './api/userAPI';

import {  //액션 타입
  SEND_MAIL, SEND_MAIL_SUCCESS, SEND_MAIL_ERROR,  //회원가입-메일 전송
  VERIFY, VERIFY_SUCCESS, VERIFY_ERROR,  //회원가입-메일 인증
  REGISTER, REGISTER_SUCCESS, REGISTER_ERROR,  //회원가입
  LOGIN, LOGIN_SUCCESS, LOGIN_ERROR,  //로그인
  GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_ERROR,  //백신여부 조회
  PUT_VACCINE, PUT_VACCINE_SUCCESS, PUT_VACCINE_ERROR,  //백신여부 업데이트
  RESET_USER  //리셋
} from './type/userType';


//초기 상태
const INIT_USER_STATE = {
  user: {
    email: null,
    name: null,
    nickName: null,
    //collegeName: null,
    studentNum: null,
    image: null,
    //phoneNum: null,
  },
  info: {
    firstVaccination: true,
    secondVaccination: true
  },
  school: {
    collegeId: 1,  //****추가필
  },
  join: {
    mailState: false,
    verifyState: false
  },
  loading: false,
  data: "",
  error: false
};

//회원가입-메일 전송
export const sendMailAction = createThunk(SEND_MAIL, sendMail, true);
//회원가입-메일 인증
export const verifyAction = createThunk(VERIFY, verify, true);
//회원가입
export const registerAction = createThunk(REGISTER, register, true);
//로그인
export const loginAction = createThunk(LOGIN, login, false);
//프로필 조회
export const getProfileAction = createThunk(GET_PROFILE, getProfile, false);
//백신여부 업데이트
export const putVaccineAction = createThunk(PUT_VACCINE, putVaccine, true);


//로그아웃 시 USER 초기화
export const resetUser = () => ({ type: RESET_USER });


//reducer
const user = (state = INIT_USER_STATE, action) => {
  console.log(action.payload);
  switch(action.type) {
    //join - sendMail
    case SEND_MAIL:
      return { 
        ...state,
        loading: true,
        error: false
      }
    case SEND_MAIL_SUCCESS:
      return {
        ...state,
        join: {
          ...state.join,
          mailState: action.payload.result
        },
        loading: false
      }
    case SEND_MAIL_ERROR:
      return {
        ...state,
        join: {
          ...state.join,
          mailState: false
        },
        loading: false,
        data: "",
        error: true
      }

    //join - verify
    case VERIFY:
      return { 
        ...state,
        loading: true,
        error: false
      }
    case VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        join: {
          ...state.join,
          verifyState: action.payload.result
        },
      }
    case VERIFY_ERROR:
      return {
        ...state,
        join: {
          ...state.join,
          verifyState: false
        },
        loading: false,
        data: "",
        error: true
      }
    
    //join - register
    case REGISTER:
      return { 
        ...state,
        loading: true,
        error: false
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        data: "",
        error: true
      }

    //login
    case LOGIN:
      return { 
        ...state,
        loading: true,
        error: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.value
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        data: "",
        error: true
      }

    //get profile
    case GET_PROFILE:
      return { 
        ...state,
        loading: true,
        error: false
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        info: {
          firstVaccination: action.payload.value.firstVaccination,
          secondVaccination: action.payload.value.secondVaccination
        }
      }
    case GET_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        data: "",
        error: true
      }

    //put vaccine
    case PUT_VACCINE:
      return { 
        ...state,
        loading: true,
        error: false
      }
    case PUT_VACCINE_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload.data
      }
    case PUT_VACCINE_ERROR:
      return {
        ...state,
        loading: false,
        data: "",
        error: true
      }
    

    //reset
    case RESET_USER:
      return INIT_USER_STATE;

    default:
      return state;
  }
}

export default user;