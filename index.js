const inquirer = require('inquirer');
const fs = require('fs');
const Library = require('./Lib/shapes');
var prompt = inquirer.createPromptModule();

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Logo Text',
        message: 'Please enter up to 3 letters and/or characters for your logo text',
      },

      {
        type: 'input',
        name: 'Text Color',
        message: 'Please enter a color for the text using a color keyword or a hexadecimal number',
      },

      {
        type: 'list',
        name: 'Shape',
        message: 'Which shape would you like your logo to be?',
        choices: ['Circle', 'Triangle', 'Square']
      },

      {
        type: 'input',
        name: 'Shape Color',
        message: 'Please enter a color for the shape using a color keyword or a hexadecimal number',
      },
    ];

    // function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log('Generated logo.svg');
  }
