// Js -> 값을 분류. 적절한 대응 -> 형 -> 데이터 타입 -> 자료형

//1. number -> 감싸줄 필요 없음
const int = 1;
const int2 = -1;
const float = 1.1;
console.log(typeof int); // number
console.log(typeof float); // number

//2. boolean -> true, false
const t = true;
const f = false;
console.log(typeof t); // boolean
console.log(typeof f); // boolean

//3. string -> 문자열
const str1 = "hello";
const str2 = "world";
console.log(typeof str1); // string
console.log(typeof str2); // string

//4. null -> 의도적으로 비어있는 값
const n = null;
console.log(typeof n); // object -> js의 버그

//5. undefined -> 값이 할당되지 않은 상태
let u;
console.log(typeof u); // undefined
let u2 = undefined;
console.log(typeof u2); // undefined
let u3 = {};
console.log(typeof u3.u3); // undefined -> 객체의 프로퍼티가 존재하지 않는 경우에도 undefined

//object -> 객체, 배열, 함수 등등
const o = {};
console.log(typeof o);
const a = [];
console.log(typeof a);