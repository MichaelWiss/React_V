console.log('App.js is running!');

	var template = (
	<div>
	  <h1>This is JSX from app.js!</h1>
	  <p>from Michael</p>
	</div>
	);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);