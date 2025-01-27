/*Exercise 10: Protecting Objects with Object.freeze and Object.seal

Problem:

Demonstrate the difference between Object.freeze and Object.seal. 

Create an object `config` and:

1. Use Object.seal on it, then try to add, modify, and delete properties.
2. Use Object.freeze on another object `settings`, and 
	 attempt the same operations.

Explain the outcomes.*/

const max = {
    lastname: "",
    age: "",
    
}

const nissan = {
    model: "",
    year: ""
}


nissan.model = "altima"
nissan.year = 2016

max.lastname = "Vontz";
max.age = 34;

console.log(max)
console.log(nissan)

Object.seal(max)
Object.freeze(nissan)

max.height = "6'4"
max.age = 28
delete max.lastname

nissan.color = "white"
nissan.model = "maxima"
delete nissan.year

console.log()
console.log(max)
console.log(nissan)
