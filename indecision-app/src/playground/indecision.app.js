
const app = {
    title: "Indecision App", 
    Subtitle: "Put your life in the hands of a computer",
    options: ["1", "2"],
}; 

const removeAll = (f) => {
    app.options = [];
    render(); 
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value; 

    if (option) {
        app.options.push(option); 
        e.target.elements.option.value = '';
        render();  
    }
}

const appRoot = document.getElementById('app'); 

const numbers = [55, 101, 1000]; 

const render = () => {
    const template = (
       <div> 
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}     
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            {
                numbers.map((number) => {
                    return number * 2; 
                })
            }
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/> 
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot); 
}

render();  
