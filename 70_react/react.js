// 1. Spread 연산자 (전개 연산자, ES6)
// 배열
const num = [1,2,3,4,5];
console.log(num);
console.log(...num);
console.log([...num]);
console.log([...num, 6]);

[a,b, ...rest] = [10, 20, 30, 40, 50]
console.log(a, b, rest);

//객체
const std = { id : 1, name : "홍길동"};
const std2 = { addr : "안산", phone: "010-1111-2222"};
const std3 = { ...std, ...std2};
console.log(std3)