// # 접근 제한자(Access modifier) - public, private, protected
/*
public - 자식 클래스, 클래스 인스턴스 모두 접근 가능 
protected - 자식 클래스에서 접근 가능
private - 해당 클래스 내부에서만 접근 가능 
*/
class Car {
    protected name: string = "car";
    color: string;
    static wheels = 4;
    constructor(color:string, name:string) {
        this.color = color;
        this.name = name;
    }
    start() {
        console.log("start");
        console.log(this.name);
        console.log(Car.wheels);
    }
}

class Bmw extends Car {
    constructor(color:string, name:string) {
        super(color, name);
    }
    showName() {
        console.log(this.name);
    }
}

const z4 = new Bmw("black", "zzzz4");

console.log(z4.name); //protected: 자식 Class에서는 접근 가능하나, 클래스 인스턴스를 통해 접근 불가능

