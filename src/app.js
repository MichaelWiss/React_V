console.log('App.js is running!');


   var appInfo = {
   	title: 'Indecision App',
   	subtitle: 'We help you help yourself'
   }

	var template = (
	<div>
	  <h1>{appInfo.title}</h1>
	  <p>{appInfo.subtitle}</p>
	  <ol>
	    <li>Item one</li>
	    <li>Item two</li>
	    <li>Item three</li>
	    <li>Item four</li>
	  </ol>  
	</div>
	);

	var user = {
       name: 'Michael',
       age: 27,
       location: 'New York'
	}; 


	var templateTwo = (
	<div>
	  <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);