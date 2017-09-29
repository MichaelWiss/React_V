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

    var userName = 'Michael';
    var userAge = '27';

	var templateTwo = (
	<div>
	  <h1>{userName.toUpperCase()}</h1>
        <p>{userAge}</p>
        <p>Location: Brooklyn, New York</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);