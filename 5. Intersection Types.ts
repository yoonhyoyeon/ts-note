/* 교차 타입(Intersection Types) */

interface Car {
    name: string;
    start(): void;
}

interface Toy {
    name: string;
    color: string;
    price: number;
}

const toyCar: Toy & Car = {
    name: 'Ttobot',
    color: 'red',
    price: 1000,
    start() {
        console.log("부릉")
    }
}
toyCar.start();