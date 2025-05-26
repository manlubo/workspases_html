// var num = 10;
str = "새똥이";
function f() {
    // console.log(num);
    num = 20;
    console.log(num);
}
f();
console.log(num);
console.log(str);

// 지역의 위치에서 var, let이 없이 선언이 가능, 키워드 생략시 전역의 위치에 선언

// var, 선언적함수는 hoisting의 대상, 함수 레벨 scope
(function() {for(var i = 0; i < 10; i++){}})
// console.log(i);

if(true){
    let test = 10;
}
console.log(test);

var str = "abcd";
var str = "가나다라";

let str2 = "abcd";
// let str2 = "가나다라";
let str = "abcd";
var str = "zz";

console.log(str);