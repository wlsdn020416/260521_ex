const fruit = 'apple';
const fruits = ['apple', 'banana', 'orange'];

switch (fruits[Math.floor(Math.random() * fruits.length)]) { // 하나의 조건을 통과하면 나머지 조건은 검사하지 않음
  case 'apple':
    console.log('This is an apple.');
    break;
  case 'banana':
    console.log('This is a banana.');
    break;
  case 'orange':
    console.log('This is an orange.');
    break;
  default:
    console.log('Unknown fruit.');
}

//1. switch (true)

const r = Math.random() * 10;

switch (true) {
  case r < 3:
    console.log('r is less than 3');
    break;
  case r < 6:
    console.log('r is between 3 and 6');
    break;
  default:
    console.log('r is greater than or equal to 6');
}

//2. 객체 - 키 호출
const fruit2 = ['apple', 'banana', 'orange'][Math.floor(Math.random() * 3)];

const fruitMessages = {
  apple: 'This is an apple.',
  banana: 'This is a banana.',
  orange: 'This is an orange.',
};
console.log(fruitMessages[fruit2] || 'Unknown fruit.');

console.log(fruitMessages[fruit2] ?? 'Unknown fruit.');// null, undefined 일 때만 'Unknown fruit.' 반환