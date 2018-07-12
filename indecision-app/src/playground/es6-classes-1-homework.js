class Person {
    constructor(name = 'Anonymous', age = 0) {
       this.name = name;  
       this.age = age; 
    }
    getDescription() {
        return ` ${this.name} is ${this.age} years old ` 
    }
}

class Student extends Person {
   constructor(name, age, major) {
       super(name, age); 
       this.major = major; 
   }
    hasMajor() {
        
    }
}

const daPerson = new Person('Larry', 27); 
console.log(daPerson); 

const anony = new Person(); 
console.log(anony); 

const new_student = new Student('Larry', 27, 'Computer Science'); 
console.log(new_student);

