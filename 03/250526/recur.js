function factorial(n){
    let result = 1;
    if(n == 0) {
        return result;
    }
    else {
        return result = n * factorial(n-1);
    }
}

console.log(factorial(5));


// 프로토콜://도매인:포트/경로/파일?쿼리스트링#앵커
// http://localhost:5500/03/250526/test.html?color=#002345&name=새똥이
// http://localhost:5500/03/250526/test.html?color=%23002345

let url = 'http://localhost:5500/03/250526/test.html?color=#002345&name=새똥이';
console.log(url);
console.log(encodeURI(url));
console.log(encodeURIComponent(url));

console.log(decodeURIComponent(encodeURIComponent(url)));

// http://localhost?value=http://localhost:5500/03/250526/test.html?color=%23002345&name=새똥이

// parseInt(문자열): 숫자 >> 정수만
// parseFloat(문자열) : 숫자 >> 실수포함

let str = "123.456가나다";
console.log(parseInt(str));
console.log(parseFloat(str));

str = "ff";
console.log(parseInt(str,16));

let s = String.fromCharCode(65,66);
console.log(s);

s.charCodeAt(1);
console.log(s.charCodeAt(1));