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

console.log(max());
