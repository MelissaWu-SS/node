// function Person() {};

// console.log(typeof Person.prototype);
// console.log(Person.prototype);
// console.log(Person.prototype.constructor === Person);

// console.log(Person.prototype.__proto__ === Object.prototype);

// const person1 = new Person();
// console.log(person1.__proto__ === Person.prototype);

// console.log(Object.getPrototypeOf(person1) === Person.prototype);

// Person.prototype.name = 'Nicholas';
// Person.prototype.age = 29;
// Person.prototype.job = 'Software engineer';
// Person.prototype.sayName = function() {
//     console.log(this.name);
// }

// let person1 = new Person();
// person1.sayName();
// console.log(person1.job)

// let person2 = new Person();
// person2.sayName();
// console.log(person2.job)

// console.log(person1.sayName === person2.sayName);

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subProperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subProperty;
};
