class Person {
    constructor(name = 'Anonymous', age = 0) {
       this.name = name;  
       this.age = age; 
    }
    getDescription() {
        return ` ${this.name} is ${this.age} years old ` 
    }
}

const daPerson = new Person('Larry', 27); 
console.log(daPerson.getDescription()); 

const anony = new Person(); 
console.log(anony.getDescription()); 
