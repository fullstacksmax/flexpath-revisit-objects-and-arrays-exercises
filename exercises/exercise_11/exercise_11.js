/*Exercise 11: Using Object.defineProperty to Control Property Attributes

Problem:

Create an object `counter` with a property 'count' that cannot 
be set to a value less than the current value. 

Use Object.defineProperty to enforce this constraint.*/
const counter = {_count: null};

Object.defineProperty(counter,'count', {
    get(){
       return this._count

    },
    set(newval) {
    if(this._count === null || newval > this._count){
        this._count = newval
    }
    else {
        throw new Error("cannot decrease count")
    }
    }
})
console.log(counter)
counter.count = -5;
console.log(counter)

counter.count = 9
console.log(counter)