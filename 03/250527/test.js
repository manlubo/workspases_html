// 1
let man = {name: "홍길동", age: 25};
console.log(man);

// 2 - 상수에 담긴 리터럴은 수정불가
const country = "Korea";
// country = "USA";

// 3
let a = "hello";
let b = 123;
let c = true;
let d = null;
let e;
console.log(typeof a, typeof b, typeof c, typeof d, typeof e);

// 4
let result = 10 + 5 * 2 - 3;
console.log(result);

// 5
let score = 10;
score += 5;
score -= 3;
score *= 2;
score /= 4;
console.log(score);

// 6
console.log(10 == "10");
console.log(10 === "10");

// 13
for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i)
    }
    if(i === 6) {
        break;
    }
}

// 14
const add = function(x, y){return x + y;}
console.log(add(8,6));

// 15
const getMax = function(a, b ,c){
    if(a > b && a > c){
        return a;
    }
    return b > c ? b : c;
}
console.log(getMax(33, 31, 266));

// 16
let msg = "Hello";

function showMsg(){
    let msg = "Hi";
    console.log(msg);
}

showMsg();
console.log(msg);

// 18
const str = "24";
console.log(parseInt(str), parseFloat(str), isNaN(str));

// 19
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }


    sayHello(){
        return "Hello";
    }
}

const person1 = new Person("김김김",24);
console.log(person1);


// 20
const date = new Date();
console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);



