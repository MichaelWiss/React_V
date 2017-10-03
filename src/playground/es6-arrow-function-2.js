const user = {
	name: 'Michael',
	cities: ['Minneapolis', 'New York'],
	printPlacesLived: function () {
      console.log(this.name);
      console.log(this.cities);
      this.cities.forEach(function (city) {
         console.log(this.name + ' has lived in ' + city);
      });
	}
};

user.printPlacesLived();
