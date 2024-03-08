const inquirer = require('inquirer');
const {Shape, Triangle, Square, Circle} = require('./shapes.js');


class CLI {
    constructor() {

    };

    start() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Enter up to 3 characters',
                    name: 'text',
                },
                {
                    type: 'input',
                    message: 'Enter a color keyword for the text (OR a hexadecimal number)',
                    name: 'textColor',
                },
                {
                    type: 'list',
                    message: 'Choose a shape',
                    choices: ['Circle', 'Triangle', 'Square'],
                    name: 'shape',
                },
                {
                    type: 'input',
                    message: 'Enter a color keyword for the shape (OR a hexadecimal number)',
                    name: 'shapeColor',
                },
            ])
            .then((response) => {
                console.log('Inputs: ', response);
                const {text, textColor, shape, shapeColor} = response;

                let shapeInstance;

                switch(shape) {
                    case 'Circle':
                        shapeInstance = new Circle(text, textColor, shapeColor);
                        break;
                    case 'Triangle':
                        shapeInstance = new Triangle(text, textColor, shapeColor);
                        break;
                    case 'Square':
                        shapeInstance = new Square(text, textColor, shapeColor);
                        break;
                    default:
                        console.error('Invalid shape choice');
                        return;
                }
                
            });
    };

};

module.exports = CLI;
