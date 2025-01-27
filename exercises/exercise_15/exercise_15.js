/*
Exercise 15: Customizing Property Descriptors

Problem:

Create an object `data` with a property 'items' that is an array. 

Use Object.defineProperty to make 'items' read-only and prevent it from 
being deleted, but allow the array's content to be modified.*/

const data = {
    items: []
}

Object.defineProperty(data, "items", {
    value: [],
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(data.items)

data.items = [1, 2, 3]

console.log(data.items)

data.items.push(1)
data.items.push(2)


console.log(data.items)

delete data.items
console.log(data.items)