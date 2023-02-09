
let a: any[] = [true, 5 , false , 'nine', 56, 'my hero'];
console.log(a);

enum Colour { red = 0, green = 1, blue = 2};

let thiscolour = Colour.blue;

console.log(thiscolour);

class Person{
    private name?: string;
    _age?: number;
    idNum?: number;
    

    constructor(name?: string, age?: number, idNum?: number){
        this.name = name;
        this._age = age;
        this.idNum = idNum;
    }

    personInfo(Person:Person){
        console.log(Person);
    }

    getName(){
        return this.name;
    }

    setName(value: string){
        this.name = value;
    }
    
    
    

}


let p = new Person("Evan", 12, 4324);
let q = new Person();
q.personInfo(p);
q.personInfo(q);
q.setName('John');
console.log(q.getName());
q.personInfo(q);


