'use strict';

// 오늘날짜를 전역변수로 선언...
const today = new Date();
const year = today.getFullYear(); // 연도 4자리
const month = today.getMonth() + 1;   // 월(기존월보다 -1)
const date = today.getDate();     // 일
const hour = today.getHours();    // 시
const minute = today.getMinutes(); // 분
const second = today.getSeconds(); // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 표준날짜
function fCheck1() {
  let temp = year + "-" + month + "-" + date;
  document.getElementById("date1").value = temp;
}

//날짜비교하기(isSameDay(날짜형식1, 날짜형식2))
function fCheck2() {
  let start = document.getElementById("date1").value;
  let end = document.getElementById("date2").value;

  const startDate = new Date(start);
  const endDate = new Date(end);

  if(isSameDay(startDate, endDate))
}


  
demo.innerHTML = strDate;
  


