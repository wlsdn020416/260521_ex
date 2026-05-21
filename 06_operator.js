// 연산자 -> 1개 이상의 피연산자 (operand)를 사용하여 연산을 수행하는 기호

// 산술 연산자 + - * / % **
console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(10 % 3); // 1 (나머지 연산자) 
console.log(2 ** 3); // 8 (거듭제곱 연산자)
//계산 우선순위 -> 사칙연산
console.log(10 + 5 * 2); // 20 (곱셈이 먼저 수행됨)
console.log((10 + 5) * 2); // 30 (괄호 안이 먼저 수행됨)

//대입/할당 연산자
let x = 10; // = <- 대입 연산자
x = x + 5; // x에 x + 5의 결과를 다시 대입
console.log(x); // 15

//복합 대입 연산자
x += 5; // x = x + 5와 동일
console.log(x); // 20

//비교 연산자 == 결과가 true 또는 false인 연산자
console.log("10 > 5", 10 > 5); // true
console.log("10 < 5", 10 < 5); // false
console.log("10 >= 5", 10 >= 5); // true
console.log("10 <= 5", 10 <= 5); // false
console.log("10 == 5", 10 == 5); // false
console.log("10 != 5", 10 != 5); // true

console.log("1 + '1'", 1 + "1"); // "11" (문자열 연결)
console.log("1 - '1'", 1 - "1"); // 0 (문자열이 숫자로 변환되어 계산됨)
console.log("1 * '2'", 1 * "2"); // 2 (문자열이 숫자로 변환되어 계산됨)
console.log("1 / '2'", 1 / "2"); // 0.5 (문자열이 숫자로 변환되어 계산됨)

console.log("1 == '1'", 1 == "1"); // true (값이 같음, 타입은 다름)
//동등 연산자 ->  == (값이 같음), != (값이 다름) -> 타입 변환 후 비교
//일치 연산자 -> === (값과 타입이 같음), !== (값과 타입이 다름) -> 타입 변환 없이 비교

//truthy, falsy
console.log(0 == "0"); // true (0과 "0"은 값이 같음)
console.log(0 == ""); // true (0과 ""은 값이 같음)
console.log("" == "0"); // false (""과 "0"은 값이 다름)

//논리 연산자
//1개 이상의 값에 대하여 논리적 연산을 수행하는 연산자
//&&(AND), ||(OR), !(NOT)
console.log("---------------");
const b1 =100>10;
const b2 = 5 < 3;
console.log("b1", b1); // true
console.log("b2", b2); // false

console.log("b1 && b2", b1 && b2); // false (AND 연산자, 둘 다 true여야 true)
console.log("b1 || b2", b1 || b2); // true (OR 연산자, 둘 중 하나라도 true면 true)
console.log("!b1", !b1); // false (NOT 연산자, b1이 true이므로 !b1은 false)
console.log("!b2", !b2); // true (NOT 연산자, b2가 false이므로 !b2는 true)

//&& || 단축 평가
//&& -> 첫 번째 피연산자가 falsy이면 그 값을 반환, 그렇지 않으면 두 번째 피연산자를 반환
//|| -> 첫 번째 피연산자가 truthy이면 그 값을 반환, 그렇지 않으면 두 번째 피연산자를 반환