// 1. Write a test to test functionality, should fail bc no code has been written
// 2. Write code so the tests pass, ensure minimum coding is done to make the test pass

// Need to test for 3 classes: triangle, circle, and square

// const shape = require('./shapes.js');
const {Shape, Triangle, Square, Circle} = require('./shapes.js');

// creates testing suite for Shape
describe('Shape', () => {
    // test to check if triangle inherits from Shape
    describe('Triangle', () => {
        it('should inherit from the Shape class, and create a triangle', () => {
          const shape = new Triangle();
          shape.setColor("blue");
          expect(shape.render()).toEqual('<polygon points="150, 18, 244, 182 56, 182" fill="blue"/>');
        });
    });
});

describe('Shape', () => {
    // test to check if Square inherits from Shape
    describe('Square', () => {
        it('should inherit from the Shape class, and create a square', () => {
          const shape = new Square();
          shape.setColor("blue");
          expect(shape.render()).toEqual('<polygon points="100, 100 200,100 200,200 100,200" fill="blue"/>');
        });
    });
});

describe('Shape', () => {
    // test to check if Circle inherits from Shape
    describe('Circle', () => {
        it('should inherit from the Shape class, and create a circle', () => {
          const shape = new Circle();
          shape.setColor("blue");
          expect(shape.render()).toEqual('<circle cx="150" cy="150" r="50" "fill="blue"/>');
        });
    });
});