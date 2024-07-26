/* 기본 타입들 */

let car = 'bmw';


let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];

// # void, never
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

// # enum

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

