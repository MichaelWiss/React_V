console.log('App.js is running!');


 const app = {
   	title: 'Indecision App',
   	subtitle: 'We help you help yourself',
   	options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
  	app.options.push(option);
  	e.target.elements.option.value = '';
  	render();
  }
};

const removeAll = () => {
	app.options = 0;
	render();
};





	   
const appRoot = document.getElementById('app');


const render = () => {
	const template = (
	<div>
	 <h1>{app.title}</h1>
	 {app.subtitle && <p>{app.subtitle}</p>}
	    <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
	    <p>{app.options.length}</p>
	    <button onClick={removeAll}>Remove All</button>
	    <ol>
	      <li>Item one</li>
	      <li>Item two</li>
	      <li>Item three</li>
	      <li>Item four</li>
	    </ol> 
	    <form onSubmit={onFormSubmit}>
           <input type="text" name="option"/>
           <button>Add Option</button>
	    </form>
	    
 
	  </div>
	);

    ReactDOM.render(template, appRoot);
};

render();



