// 1 음수 추출 후 배열 만들기
const nums = [1, -3, 5, -7, 2, -9];


console.log(nums.filter(v => v < 0));

//  모두 대문자로 변환 새배열
const words = ["apple", "banana", "melon"];
// 결과: ["APPLE", "BANANA", "MELON"]
console.log(words.map(v => v.toUpperCase()));

// 짝수만 제곱 후 반환
const arr = [1, 2, 3, 4, 5, 6];
// 결과: [4, 16, 36]
console.log(arr.filter(v => v % 2 == 0 ? v : "").map(v => v * v));


// 20세 이상만 이름을 배열로 반환
const users = [
  { name: "철수", age: 17 },
  { name: "영희", age: 21 },
  { name: "돌이", age: 15 },
  { name: "희동", age: 33 },
];
// 결과: ["영희", "희동"]
console.log(users.filter(v => v.age >= 20).map(v => v.name));


// 모두 짝수인지 확인
const list = [2, 4, 6, 8];
// 결과: true

console.log(list.every(v => v % 2 === 0));


// 3의 배수가 하나라도 포함되어있는지
const nums2 = [1, 7, 9, 11];
// 결과: true

console.log(nums2.some(v => v % 3 === 0));

// 장바구니 종 결제 금액
const cart = [
  { item: "햄버거", qty: 2, price: 5000 },
  { item: "콜라", qty: 1, price: 1500 },
  { item: "감자튀김", qty: 3, price: 2000 },
];
// 결과: 5000*2 + 1500*1 + 2000*3 = 17500

console.log(cart.reduce((prev, curr) => prev + curr.qty * curr.price,0));


//  200페이지 이하 책 제목 > 배열로
const books = [
  { title: "JS 완전정복", pages: 350 },
  { title: "CSS 마스터", pages: 150 },
  { title: "HTML5", pages: 200 },
];
// 결과: ["CSS 마스터", "HTML5"]

console.log(books.filter(v => v.pages <= 200).map(v => v.title));


// 가장 비싼 상품 이름
const products = [
  { name: "스마트폰", price: 800000 },
  { name: "에어팟", price: 250000 },
  { name: "태블릿", price: 600000 },
];
// 결과: "스마트폰"

console.log(products.reduce((a,b) => a.price < b.price ? b : a).name);

// 고구마 포함여부
const items = ["감자", "양파", "고추"];
// 결과: false

console.log(items.includes("고구마"));



// 주어진 배열에서 중복된 숫자를 제거하고 짝수만 추출한 뒤 오름차순 정렬하세요
const nums3 = [4, 2, 6, 2, 3, 4, 8, 6, 1];
// 결과: [2, 4, 6, 8]


console.log(nums3.filter((v, i, arr) => arr.indexOf(v) === i && v % 2 === 0).sort());





// 상품 이름에 "노트북"이 포함된 상품들의 이름만 배열로 추출하세요
const inventory = [
  { name: "LG 노트북 울트라", stock: 5 },
  { name: "HP 데스크탑", stock: 2 },
  { name: "삼성 노트북 9", stock: 3 },
  { name: "로지텍 마우스", stock: 10 }
];
// 결과: ["LG 노트북 울트라", "삼성 노트북 9"]

console.log(inventory.filter(v => v.name.includes("노트북")).map(v => v.name));
