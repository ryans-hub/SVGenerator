const inquirer = require("inquirer");

const questions = [
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
];

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log('Inputs:', response);

    })
};

init();
