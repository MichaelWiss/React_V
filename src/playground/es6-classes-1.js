class Person {
   constructor(name = 'Anonymous', age='0') {
   	 this.name = name;
   	 this.age = age;
   }
   getDescription() {
   	return `${ this.name } is ${ this.age } years old.`;
   }
}

class Student extends Person {
     constructor(name, age, major) {
       super(name, age);	
       this.major = major;
     }
     hasMajor(){
     	return !!this.major;
    }
}

const me = new Student('Michael', 26, 'Fine Art');
console.log(me.hasMajor());

const other = new Student('Antoinette', 30 );
console.log(other.hasMajor());



