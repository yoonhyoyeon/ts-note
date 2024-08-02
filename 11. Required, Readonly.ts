// Required<T>
// 모든 선택적 프로퍼티(?, Optional Properties) 필수로 입력하도록 만든다.
interface User {
    name: string;
    id: number;
    age?: number;
}

let admin: Required<User> = { // age가 없어서 오류
    name: 'Bob',
    id: 1
}


// Readonly<T>
// 모든 프로퍼티를 readonly로 설정.
let admin2: Readonly<User> = {
    name: 'Bob',
    id: 1
}

admin2.id = 2;// 오류