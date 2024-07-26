/* 인터페이스(interface) */

// # 인터페이스 기본 사용 방법

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
user.birthYear = 1990; // 읽기 전용 이므로 Error

console.log(user.name);


// # 인터페이스 함수 정의

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

// # 인터페이스 클래스 정의 (implements)

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

// # 인터페이스 여러개 상속 가능

interface ToyCar extends Toy, Car { 
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