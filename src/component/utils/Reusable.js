export const days = [ 
  '일', 
  '월', 
  '화', 
  '수', 
  '목', 
  '금', 
  '토'
];

export const time = [
  { title: "07:00" },
  { title: "07:30" },
  { title: "08:00" },
  { title: "08:30" },
  { title: "09:00" },
  { title: "09:30" },
  { title: "10:00" },
  { title: "10:30" },
  { title: "11:00" },
  { title: "11:30" },
  { title: "12:00" },
  { title: "12:30" },
  { title: "13:00" },
  { title: "13:30" },
  { title: "14:00" },
  { title: "14:30" },
  { title: "15:00" },
  { title: "15:30" },
  { title: "16:00" },
  { title: "16:30" },
  { title: "17:00" },
  { title: "17:30" },
  { title: "18:00" },
  { title: "18:30" },
  { title: "19:00" },
  { title: "19:30" },
  { title: "20:00" },
  { title: "20:30" },
  { title: "21:00" }
]

const date = new Date();
export const today = date.getMonth()+1 + "/" + date.getDate() + " (" + days[date.getDay()] + ")";

//가입
export const schoolList = [
  { collegeName: "삼육대학교", collegeId: "1", mail: "syuin.ac.kr", desc: ['삼육', '삼육대', '삼육대학교'] },
  { collegeName: "중앙대학교", collegeId: "2", mail: "cau.ac.kr", desc: ['중앙', '중앙대', '중앙대학교'] },
  { collegeName: "한국산업기술대학교", collegeId: "3", mail: "?", desc: ['한산기', '한국산업기술', '한국산업기술대학교'] },
  { collegeName: "삼육보건대학교", collegeId: "4", mail: "syuin.ac.kr", desc: ['삼육', '삼육보건ㄷ', '삼육보건대학교'] },
]
//학교
export const school = [
  { collegeName: "학교를 선택해주세요.", collegeId: "학교를 선택해주세요.", mail: "학교를 선택해주세요.", desc: ['']},
  { collegeName: "삼육대학교", collegeId: "1", mail: "syuin.ac.kr", desc: ['삼육', '삼육대', '삼육대학교'] },
  { collegeName: "중앙대학교", collegeId: "2", mail: "cau.ac.kr", desc: ['중앙', '중앙대', '중앙대학교'] },
  { collegeName: "한국산업기술대학교", collegeId: "3", mail: "?", desc: ['한산기', '한국산업기술', '한국산업기술대학교'] },
  { collegeName: "삼육보건대학교", collegeId: "4", mail: "syuin.ac.kr", desc: ['삼육', '삼육보건ㄷ', '삼육보건대학교'] },
]

//진단 문항
export const diagnosisData = [
  { title: "현재 37.5도 이상이거나, 발열감이 있나요?"},
  { title: "평소 기저질환 외에 아래와 같은 증상이 있나요?", 
    subtitle: "'기침, 가래, 콧물, 호흡곤란, 오한, 근육통, 두통, 인후통, 후각·미각 소실 또는 폐렴",
    subColor: "red"},
  { title: "본인 혹은 동거인이 자가격리자 대상인가요?",
    subtitle: "(동거인 자가격리는 진단 결과가 음성이면 아니요 체크)"},
  { title: "허위답변으로 인한 문제 발생시 처벌을 받을 수 있고 개인정보가 수집/처리/제공되는 것에 동의합니다."}
]