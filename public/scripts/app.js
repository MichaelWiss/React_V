'use strict';

console.log('App.js is running!');

var appInfo = {
						title: 'Indecision App',
						subtitle: 'We help you help yourself'
};

var template = React.createElement(
						'div',
						null,
						React.createElement(
												'h1',
												null,
												appInfo.title
						),
						React.createElement(
												'p',
												null,
												appInfo.subtitle
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

var user = {
						name: 'Michael',
						age: 27,
						location: 'New York'
};

function getLocation(location) {
						if (location) {
												return React.createElement(
																		'p',
																		null,
																		'Location: ',
																		location
												);
						}
}

var templateTwo = React.createElement(
						'div',
						null,
						React.createElement(
												'h1',
												null,
												user.name
						),
						React.createElement(
												'p',
												null,
												'Age: ',
												user.age
						),
						getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
