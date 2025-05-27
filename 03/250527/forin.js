const str = "f"
const obj = {a:10, b:20, c:30};
obj.d = 40;
obj["e"] = 50;
obj[str] = 60;

console.log(obj.toString());


for(let i in obj){
    console.log(i, obj[i]);
    
}

// 연관배열


class Addr {
    #no;
    constructor(no, name, desc){
        this.#no = no;
        this.name = name;
        this.desc = desc;
    }
    print() {
        console.log(this.no, this.name, this.desc);
        return "반환 테스트"
    }
    get getNo() {
        return this.#no;
    }
    set setNo(no){
        this.#no = no;
    }
}
const addr = new Addr(1, "새똥이", "부천시");
// Addr(2, "개똥이", "구로구")
console.log(addr);
console.log(addr.print());

console.log(addr.getNo);
addr.setNo= 10;
console.log(addr.getNo);

function Card(kind, number) {
    let k = kind;
    this.getKind = function() {
        return this.k;
    }
    this.setKind = function(kind){
        this.k = kind;
    }
}
for(let i in addr){
    console.log(i);
}