
export class Person{
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