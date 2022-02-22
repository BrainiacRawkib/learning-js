class Car {
    constructor() {
    }
}

class InsurancePolicy {}

function makeInsurable(o) {
    o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
    o.getInsurancePolicy = function() { return this.insurancePolicy; }
    o.isInsured = function() { return !!this.insurancePolicy; }
}

// makeInsurable(Car); // Error

// const car1 = new Car();
// makeInsurable(Car);
// console.log(car1.addInsurancePolicy(new InsurancePolicy()));

makeInsurable(Car.prototype);
const car1 = new Car();
console.log(car1.addInsurancePolicy(new InsurancePolicy()));

class InsurancePolicy2{}

const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable2(o) {
    o[ADD_POLICY] = function(p) { this[_POLICY] = p; }
    o[GET_POLICY] = function() { return this[_POLICY]; }
    o[IS_INSURED] = function() { return !!this[_POLICY]; }
}