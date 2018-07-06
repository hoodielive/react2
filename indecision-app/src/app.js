Assignment: 

const app = {
    title: "Indecision App", 
    Subtitle: "Put your life in the hands of a computer",
    options: ['One', 'Two'],
}; 

const template = (
   <div> 
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}     
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'} </p>

        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0; 
const addOne = () => {
    count++; 
    renderCounterApp(); 
};

const minusOne = () => {
    console.log('minusOne');
}; 

const reset = () => {
    console.log('reset');
}

const templateThree = (
    <div>
        <h1> MinusOne: {count} </h1> 
        <button onClick={minusOne}>-1</button> 
        <h1> Reset: {count} </h1>
        <button onClick={reset}>0</button> 
    </div>
)
const appRoot = document.getElementById('app'); 

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

renderCounterApp(); 
