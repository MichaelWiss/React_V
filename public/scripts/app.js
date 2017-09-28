'use strict';

console.log('App.js is running!');

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'This is JSX from app.js!'
	),
	React.createElement(
		'p',
		null,
		'from Michael'
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
		)
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
