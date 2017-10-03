'use strict';

var user = {
     name: 'Michael',
     cities: ['Minneapolis', 'New York'],
     printPlacesLived: function printPlacesLived() {
          var cityMessages = this.cities.map(function (city) {
               return city + '!';
          });
          return cityMessages;
     }
};

console.log(user.printPlacesLived());
