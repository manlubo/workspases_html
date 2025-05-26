// var o = {a:10};
// o.c = 20;
// var arr = [];
// arr.length = 10;

// console.log(o.c);
// console.log(arr[5]);
// console.log(arr[100]);
// console.log(arr);
// console.log(num);

// var obj = 0 === 3;
// if(obj) {
//     console.log('참인 경우 출력');
// }
// else {
//     console.log('거짓인 경우 출력')
// }

// 형 변환
// var num = 10;
// console.log(typeof num);
// num = '10';
// console.log(typeof num);
// num = Boolean(num);
// console.log(typeof num);

//  number > boolean
// 0 >  flase, 그외의 숫자는 true
// boolean > number
// true > 1, false > 0

// number > string
// string > number ex)"abcd" > NaN(표현 불가능한 숫자)
// var str = "abcd";
// str = Number(str);
// console.log(typeof str, str);
var n = NaN;
// console.log(NaN == NaN);
// console.log(NaN == n);
// console.log(isNaN(str));
// console.log(Number.MAX_VALUE);
// console.log(0/0, 3/0);
console.log(isFinite(3),isFinite(Number.POSITIVE_INFINITY));

 n = null;
 console.log(n, typeof n);

 var fn = function(a,b){
    return a + b;
 }
 var ret = fn(10, 20);
 console.log(ret);
 
 