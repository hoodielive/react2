var nameVar = 'Larry'; 
var nameVar = 'law'; 
console.log('nameVar', nameVar); 

let nameLet = "Larry"; 
nameLet = "Law"; 

const nameConst = 'Larry'; 
console.log('nameConst', nameConst); 

// Block scoping

var fullName = 'Law Sol'; 
if (fullName) {
    var firstName = fullName.split(' ')[0]; 
    console.log(firstName); 
}

