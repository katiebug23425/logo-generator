//imports required
const inquirer = require('inquirer');
const fs = require('fs');
const Library = require('./Lib/shapes');
var prompt = inquirer.createPromptModule();

//class to render shape, text & color
class svgLogo{
    constructor(){
        this.shapeChoice = ''
        this.textChoice = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeChoice}${this.textChoice}</svg>`
    }
    setShapeChoice(shape){
        this.shapeChoice = shape.render()
    }
    setTextChoice(text,color){
        this.text.Choice = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`

    }
    
}


// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Logo Text',
        message: 'Please enter up to 3 characters for your logo text',
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

  async function init() {
    var svgString = "";
	var svgFile = "logo.svg";

    const responses = await inquirer.prompt(questions);
    var textChosen = '';
    textChosen = responses.text;
    console.log("Logo Text: [" + textChosen + "]");
    textColorChosen = responses['Text Color'];
    console.log("Logo Text Color: [" + textColorChosen + "]");
    shapeChosen = responses.shape;
    console.log("You Chose This Shape: [" + shape + "]");
    shapeColorChosen = responses['Shape Color'];
    console.log("Shape Color: [" + shapeColorChosen + "]");


  }
