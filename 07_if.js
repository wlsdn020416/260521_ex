//if

const age = 20;

if (age >= 18) {
    console.log("성인입니다."); 
}
else{
    console.log("미성년자입니다.");
}

const score = 85;

if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else if (score >= 70) {
    console.log("C");
}
else if (score >= 60) {
    console.log("D");
}
else{
    console.log("F");
}

// truthy, falsy
// 1. 조건문의 조건식 (***) / 삼항 연산자의 조건식 (*** ? . : .)
// 2. 논리 연산자 (&&, ||)

// 비어있거나 정의되지 않은 값은 falsy
// - 길이(length)가 0인 문자열, 0, NaN, null, undefined, false
// 그 외의 값은 truthy

Boolean()
// ! (not) -> !! (double not) -> Boolean()과 동일한 효과
console.log(!!1); // true (1은 truthy)
console.log(!!0); // false (0은 falsy)
console.log(!!""); // false (빈 문자열은 falsy)
console.log(!!"hello"); // true (빈 문자열이 아닌 문자열은 truthy)
console.log(!!null); // false (null은 falsy)
console.log(!!undefined); // false (undefined는 falsy)
console.log(!![]); // true (빈 배열은 truthy)

let a;
a || console.log("a is falsy"); // a가 falsy이므로 "a is falsy"가 출력됨
a = 10;
a || console.log("a is falsy"); // a가 truthy이므로 아무것도 출력되지 않음