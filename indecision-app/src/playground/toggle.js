let visibility = false; 

let toggleVisibility = () => {
    visibility = !visibility; 
    render(); 
}; 

const render = () => {
    const toggler = (
        <div> 
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'} 
            </button>
            { visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )} 
        </div>
    );

    ReactDOM.render(toggler, document.getElementById('app')); 
};

render(); 
