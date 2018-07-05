const multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 3,
    multiply: (newArray) => {
        return this.numbers.map((number) => number * this.multiply); 
    }
}; 

console.log(multiplier.multiply()); 
