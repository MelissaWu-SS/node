// Person
// Teacher extends Person
// Student extends Person
/**
 * 
 * @param {String} name 
 * @param {Number} age 
 * @param {String} gender 
 */
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Person.prototype = {
    constructor: Person,
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
    getGender() {
        return this.gender;
    }
};

/**
 * 
 * @param {String} name 
 * @param {Number} age 
 * @param {String} gender 
 * @param {String} subject 
 */
function Teacher(name, age, gender, subject) {
    Person.call(this, name, age, gender);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

Teacher.prototype.getSubject = function() {
    return this.subject;
}

const teacher = new Teacher();
console.log(teacher instanceof Person);
console.log(teacher instanceof Teacher);
console.log(Person.prototype.constructor);
console.log(Teacher.prototype.constructor);