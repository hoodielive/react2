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
        return !!this.major;         
    }
    getDescription() {
        let description = super.getDescription(); 

        if (this.hasMajor) {
            description += `Their major is ${this.major}`; 
        } 
        return description; 
    } 
}

class Traveler extends Person {
    constructor(name, myLocation) {
        super(name); 
        this.myLocation = myLocation; 
    }
    hasLocation() {
        return !!this.myLocation; 
    }

    getDescription() { 
        let description = super.getDescription(); 

        if (this.hasLocation) { 
            description = ` Hi. I am ${this.name}. Im visiting from ${this.myLocation}`
        }
        return description; 
    }
}

const daPerson = new Person('Larry', 27); 
console.log(daPerson); 

const new_student = new Student('Larry', 27, 'Computer Science'); 
console.log(new_student.getDescription());

const theTraveler = new Traveler('Larry', 'Philly'); 
console.log(theTraveler.getDescription()); 
