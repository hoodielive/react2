
// if statements
// JSX - Javascript XML 


var template = (
   <div> 
        <h1> Indecision App </h1>
        <p> This is some info </p>
    </div>
)

var user = {
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

ReactDOM.render(template2, appRoot); 

