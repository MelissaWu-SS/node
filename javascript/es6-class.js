// Person
// Teacher extends Person
// Student extends Person
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }
}

class Teacher extends Person {
    constructor(name, age, gender, subject) {
        super(name, age, gender);
        this.subject = subject;
    }

    getAge() {
        return super.getAge() + 5;
    }

    getSubject() {
        return this.subject;
    }
}

console.log(typeof Teacher);
console.log(Teacher.prototype);
console.log(Teacher === Teacher.prototype.constructor);

const teacher = new Teacher('Melissa', 30, 'Female', 'Chinese');
console.log(teacher.getAge());