'use strict';

// if statements
// JSX - Javascript XML 


var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Indecision App '
    ),
    React.createElement(
        'p',
        null,
        ' This is some info '
    )
);

var user = {
    age: 23,
    location: "Pittsburgh"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            ' Location: ',
            location,
            ' '
        );
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        ' Age: ',
        user.age,
        ' '
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
