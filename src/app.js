class IndecisionApp extends React.Component {
	render() {
		return (
			<div> 
            <div>
		);
	}
}




class Header extends React.Component {
	render() {
		return (
		 <div>
		     <h1>Indecision</h1>
		     <h2>Put Your Life in the Hands of a Computer</h2>
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
           <h1>Option 1</h1>
           <h1>Option 2</h1>
           <h1>Option 3</h1>         
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

const jsx = (
	<div>
	   <h1>Title</h1>
	   <Header/>
	   <Action />
	   <Options />
	   <AddOption />
	</div>
);

ReactDOM.render(jsx, document.getElementById('app'));