'use strict';

console.log('App.js is running!');

var app = {
	title: 'Indecision App',
	subtitle: 'We help you help yourself',
	options: ['One', 'Two']
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		app.options.length > 0 ? 'Here are your options' : 'no options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		),
		React.createElement(
			'li',
			null,
			'Item three'
		),
		React.createElement(
			'li',
			null,
			'Item four'
		)
	)
);

var count = 0;
var addOne = function addOne() {
	count++;
	renderCounterApp();
};

var minusOne = function minusOne() {
	console.log('minusOne');
};

var reset = function reset() {
	console.log('reset');
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
	var templateTwo = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Count: ',
			count
		),
		React.createElement(
			'button',
			{ onClick: addOne },
			'+1'
		),
		React.createElement(
			'button',
			{ onClick: minusOne },
			'-1'
		),
		React.createElement(
			'button',
			{ onClick: reset },
			'Reset'
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
