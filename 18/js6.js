// Date 객체
// 년 월 일 요일 -> 2022년 5월 26일 목요일

// 날짜 시간 Date 객체



const now = new Date();
console.log(now.getFullYear()+'년 '+(now.getMonth()+1+'월 ')+now.getDate()+'일 '+now.getDay()+'요일')




const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()+1;
const day = today.getDate();
const weekend = ['일','월','화','수','목','금','토']
const date = weekend[today.getDay()];

console.log(`${year}년 ${month}월 ${day}일 ${date}요일`)
