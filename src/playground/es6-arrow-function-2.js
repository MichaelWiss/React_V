const user = {
	name: 'Michael',
	cities: ['Minneapolis', 'New York'],
	printPlacesLived() {
      const cityMessages = this.cities.map((city) => {
      	return city + '!';
      });
      return cityMessages;
	}
};

console.log(user.printPlacesLived());
