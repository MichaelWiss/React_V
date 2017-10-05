class Header extends React.Component {
	render() {
		return <p>This is from the Header</p>  
	}
}

class Action extends React.Component {
	render() {
		return (
		  <div>
		     <h1>Indecision</h1>
		     <h2>Put Your Life in the Hands of a Computer</h2>
		  </div>
		);  
	}
}

const jsx = (
	<div>
	   <h1>Title</h1>
	   <Header/>
	   <Action />
	</div>
);

ReactDOM.render(jsx, document.getElementById('app'));