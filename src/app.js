class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision';
		const subtitle = 'Put Your Life in the Hands of a Computer';
		const options = ['Thing One', 'Thing Two', 'Thing Three' ]; 
		return (
			<div>
			  <Header title={title} subtitle={subtitle} />
			  <Action />
			  <Options options={options} />
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
		      <button>What Should I do?</button>
		   </div>
		);  
	}
}

class Options extends React.Component {
	render() {
		return (
         <div>
          <Option /> 
          {this.props.options.length}        
         </div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
          <div>
            Option component here
         </div>   
		);
	}
}

class AddOption extends React.Component {
	render() {
		return (
			<div>
			  <h1>Add Options</h1>
			</div>
		);
	}
} 



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


