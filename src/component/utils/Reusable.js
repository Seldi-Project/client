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

//학교 - 정렬 필
export const school = [
  { name: "학교를 선택해주세요.", code: "학교를 선택해주세요.", mail: "학교를 선택해주세요."},
  { name: "삼육대학교", code: "1", mail: "syuin.ac.kr" },
  { name: "중앙대학교", code: "2", mail: "cau.ac.kr" },
  { name: "한국산업기술대학교", code: "3", mail: "?" },
]