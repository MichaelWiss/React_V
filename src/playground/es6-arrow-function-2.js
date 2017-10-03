const user = {
	name: 'Michael',
	cities: ['Minneapolis', 'New York'],
	printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};

console.log(user.printPlacesLived());
