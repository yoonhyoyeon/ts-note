// NonNullable<Type>
// T에서 null과 undefined를 제외한 타입을 구성한다.
type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>; //string | void;
