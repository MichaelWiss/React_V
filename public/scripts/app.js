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
						),
						React.createElement(
									'li',
									null,
									'Item four'
						)
			)
);

var userName = 'Michael';
var templateTwo = React.createElement(
			'div',
			null,
			React.createElement(
						'h1',
						null,
						userName
			),
			React.createElement(
						'p',
						null,
						'Age: 26'
			),
			React.createElement(
						'p',
						null,
						'Location: Brooklyn, New York'
			)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
