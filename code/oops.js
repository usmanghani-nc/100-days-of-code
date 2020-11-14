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

// Object Oriented Programming: Verify an Object's Constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

const myHouse = new House(4);

myHouse instanceof House;

// Object Oriented Programming: Understand Own Properties

const onProps = [];

for (const key in Dog) {
  if (Dog.hasOwnProperty(key)) {
    onProps.push(key);
  }
}

// Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code

Dog.prototype.age = 33;

for (const props in beagle) {
  if (beagle.hasOwnProperty(props)) {
    ownProps.push(props);
  } else {
    prototypeProps.push(props);
  }
}

// Object Oriented Programming: Understand the Constructor Property

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

// Object Oriented Programming: Change the Prototype to a New Object
// Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype

Dog.prototype = {
  constructor: Dog,
  numLegs: 6,
  eat: function () {
    console.log('om om');
  },
  describe: function () {
    console.log('dog name is' + this.name);
  },
};

// Object Oriented Programming: Understand Where an Object’s Prototype Comes From
// Object Oriented Programming: Understand the Prototype ChainPassed

const beagle = new Dog('pup2', 'coral');
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);

// Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself
// Object Oriented Programming: Inherit Behaviors from a Supertype
// Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};

const duck = Object.create(Animal.prototype);
const beagle = Object.create(Animal.prototype);

// Object Oriented Programming: Reset an Inherited Constructor Property
// Object Oriented Programming: Add Methods After Inheritance

Cat.prototype.constructor = Cat;

// Object Oriented Programming: Override Inherited Methods
// Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
  name: 'Donald',
  numLegs: 2,
};

let boat = {
  name: 'Warrior',
  type: 'race-boat',
};

// Only change code below this line
const glideMixin = function (obj) {
  obj.glide = function () {
    console.log('Flying, wooosh!');
  };
};

glideMixin(bird);
glideMixin(boat);

// Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  };
}

// Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log('A cozy nest is ready');
})();

// Object Oriented Programming: Use an IIFE to Create a Module

const funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log('Singing to an awesome tune');
      };
    },
  };
})();
