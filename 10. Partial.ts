// Partial<T>

interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
}

// interface User {
//     id?: number;
//     name?: string;
//     age?: number;
//     gender?: "m" | "f";
// }

//모든 프로퍼티를 선택적 프로퍼티로 바꿔준다.

let admin: Partial<User> = {
    id: 1,
    name: "Bod",
}
