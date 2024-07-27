/* 리터럴, 유니온 타입(literal, union type) */


const userName1 = "Bob"; // 문자열 리터럴 타입
let userName2: string | number = "Tom";

userName2 = 3;

type Job = "police" | "developer" | "teacher"; // -> |(OR)은 유니온 타입

interface User {
    name: string;
    job: Job;
}

const user:User = {
    name: "Bob",
    job: "student" // Job 타입에 없으므로 오류
}

interface HighSchoolStudent {
    name: string;
    grade: 1 | 2 | 3; // -> |(OR)은 유니온 타입
}


interface Car {
    name: "car"; // car 타입
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile"; //mobile 타입
    color: string;
    call(): void;
}

function getGift(gift:Car | Mobile) {
    console.log(gift.color);
    if(gift.name === "car") gift.start(); // if문으로 분기하지 않고 그냥 start 함수를 호출하면 오류 발생
    else gift.call();
}

// 동일한 이름의 프로퍼티(name)를 다른 타입으로 정의해 분기시키면 여러 개의 인터페이스를 구분할 수 있다. -> 식별 가능한 유니온 타입