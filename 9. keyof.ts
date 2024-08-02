//keyof

interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'
// 인터페이스의 모든 키를 유니온 타입으로 만들어준다.

const uk:UserKey = "gender";

