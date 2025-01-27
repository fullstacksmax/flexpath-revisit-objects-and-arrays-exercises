/*Exercise 14: Implementing Inheritance with Prototypes

Problem:

Implement a simple class hierarchy without using ES6 classes. 

Create a `Shape` constructor function with a method 'area' that returns 0. 

Then, create a `Rectangle` constructor that inherits from `Shape` and 
overrides the 'area' method to compute the area of a rectangle.*/

function Shape() {}

Shape.prototype.area = function() {
    return 0;
}

function Rectangle(w, l) {
    this.w = w
    this.l = l
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return this.w * this.l;
}

const shape = new Shape

console.log(shape.area())

const rectangle = new Rectangle(4,5);
console.log(rectangle.area())