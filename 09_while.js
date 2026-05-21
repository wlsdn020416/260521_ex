// 반복
// 조건문은 한번만 실행되는 반면, 반복문은 조건이 참인 동안 계속해서 실행된다.

// while문
let n = 0;
while ( n < 10 ){
    n+=2;
    console.log(n);
}

//끝 조건이 명확하지 않을때
while (true) {
    if(Math.random() > 0.5 ){
        console.log("동전 던지기 성공!");
        break;
    }else{
        console.log("동전 던지기 실패!");
    }
}

//continue
let m = 0;
while (m < 10){
    m++;//홀수 출력
    if(m % 2 === 0){
        continue;
    }
    console.log(m);
}