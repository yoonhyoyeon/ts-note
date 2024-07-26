/* 함수 정의 */

// # 함수 정의 기본
const add1 = (a:number, b:number):number => {
    return a+b;
}

function hello(name:string, age:number, gender?:string, address?:string) {
    return `Hello, ${name} (${age}) -> ${gender || "???"} 주소: ${address || "???"}`;
}

function hello2(name = "world") { //기본값 부여, TS가 아닌 일반 자바스크립트 문법이다.
    return `Hello, ${name}`;
}
hello2();

console.log(hello('yoon', 10, 'male'));

// # 나머지 매개변수(...) 타입 지정

function add2(...nums:number[]) { 
    return nums.reduce((result, num) => result + num, 0);
}
console.log(add2(1,2,3,4,5,8));

// # this 타입 지정

interface User1 {
    name: string;
}

const Sam: User1 = { name: 'Sam' };

function showName(this:User1, age:number, gender:'m'|'f') { //this의 타입은 매개변수 맨 앞에 지정한다,
    console.log(this.name, age, gender);
}

const aa = showName.bind(Sam);
aa(30, 'm');


// # 오버로딩 활용
interface User2 {
    name: string;
    age: number;
}
function join(name: string, age: number): User2;
function join(name: string, age: string): string;// 매개변수의 타입이나 개수에 따라 리턴 타입이 달라진다면 오버 로딩을 활용해서 처리할 수 있다.
function join(name:string, age:number | string):User2 | string {
    if(typeof age === "number") {
        return {
            name,
            age
        };
    }
    else {
        return "나이는 숫자로 입력해주세요.";
    }
}

const result1:User2 = join('hello', 123);
const result2:string = join('hihi', '123');

console.log(result1);
console.log(result2);
