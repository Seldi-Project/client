import axios from 'axios';

//회원가입-메일 전송
export const sendMail = async ({
  email  //string
}) => {
  let res = null;
  try {
    res = await axios.get(`/api/email?email=${email}`)
  } finally {
    return {
      res,
      updateData: false
    }
  }
}

//회원가입-메일 인증
export const verify = async ({
  email,  //string
  code  //string
}) => {
  let res = null;
  try {
    res = await axios.get(`/api/verify?email=${email}&code=${code}`)
  } finally {
    return {
      res,
      updateData: false
    }
  }
}

//회원가입
export const register = async ({
  collegeId,  //number
  confirmPw,  //string
  email,  //string
  name,  //string
  password,  //string
  phoneNum,  //string
  studentNum  //string
}) => {
  let res = null;
  try {
    res = await axios.post(`/api/register`, 
      {
        collegeId,
        confirmPw,
        email,
        name,
        password,
        phoneNum,
        studentNum
      }
    )
  } finally {
    return ({
      res,
      updateData: false
    });
  }
}

//로그인
export const login = async ({
  email,  //string
  password  //string
}) => {
  let res = null;
  try {
    res = await axios.post(`/api/login`,
      {
        email,
        password
      } 
    )
  } finally {
    return ({
      res,
      updateData: false
    });
  }
}

//유저 프로필 조회
export const getProfile = async () => {
  let res = null;
  try {
    res = await axios.get(`/api/userProfile`,
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      },
    )
    
  } finally {
    return ({
      res,
      updateData: false
    });
  }
}

//백신여부 업데이트
export const putVaccine = async ({
  email,  //string
  firstVaccination,  //boolean
  secondVaccination  //boolean
}) => {
  let res = null;
  try {
    res = await axios.put(`/api/userProfile/update`,
      {
        email,
        firstVaccination,
        secondVaccination
      },
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      }
    )
  } finally {
    return ({
      res,
      updateData: {
        firstVaccination,
        secondVaccination
      }
    });
  }
}