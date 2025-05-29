// 아래 cart 배열에서 qty * price의 총합을 구하고 console에 출력하시오.

const cart = [
  { item: "감자", qty: 3, price: 1000 },
  { item: "고구마", qty: 2, price: 1500 },
  { item: "당근", qty: 5, price: 500 },
];



console.log(cart.reduce((a, b) => a + b.price * b.qty,0));
