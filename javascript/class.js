function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'green'];
}

SuperType.prototype.getName = function {
    return this.name;
}

function SubType(name) {
    SuperType.call(this, name);
    this.age = 30;
}

SubType.prototype = new SuperType();

SubType.prototype.getAge = function() {
    return this.age;
}
