// Record<K, T>
// K: key, T: type
// K타입의 key과 T타입의 value의 프로퍼티로 구성된 Object 타입임을 명시한다.

// interface Score {
//     [id:'1'|'2'|'3'|'4']: 'A'|'B'|'C'|'D';
// }

type Grade = '1'|'2'|'3'|'4';
type Score = 'A'|'B'|'C'|'D';

const score: Record<Grade, Score> = {
    1: "B",
    2: "A",
    3: "A",
    4: "D",
}


//keyof를 활용한 Record의 쓰임.
interface User {
    id: number;
    name: string;
    age: number;
}

function isValid(user:User): Record<keyof User, boolean> {
    const result = {
        id: user.id > 0,
        name: user.name != '',
        age: user.age > 0,
    };
    return result;
}