Assignment: 
// only render the subtitle (and p tag)  if subtitle exist (logical and operator) 
// options
// render new p tag - if options.length > 0 "Here are your options" if not "No options" 

// if statements

// JSX - Javascript XML 

var app = {
    title: "Indecision App", 
    Subtitle: "Put your life in the hands of a computer",
    options: ['One', 'Two'],
}; 

var template = (
   <div> 
        <h1>{app.title} </h1>
        {app.subtitle && <p>{app.subtitle}</p>}     
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'} </p>

        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: "Larry",
    age: 23,
    location: "Pittsburgh"
} 

function getLocation(location) { 
    if(location) {
        return <p> Location: {location} </p>;
    }
} 

var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p> Age: {user.age} </p>}
        {getLocation(user.location)} 
    </div>
); 

var appRoot = document.getElementById('app'); 

ReactDOM.render(template, appRoot); 
