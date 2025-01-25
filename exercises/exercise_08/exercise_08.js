/*
	Exercise 8: Shallow vs. Deep Copying of Arrays
	
	Problem:

	Demonstrate the difference between shallow and deep copying of 
	arrays containing objects. 
	
	Given the array:
*/

const originalArray = [{ a: 1 }, { b: 2 }, { c: 3 }];

/*
	Create a shallow copy and a deep copy. 
	
	Modify a property in one of the objects in both copies and 
	show how it affects the original array.
*/


const shallow = []
const shallow2 = [...originalArray]
let deep;
originalArray.forEach((item) => {
	shallow.push(item)
})

const deep2 = originalArray.map((obj) => ({...obj}));

deep = structuredClone(originalArray)

console.log(originalArray)
console.log(shallow)
console.log(deep)
console.log(deep2)
console.log()
shallow[1].b = 7
originalArray[0].a = 5
deep[2].c = 9
console.log(originalArray)
console.log(shallow)
console.log(deep)
console.log(deep2)
