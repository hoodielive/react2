class Header extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                ' Indecision '
            ),
            React.createElement(
                'h2',
                null,
                ' Put your life in the hands of a computer '
            )
        );
    }
}

class Action extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                null,
                ' What should I do ? '
            )
        );
    }
}

class Options extends React.Component {
    render() {
        return React.createElement('div', null);
    }
}

class AddOption extends React.Component {
    render() {
        return React.createElement('div', null);
    }
}

const jsx = React.createElement(
    'div',
    null,
    React.createElement(Header, null),
    React.createElement(Action, null)
);

ReactDOM.render(jsx, document.getElementById('app'));