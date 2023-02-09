import { Person } from './person';

let a: any[] = [true, 5 , false , 'nine', 56, 'my hero'];
console.log(a);

enum Colour { red = 0, green = 1, blue = 2};

let thiscolour = Colour.blue;

console.log(thiscolour);

let p = new Person("Evan", 12, 4324);
let q = new Person();
q.personInfo(p);
q.personInfo(q);
q.setName('John');
console.log(q.getName());
q.personInfo(q);


