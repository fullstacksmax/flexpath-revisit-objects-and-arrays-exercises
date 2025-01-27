/*
Exercise 12: Memory Management and Garbage Collection

Problem:

Explain how JavaScript's memory management works concerning the 
stack and the heap. 

Provide an example where improper handling of closures can lead to memory leaks.*/

/* when objects in javascript are put into the stack the memory location is actually a reference to 
this object in the heap. the reason javascript points to the heap is when an object variable is assigned
javascript does not know how large the object might be and could exceed the size that the stack can control.

When there are no longer any references to an object the memory allocated to storing this
object that is in the heap is released, so for instance if you were done with objectX but objectX 
still has references that point to it in the future it will not be released potentially causing memory leaks.
*/

const veryLargeArray = []
let uselessarray = []
function createArrays(i) {
for(let i = 0; i < 100; i++) {
    veryLargeArray.push({number: i})
}
return function () {
for(let i = 0; i <= 10; i++) {
    uselessarray[`array${i}`] = veryLargeArray
}};
}
const leak = createArrays() 
leak();
//console.log(veryLargeArray)
console.log('1 ',uselessarray.array1)
console.log('2 ',uselessarray.array2)
console.log('3 ',uselessarray.array3)
console.log('4 ',uselessarray.array4)
console.log('5 ',uselessarray.array5)
console.log('6 ',uselessarray.array6)
console.log('7 ',uselessarray.array7)
console.log('8 ',uselessarray.array8)
console.log('9 ',uselessarray.array9)
console.log('10 ',uselessarray.array10)

console.log(uselessarray.array1 === veryLargeArray)
console.log(uselessarray.array10 === veryLargeArray)



