'use strict';

console.log('App.js is running!');

var app = {
	title: 'Indecision App',
	subtitle: 'We help you help yourself',
	options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;
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
	),
	React.createElement(
		'form',
		{ onSubmit: onFormSubmit },
		React.createElement('input', { type: 'text', name: 'option' }),
		React.createElement(
			'button',
			null,
			'Add Option'
		)
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
