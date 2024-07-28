/* 추상 클래스(Abstract Class) */
abstract class Car {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
    abstract doSomething():void; //추상 클래스 내부의 추상 메서드는 상속받은 클래스에서 구현해줘야 한다.
}

const car = new Car("red"); // 추상 클래스는 new를 사용해 인스턴스를 만들 수 없다.

class Bmw extends Car {
    constructor(color: string) {
        super(color);
    }
    doSomething() { //추상 클래스 내부의 추상 메서드는 상속받은 클래스에서 구현해줘야 한다.
        alert(3);
    }
}

const z4 = new Bmw("black");