'use strict';

var user = {
	name: 'Michael',
	cities: ['Minneapolis', 'New York'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		return this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city;
		});
	}
};

console.log(user.printPlacesLived());
