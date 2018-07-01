
//JSX - Javascript XML 
var template = (
   <div> 
        <h1> Indecision App </h1>
        <p> This is some info </p>
    </div>
)

var user = {
    name: "Larry",
    age: 23,
    location: "Pittsburgh"
} 

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p> Age: {user.age} </p> 
        <p> Location: {user.location} </p> 
    </div>
); 

var appRoot = document.getElementById('app'); 

ReactDOM.render(template2, appRoot); 

