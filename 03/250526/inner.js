//  number, string, boolean
//  funtion, object, undefined

function f(c) {
    let l = 10;
    // function inner(){
    //     return l + c
    // }
    
    // let inner = function() {
    //     return l + c;
    // }
    
    return function() {
        return l + c;
    }
    
}

const ret = f(10);
console.log(ret);
const result = ret();
console.log(result);

console.log(f(20)());

function f3(c){
    c();
}
f3(function() {
    console.log("callback");
})


const arr = [3,41,5,4,2,1];
arr.sort(function (a,b){
    return b - a;
});

console.log(arr);

