/*
	Exercise 7: Combining Arrays with Spread Operator
	
	Problem:

	Given two arrays:
*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

/*
	Combine them into a single array `combined` using the spread operator. 
	Then, create a deep clone of `combined` and verify that modifying the 
	clone does not affect the original.
*/

let combined = []
combined = [...array1,...array2];

const clone = []


combined.forEach((item) => {
	clone.push(item);
})


console.log(combined)
console.log(clone)
clone.splice(1,1)
console.log(combined)
console.log(clone)