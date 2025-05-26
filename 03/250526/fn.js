console.log(max(3,4));
// console.log(min(3,4));
console.log(min);
// funtion

// 1. 선언적 함수
function max(a,b) {
    return a > b ? a : b;
}


// 2. 익명함수
var min = function(a,b){
    return a < b ? a : b;
}
console.log(max(10,5));
console.log(min(10,5));

console.log(typeof max);
console.log(typeof min);

// 선언함수로 두수의 곱을 반환하는 함수 mul
function mul(a, b) {
    return a * b;
}
// 익명함수로 두수의 곱을 반환하는 함수 sub
var sub = function(a , b){
    return a > b ? a - b : b - a;
}

console.log(mul(10,4));
console.log(sub(4,10));


// type script 타입체크 방법
// var add2:number = function(a:Number, b:Number){}


// hoist :  var로 선언한 변수, 선언적 함수는 끌어올려짐
// var로 선언한 변수는 중복선언 가능
console.log(num);
var num = 10;
var num = 20;
console.log(num);


//  함수 내에서 선언한 변수 ? 지역변수
//  익명함수 === 함수리터럴
//  10
//  "abcd"
//  false
//  {} : object literal
//  function() {} : function literal
//  [] : array literal
console.log("abcdef".substring(3,5));
console.log([10,20,30][1]);

var obj = {a:10, b:20};

// IIFE
(function(a) {console.log('파라미터의 값 : ' + a)})();

// js에서 function은 type이다.

obj = {no:1, name:"새똥이", score:80, getScore : function() {
    return this.score;
}};

console.log(obj);
console.log(obj.score);
console.log(obj.getScore());

function max2 (a, b, c)  {
    if(a > b && a > c){
        return a;
    }
    return b > c ? b : c;
}

console.log(max2(10,9,7));

function max3(a, b, c){
    return max(max(a,b),c);
}

console.log(max3(9,7,22));


function max4(a, b, c){
    console.log(arguments);
}
 
max4(10,20,40);