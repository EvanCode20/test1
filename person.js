"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, idNum) {
        this.name = name;
        this._age = age;
        this.idNum = idNum;
    }
    Person.prototype.personInfo = function (Person) {
        console.log(Person);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (value) {
        this.name = value;
    };
    return Person;
}());
exports.Person = Person;
