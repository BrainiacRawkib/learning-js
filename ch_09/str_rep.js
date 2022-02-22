class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    static vin(){
        return 'vin'
    }
    toString(){
        return `${this.make} ${this.model}: ${Car.vin}`
    }
}

c = new Car('Tesla', '4');
console.log(c.toString());