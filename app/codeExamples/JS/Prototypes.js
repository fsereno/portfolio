"use strict";

function Person(
    name, age, sex
) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var james = new Person("James", 30, "Male");
var jane = new Person("Jane", 18, "Female");

Person.prototype.description = function(){

    var heShe = this.sex === "Male" ? "He" : "She";
    var description = "This is " 
                + this.name 
                + ". " + heShe + " is " 
                + this.age + " years old and is a " 
                + this.sex + ".";
    return description
};

console.log(james.description());
console.log(jane.description());