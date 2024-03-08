const inquirer = require('inquirer');

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
            });
    };

};

module.exports = CLI;
