// 13.js
'use strict';
let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcde';
let text2 = '   ABC   BCABC   GHI  JKLMN.....   ABC.. OPQ'

//demo.innerHTML = text1;
//demo.innerHTML = text1.length;
//demo.innerHTML = text1.substring(0,10);
//demo.innerHTML = text1.slice(10);
//demo.innerHTML = text1.substring(10);
// demo.innerHTML = text1.substr(10);
// demo.innerHTML = text2.replace('ABC', 'OPQ');
// demo.innerHTML = text2.replaceAll('ABC', 'OPQ');
// demo.innerHTML = text2.toUpperCase();
// demo.innerHTML = text2.toLowerCase();
// demo.innerHTML = text2.concat('안녕', 1234);
// demo.innerHTML = concat('안녕', 1234);           에러남 이렇게 사용x
// demo.innerHTML = text2.trim();
// demo.innerHTML = text2.trimStart() + "abc";
// demo.innerHTML = "abc" + text2.trimEnd() + "abc";
// demo.innerHTML = "abc" + text2.replaceAll(' ', '') + "abc";
// demo.innerHTML = text1.charAt(5);
// demo.innerHTML = text1.charCodeAt(0);       //A:65 a:97

// split()
let mbc = text2.split('abc');
// demo.innerHTML = mbc;

let temp = '';
for(let item of mbc) {
    console.log(item);
    temp += item;
}
demo.innerHTML = temp;

let title = ['지역번호','국번호','전화번호']
let telTemp = '010-3423-2704';

let tels = telTemp.split("-");

tels.forEach((tels, i) => {
  console.log(title[i] + " : " + tels);
});

// demo.innerHTML = text1.indexOf('a')
// demo.innerHTML = text2.lastIndexOf('A')
// demo.innerHTML = text2.indexOf('A')
// demo.innerHTML = text1.search('t')
// demo.innerHTML = text1.match('A BC');
demo.innerHTML = text1.includes('A BC');

//-----------------------------------------------
let price = 10000; //가격
let vat = 0.25; //부가가치세
let total = price * (1 + vat);
demo.innerHTML = total;

//let str = "총금액 : " + toal + "원";
let str = `총금액 : ${price * (1 + vat)}원`;    // EL표기법(Expression Language) => ${}
demo.innerHTML = str;