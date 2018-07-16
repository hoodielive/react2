
class IndecisionApp extends React.Component {
    render() {
	const title = 'Indecision';
	const subtitle = "!!Put Your Life in the hands of a computer"
	const options = ['Thing one', 'Thing two', 'Thing three', 'Three four'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
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
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
		{this.props.options.length} 
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
