// 1. Write a test to test functionality, should fail bc no code has been written
// 2. Write code so the tests pass, ensure minimum coding is done to make the test pass

// Need to test for 3 classes: triangle, circle, and square

// creates testing suite for Shape
describe('shape', () => {
    // test to check if triangle inherits from shape
    describe('Triangle', () => {
        it('should inherit from the Shape class, and create a triangle', () => {
          const shape = new Triangle();
          shape.setColor("blue");
          expect(shape.render()).toEqual('<polygon points="150, 18, 244, 182 56, 182" fill="blue"/>');
        });
    });
});