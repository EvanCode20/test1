"use strict";
exports.__esModule = true;
var person_1 = require("./person");
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
var p = new person_1.Person("Evan", 12, 4324);
var q = new person_1.Person();
q.personInfo(p);
q.personInfo(q);
q.setName('John');
console.log(q.getName());
q.personInfo(q);
