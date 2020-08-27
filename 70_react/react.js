// 1. Spread 연산자 (전개 연산자, ES6)
// 배열
const num = [1,2,3,4,5];
console.log(num);
console.log(...num);
console.log([...num]);
console.log([...num, 6]);

[a,b, ...rest] = [10, 20, 30, 40, 50]
console.log(a, b, rest);
console.log(a);
console.log(b);
console.log(rest);

//객체
const std = { id : 1, name : "홍길동"};
const std2 = { addr : "안산", phone: "010-1111-2222"};
const std3 = { ...std, ...std2};
console.log(std3)

// 2. 비구조화 할당 (구조 분해 할당)
// 배열
const arr = [1, 2, 3];
console.log(arr[0], arr[1], arr[2]);

// const one = arr[0]
const [one, two, three] = arr;
console.log(one, two, three);

// 객체
const obj = {
    id : 1,
    text : "hello"
};
console.log(obj.id, obj.text); // obj["id"]
const { id, text } = obj;
console.log(id, text);

const arrobj = [
    { id : 1, text : "hello" },
    { id : 2, text : "hi" },
    { id : 3, text : "bye" },
];
const [first, second, third ] = arrobj;
console.log(first, second, third);

// const id1 = arrobj[0].id
const [
    { id: id1, text: text1},
    { id: id2, text: text2},
    { id: id3, text: text3},
] = arrobj;
console.log(id1, text1);
console.log(id2, text2);
console.log(id3, text3);

let c = 1, d = 2;
[c, d] = [d, c];