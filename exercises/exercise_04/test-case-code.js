// When ready, use the code below for testing



const numbers = [1, 2, 3, 4, 5];


Object.defineProperty(Array.prototype, "last",{
  value: function (){
    const last = numbers.length -1 
    return numbers[last];
  },
  enumerable: false,
  writable: true,
  configurable: true,
});


console.log(numbers.last()); // Outputs: 5



// Enumerating properties
for (let key in numbers) {
  console.log(key); // Outputs: 0,1,2,3,4 (does not include 'last')
}
