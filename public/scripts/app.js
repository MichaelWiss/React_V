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
var userAge = '27';
var userLocation = 'Brooklyn, New York';

var templateTwo = React.createElement(
			'div',
			null,
			React.createElement(
						'h1',
						null,
						userName.toUpperCase()
			),
			React.createElement(
						'p',
						null,
						'Age: ',
						userAge
			),
			React.createElement(
						'p',
						null,
						'Location: ',
						userLocation
			)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
