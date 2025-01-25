function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const alice = new Person("Alice");

console.log(alice.greet());
/*
  Explain here

  we have created an object alice with the type person
  we then access the greet function that is held in the person object prototype with the object alice
  console logs Hello, my name is Alice
*/
console.log(alice.hasOwnProperty("greet"));
/*
  Explain here
  alice does not access the greet function through her object, she accesses the object with the 
  Person prototype we assigned to her
*/
console.log(Object.getPrototypeOf(alice) === Person.prototype);
/*
  Explain here
  when we created alice we assigned that variable the Person prototype
*/
console.log(Person.prototype.constructor === Person);
/*
  Explain here
  Person === Person
*/
