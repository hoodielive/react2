
class IndecisionApp extends React.Component {
    render() {
        return(
            <div>
                <Header title="Test value"/>
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return(
            <div>
               <Option /> 
            </div>
        );
    }
}

class Option extends React.Component {
    render() { 
        return( 
            <div> 
                Option Returned
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>I am static content</p>
            </div>
        ); 
    } 
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 
