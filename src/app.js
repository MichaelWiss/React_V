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
	handlePick(){
       alert('handlePick');
	}
	render() {
		return (
		   <div>
		      <button onClick={this.handlePick}>What Should I do?</button>
		   </div>
		);  
	}
}

class Options extends React.Component {
    handleRemove(){
    	aler
    }
	render() {
		return (
         <div>
         <button onClick={this.handleRemove}>Remove options</button>
          <Option /> 
          {this.props.options.map((option) => <Option key={option} optionText={option} />)
          }       
         </div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
          <div>
            {this.props.optionText}
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


