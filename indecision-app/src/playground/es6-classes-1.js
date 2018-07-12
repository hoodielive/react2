
class Person {
    constructor(name = 'Anonoymous') {
        this.name = name || 'test'; 
    }
    getGreeting() {
        return 'hi!'; 
    }
}

const me = new Person('Law');  
console.log(me.getGreeting());

const other = new Person(); 
console.log(other.getGreeting); 
