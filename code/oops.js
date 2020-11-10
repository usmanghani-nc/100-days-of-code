console.log('Running');

let dog = {
  name: 'pitty',
  numLegs: 4,
  sayLegs: function () {
    return 'This dog has ' + this.numLegs + ' legs.';
  },
};

// Object Oriented Programming: Use Dot Notation to Access the Properties of an Object
// Object Oriented Programming: Create a Method on an Object
// Object Oriented Programming: Make Code More Reusable with the this Keyword

console.log(dog.name, dog.numLegs);

// Object Oriented Programming: Define a Constructor Function
// Object Oriented Programming: Use a Constructor to Create Objects
// Object Oriented Programming: Extend Constructors to Receive Arguments

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const terrier = new Dog('doggie', 'blue');
