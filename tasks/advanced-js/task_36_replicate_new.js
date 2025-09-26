/*
TL;DR: write a nouveau function that replicates all the behavior of the new operator.

Aside: Operators?
In JavaScript, perhaps no operator is as complicated as new. "Wait; new is an operator?" Yep; an operator is something that operates on one or more operands and evaluates to a result. Binary operators like + and !== operate on two operands:

5 + 5 evaluates to 10
{} !== [] evaluates to true
Whereas unary operators like + and typeof take one operand (hmm, + is both a unary and binary operator, how 'bout that!):

+'5' evaluates to 5
typeof '5' evaluates to 'string'
Ultimately operators are functions with different syntax. They take inputs/operands and return/evaluate to something. In fact, some JS operators can be re-written as functions.

New
So what about new? Well, the unary operator new is intended to create "instances" of a constructor function. To be more precise, the operation new Constructor(arg1, arg2, ...argX) does the following:

Creates an empty object (which we'll call instance) which prototypally inherits from Constructor.prototype
Binds Constructor to instance (meaning this is instance) and invokes Constructor with any arguments passed in
If the return value of Constructor is an object (including arrays, functions, dates, regexes, etc.) the operation evaluates to that object
Otherwise, the operation evaluates to instance
Let's see some examples:

function Person (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function(){
  return 'My name is ' + this.name + ' and I am ' + this.age;
};
var john = new Person('John', 30);
var jack = new Person('Jack', 40);
console.log( john.introduce() ); // My name is John and I am 30
console.log( jack.introduce() ); // My name is Jack and I am 40

function ReturnsArray (name) {
  this.name = name;
  return [1, 2, 3];
}
var arr = new ReturnsArray('arr?');
console.log( arr.name ); // undefined
console.log( arr ); // [1, 2, 3]
Oof! No wonder people get confused about new. The good news is… everything new can do, you can do too.

Exercise
Your mission: write a function nouveau (that's French for "new") which takes one function parameter (the constructor), plus an unknown number of additional parameters of any type (arguments for the constructor). When invoked, nouveau should do everything new does and return the same object new would evaluate to, as specified above.

var john = nouveau(Person, 'John', 30); // same result as above
*/
function nouveau(constructor, ...args) {
  const instance = Object.create(constructor.prototype);
  const result = constructor.apply(instance, args);
  return (result && (typeof result === 'object' || typeof result === 'function')) ? result : instance;
}
function Person (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function(){
  return 'My name is ' + this.name + ' and I am ' + this.age;
}
var john = nouveau(Person, 'John', 30);
var jack = nouveau(Person, 'Jack', 40);
console.log( john.introduce() );
console.log( jack.introduce() );
function ReturnsArray (name) {
  this.name = name;
  return [1, 2, 3];
} 
var arr = nouveau(ReturnsArray, 'arr?');
console.log( arr.name );
console.log( arr );

// function Cuboid(length, width, height) {
//   this.length = length;
//   this.width = width;  
//   this.height = height;
// }
// Object.defineProperty(Cuboid.prototype, 'surfaceArea', {
//   get: function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }
// });end of recent edits

Object.defineProperty(Cuboid.prototype, 'volume', {
  get: function() {
    return this.length * this.width * this.height;
  }
});

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}

const cuboid = new Cuboid(2, 3, 4);
console.log(cuboid.surfaceArea);
console.log(cuboid.volume);

const cube = new Cube(3);
console.log(cube.surfaceArea);
console.log(cube.volume);
console.log(cube instanceof Cube);
console.log(cube instanceof Cuboid);
console.log(cube instanceof Object);