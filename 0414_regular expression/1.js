// test1.js
'use strict';

function regexCheck() {
  // 정규표현식변수를 먼저 만들어 놓는다.
  const regex1 = /atom/g;   // 'atom'이라는 문자열이 포함되어 있다면 true, 없으면 false 반환
  const regex2 = /mbc|kbs|sbs/g;  // mbc또는kbs또는sbs 문자열을 포함하고 있느냐?
  const regex3 = /홍길(동|순)/g;
  const regex4 = /[a-z]/gm;        // 영문 소문자를 포함하고 있느냐?
  const regex5 = /[^a-z]/gm;        // 영문 소문자만 포함하고 있느냐?
  const regex6 = /[A-Z]/gm;        // 영문 소문자를 포함하고 있느냐?
  const regex7 = /[^A-Z]/gm;        // 영문 소문자만 포함하고 있느냐?
  const regex8 = /[0-9]/gm;        // 숫자를 포함하고 있느냐?
  const regex9 = /[^0-9]/gm;        // 숫자만 포함하고 있느냐?
  const regex10 = /[가-힣]/gm;        // 한글을 포함하고 있느냐?
  const regex11 = /[^가-힣]/gm;        // 한글만 포함하고 있느냐?
  const regex12 = /[a-z A-Z 0-9]/gm;    // 영문자와 숫자를 포함하고 있느냐?
  const regex13 = /[^a-z A-Z 0-9]/gm;    // 영문자와 숫자만 포함하고 있느냐?
  const regex14 = /[^a-z A-Z 0-9_]/gm;    // 영문자와 숫자만 및줄(_)만 포함하고 있느냐?

  const regex21 = /\./g;                    //'.'을 포함하고 있느냐?
  const regex22 = /\d/g;                    // 숫자를 포함하고 있느냐?
  const regex23 = /\D/g;                    // 숫자를 포함하고 있지 않느냐?
  const regex24 = /\w/g;                    // 영문자/숫자/_를 포함하고 있느냐?
  const regex25 = /\W/g;                    // 영문자/숫자/_를 포함하고 있지 있느냐?
  const regex26 = /\s/g;                    // 문장안에 공백(탭포함)을 포함하고 있느냐?

  // 와일드카드 : 1개 글자만 포함유무(?), 복수개의 문자의 포함유무(+, *)    -----> 모르겠음 찾아봐야함
  const regex31 = /홍길동?/g;             // '홍길동'의 '동' 0개 글자의 포함 유무
  const regex32 = /홍길동+/g;             // '홍길동'의 '동' 1개이상 글자의 포함 유무
  const regex33 = /홍길동*/g;             // '홍길동'의 '동' 0개이상 글자의 포함 유무

  let content = document.getElementById("content").value.trim();

  if(content == "") alert("문자열을 입력하세요");
    // else if(!content.match(regex1)) alert("atom문자열을 포함하고 있지 않습니다.");
    // else if(!content.match(regex2)) alert("방송국을 선택하세요");
    // else if(!content.match(regex3)) alert("홍길동/홍길순이 아닙니다."); 
    // else if(!regex4.test(content)) alert("영문 소문자가 포함하고 있지 않습니다."); 
    // else if(regex5.test(content)) alert("영문 소문자 외 다른 문자를 포함하고 있습니다."); 
    // else if(!regex6.test(content)) alert("영문 대문자가 포함하고 있지 않습니다."); 
    // else if(regex7.test(content)) alert("영문 대문자 외 다른 문자를 포함하고 있습니다."); 
    // else if(!regex8.test(content)) alert(" 숫자를 포함하고 있지 않습니다."); 
    // else if(regex9.test(content)) alert("숫자 외 다른 문자를 포함하고 있습니다."); 
    // else if(!regex10.test(content)) alert(" 한글을 포함하고 있지 않습니다."); 
    // else if(regex11.test(content)) alert("한글 외 다른 문자를 포함하고 있습니다."); 
    // else if(!regex12.test(content)) alert("영문자나 숫자를 포함하고 있지 않습니다."); 
    // else if(regex13.test(content)) alert("영문자와 숫자 외 다른 문자를 포함하고 있습니다."); 
    // else if(regex14.test(content)) alert("영문자와 숫자 와 밑줄(_) 외 다른 문자를 포함하고 있습니다."); 
    
    // else if(regex21.test(content)) alert("입력데이터 중에 .이 포함하고 있습니다."); 
    // else if(regex22.test(content)) alert("입력한 데이터 중에 숫자를 포함하고 있습니다."); 
    // else if(!regex23.test(content)) alert("입력한 데이터 중에 숫자를 포함하고 있지 않습니다.");  ?이상함
    // else if(regex24.test(content)) alert("입력한 데이터 중에 영문자/숫자/_를 포함하고 있습니다."); 
    // else if(regex25.test(content)) alert("입력한 데이터 중에 영문자/숫자/_를 포함하고 있지 않습니다."); 
    // else if(regex26.test(content)) alert("입력한 데이터 중에 공백을 포함하고 있습니다."); 

    else if(regex31.test(content)) alert("입력한 데이터 중에 홍길'동'을 포함하고 있습니다."); 
    // else if(regex32.test(content)) alert("입력한 데이터 중에 홍길'동'을 포함하고 있습니다."); 
    // else if(regex33.test(content)) alert("입력한 데이터 중에 홍길'동'을 포함하고 있습니다."); 

    else alert("정상적으로 통과!!");
  
}