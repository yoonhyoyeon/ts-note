// @@@@@@@@@ 기본 타입 @@@@@@@@@@@
let car = 'bmw';


let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];


// @@@@@@@@@@@ 튜플 (Tuple) @@@@@@@@@@@@
let b:[string, number];

b=['z', 1];
// b=[1,1];
b[0].toLocaleLowerCase();

// @@@@@@@@@@@@@ void, never @@@@@@@@@@@@@@
function sayHello():void {
    console.log('Hello'); 
}

function showError():never {
    throw new Error();
}

function infLoop():never {
    while(true) {
        // do something..
    }
}

// @@@@@@@@@@@@@@@@@@@@@ enum @@@@@@@@@@@@@@@@@@@

enum Os {
    Window,
    Ios,
    Android
}

let myOs:Os;

myOs = Os.Ios; // 1

console.log(Os);
console.log(myOs);
console.log(Os[myOs]) // "Ios"

let ab:null = null;
console.log(ab);
let hi:undefined = undefined;


// @@@@@@@@@@@@@@@@ 인터페이스(interface) @@@@@@@@@@@@@@@@

type Score = 'A' | 'B' | 'C' | 'F';

interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    [grade:number] : Score;
}

let user:User = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B',
};

user.age = 10;
user.gender = "male";
user.birthYear = 1990;

console.log(user.name);


// 인터페이스 함수 정의

interface Add {
    (num1:number, num2:number): number; 
}

const add: Add = function(x,y) {
    return x+y;
}

add(1,2);

interface isAdult {
    (age:number): boolean;
}

const hihi:isAdult = (age) => {
    return age > 19;
};

hihi(20);

// @@@@@@@@@@@@@@@ 인터페이스 클래스 정의 (implements) @@@@@@@@@@@@@@@@@

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Benz extends Car { //인터페이스 상속
    door: number;
    stop(): void;
}

class Benz implements Benz { //인터페이스 적용
    color;
    wheels = 4;
    door = 4;
    constructor(c:string) {
        this.color = c;
    }
    start() {
        console.log('go! '+this.color+' benz!');
    }
    stop() {
        console.log('stop! '+this.color+' benz');
    }
}

const benz = new Benz('green');
console.log(benz);
benz.stop();

class BMW implements Car {
    color;
    wheels = 4;
    constructor(c:string) {
        this.color = c;
    }
    start() {
        console.log('go..');
        return 10;
    }
}

const bmw = new BMW('red');
console.log(bmw);
bmw.start();

interface Toy {
    name: string;
}

interface ToyCar extends Toy, Car { //인터페이스 여러개 상속 가능
    price: number;
}

class Toycar implements ToyCar { 
    color;
    wheels;
    name;
    price;
    constructor(color:string, wheels:number, name:string, price:number) {
        this.color = color;
        this.wheels = wheels;
        this.name = name;
        this.price = price;
    }
    start() {
        console.log('Go! ' + this.name);
    }
}

const ttobot = new Toycar('red', 4, 'ttobot', 100000);

ttobot.start();
console.log(ttobot);


// @@@@@@@@@@@@@@@@@ 함수 정의 @@@@@@@@@@@@@@@@@@@@
const addFunc = (a:number, b:number):number => {
    return a+b;
}

function hello(name:string, age:number, gender?:string, address?:string) {
    return `Hello, ${name} (${age}) -> ${gender || "???"} 주소: ${address || "???"}`;
}

function hello2(name = "world") {  //기본값 부여, TS가 아닌 일반 자바스크립트 문법이다.
    return `Hello, ${name}`;
}
hello2();

console.log(hello('yoon', 10, 'male'));

function addd(...nums:number[]) { // 나머지 매개변수(...) 타입 지정
    return nums.reduce((result, num) => result + num, 0);
}
console.log(addd(1,2,3,4,5, 8));

// @@@@@@@@@@@@@@@@@ this의 타입 지정 @@@@@@@@@@@@@@@@@@@@

interface User1 {
    name: string;
}

const Sam: User1 = { name: 'Sam' };

function showName(this:User1, age:number, gender:'m'|'f') { //this의 타입은 매개변수 맨 앞에 지정한다,
    console.log(this.name, age, gender);
}

const aa = showName.bind(Sam);
aa(30, 'm');


// @@@@@@@@@ 오버로딩 활용 @@@@@@@@@
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
