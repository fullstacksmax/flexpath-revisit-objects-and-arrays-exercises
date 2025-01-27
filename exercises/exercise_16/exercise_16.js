/* 
Exercise 16: Advanced Use of Object.create and Prototypes

Problem:

Create a function `createUser` that returns an object with a 
'name' property and a method `sayHello`. 

Use Object.create to set the prototype of the returned object to a 
shared prototype object. 

Demonstrate that multiple users share the same prototype. */
const person = {
    sayHello: function () {
        return `hello my name is ${this.name}`
    }
}

function createUser(name) {
    const user = Object.create(person);
    user.name = name;
    return user;
}

const user1 = createUser("max")
const user2 = createUser("lily")
console.log(user1.sayHello())
console.log(user2.sayHello())

console.log(Object.getPrototypeOf(user1) === person)
console.log(Object.getPrototypeOf(user2) === person)
