console.log('App.js is running!');


 const app = {
   	title: 'Indecision App',
   	subtitle: 'We help you help yourself',
   	options: ['One', 'Two']
   };

const template = (
	  <div>
	    <h1>{app.title}</h1>
	    {app.subtitle && <p>{app.subtitle}</p>}
	    <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
	    <ol>
	      <li>Item one</li>
	      <li>Item two</li>
	      <li>Item three</li>
	      <li>Item four</li>
	    </ol>  
	  </div>
	);
const appRoot = document.getElementById('app');






