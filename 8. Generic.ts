/* 제네릭 (Generic) */
// Generic: 매개변수처럼 방아서 타입이 동적으로 결정되는 타입


// 예제 1: 함수에서의 사용
function getSize<T>(arr: T[]):number {
    const fisrt:T = arr[0];
    return arr.length;
}

const arr1 = [1,2,3];
getSize<number>(arr1);

const arr2 = ['1','2','3'];
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize(arr3); // 전달되는 매개변수를 보고 어떤 타입인 지 알아서 생략 가능.

const arr4 = [{}, {}, { name: "Time"}];
getSize(arr4);

// 예제 2: 인터페이스에서의 사용

interface Mobile<T> {
    name: string;
    price: number;
    option: T;
}

const m1:Mobile<{ color: string; coupon: boolean; }> = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    }
}
const m2:Mobile<string> = {
    name: "s21",
    price: 1000,
    option: "good"
}
//option의 타입을 동적으로 결정.


// 예제 3: extends를 사용
interface User {
    name: string;
    age: number;
}

interface Car {
    name: boolean;
    color: string;
}

interface Book {
    price: number;
}

const user: User = { name: "a", age: 10};
const car: Car = { name: true, color: "red" };
const book: Book = { price: 3000 };


function showName<T extends { name: string }>(data:T): string { //extends를 사용해 "T 타입은 name이 string인 프로퍼티를 포함" 함을 명시 해줘야한다.
    return data.name;
}

showName(user);
showName(car); // Car의 name 프로퍼티 타입이 string이 아니라서 오류
showName(book); // Book에 name 프로퍼티가 존재하지 않아서 오류


// function showName(data:{name: string}): string {
//     return data.name;
// }
// 이게 더 간단하지 않나..?