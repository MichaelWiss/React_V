console.log('App.js is running!');

	var template = (
	<div>
	  <h1>This is JSX from app.js!</h1>
	  <p>from Michael</p>
	  <ol>
	    <li>Item one</li>
	    <li>Item two</li>
	    <li>Item three</li>
	    <li>Item four</li>
	  </ol>  
	</div>
	);

	var templateTwo = (
	<div>
	  <h1>Michael Wiss</h1>
        <p>Age: 26</p>
        <p>Location: Brooklyn, New York</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);