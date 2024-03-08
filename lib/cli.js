const inquirer = require('inquirer');
const {Shape, Triangle, Square, Circle} = require('./shapes.js');
const writeFile = require('./writeFile.js');


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

                // Once user input is collected, what do I do with the response?
                // it should be fed into shapes right?
                const {text, textColor, shape, shapeColor} = response;

                let shapeInstance;

                switch(shape) {
                    case 'Circle':
                        shapeInstance = new Circle();
                        shapeInstance.setColor(shapeColor);
                        shapeInstance.setText(text);
                        shapeInstance.setTextColor(textColor);
                        shapeInstance.render();
                        console.log(shapeInstance);
                        console.log(shapeInstance.render());
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

                // Error here, cannot access this before initilization
                // I think the issue is that there needs to be a promise chain?

                const writeFile = new writeFile();

                writeFile.makeSVG(shapeInstance);
                
            })
            
    };

};

module.exports = CLI;
