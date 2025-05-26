function max(){
    console.log(arguments);
    //  arguments : 배열처럼 사용되는 객체 (유사배열)
    var ret = arguments[0]
    for(var i = 1; i < arguments.length; i++){
        if(ret < arguments[i]){
            ret = arguments[i]
        }
    }
    return ret;
}

// console.log(max());

// 숫자 하나를 입력해서 절댓값을 만든다

var abs = function (a) {
    return a > 0 ? a : -a;
};

//  arrow function : 익명함수의 대체 es6(2015)
abs = a => a > 0 ? a : -a;

// 배열생성
var arr = [3,2,1,5,4];
arr.sort((a,b) => b - a);
console.log(arr);

arr.forEach(a => console.log(`내부의 값은 : ${a}`));

arr.filter(a => a % 2 == 1).map(a => "값은" + a).forEach(console.log);