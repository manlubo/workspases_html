const arr = [1, 2, 3, 4];
const obj = {a: 1,  b: 2};
const map = new Map();
map.set("a",1);
map.set("b",2);

console.log(map);
console.log(map.get("a"));
console.log(map.has("a")); // 자바에서 containsKey와 동일 - 가지고있나?

const keys = map.keys();
console.log(keys);

for(let i of keys){
    console.log(i);
}

for(let i of map.values()){
    console.log(i);
}

for(let i of map.entries()) {
    console.log(i);
}



//  자바에서는 Iterable 인터페이스로 배열, 리스트, Set을 정의해놓음
for(let i of arr){
    console.log(i);
}

// for (let i of obj) {
//     console.log(i);
// }
