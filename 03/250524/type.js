var num = '20';
console.log(typeof num);
num = true;
console.log(typeof num);
num = 20;
console.log(typeof num);
var obj = {a:10, b:20};
var arr = [3,2,1,"가나다라"];
var fn = function () {};
console.log(typeof obj,typeof arr,typeof fn);
console.log(obj.a);
console.log(arr);

num += "zzz"

console.log(num);

var str = `여기는 ${obj.b} 문자열` + "\nhello" + 20;
console.log(str);