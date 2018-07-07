
let count = 0; 
const addOne = () => {
    count++; 
    renderCounterApp(); 
};

const minusOne = () => {
    count--;
    renderCounterApp(); 
}; 

const reset = () => {
    count = 0; 
    renderCounterApp();
};


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    ); 

    ReactDOM.render(templateTwo, appRoot); 
}; 
const templateThree = (
    <div>
        <h1> MinusOne: {count} </h1> 
        <button onClick={minusOne}>-1</button> 
        <h1> Reset: {count} </h1>
        <button onClick={reset}>0</button> 
    </div>
);
renderCounterApp(); 
