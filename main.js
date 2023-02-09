var a = [true, 5, false, 'nine', 56, 'my hero'];
console.log(a);
var Colour;
(function (Colour) {
    Colour[Colour["red"] = 0] = "red";
    Colour[Colour["green"] = 1] = "green";
    Colour[Colour["blue"] = 2] = "blue";
})(Colour || (Colour = {}));
;
var thiscolour = Colour.blue;
console.log(thiscolour);
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
var p = new Person("Evan", 12, 4324);
var q = new Person();
q.personInfo(p);
q.personInfo(q);
q.setName('John');
console.log(q.getName());
q.personInfo(q);
