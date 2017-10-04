console.log('App.js is running!');


 const app = {
   	title: 'Indecision App',
   	subtitle: 'We help you help yourself',
   	options: ['One', 'Two']
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
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
	    <form onSubmit={onFormSubmit}>
           <input type="text" name="option"/>
           <button>Add Option</button>
	    </form> 
	  </div>
	);
const appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);



