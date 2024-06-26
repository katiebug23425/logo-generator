//imports required
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle,} = require('./Lib/shapes');
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
        this.textChoice = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`

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
    console.log('You have successfully generated your logo.svg file!');
  }

  async function init() {
    var svgString = "";
	var svgFile = "logo.svg";

    const responses = await prompt(questions);
    var textChosen = '';
    textChosen = responses['Logo Text'];
    console.log("Logo Text: [" + textChosen + "]");
    textColorChosen = responses['Text Color'];
    console.log("Logo Text Color: [" + textColorChosen + "]");
    UserShapeChosen = responses['Shape'];
    console.log("You Chose This Shape: [" + UserShapeChosen + "]");
    shapeColorChosen = responses['Shape Color'];
    console.log("Shape Color: [" + shapeColorChosen + "]");

    let shapeChosen;

    if (UserShapeChosen === 'Square') {
        shapeChosen = new Square();
        console.log('You have chosen Square as your shape!');
    } else if (UserShapeChosen === 'Triangle') {
        shapeChosen = new Triangle();
        console.log('You have chosen Triangle as your shape!');
    } else if (UserShapeChosen === 'Circle') {
        shapeChosen = new Circle();
        console.log('You have chosen Circle as your shape!');
    }
    
    shapeChosen.setColor(shapeColorChosen);

        var Svg = new svgLogo();
        Svg.setTextChoice(textChosen, textColorChosen);
        Svg.setShapeChoice(shapeChosen);
        svgString = Svg.render();
        console.log('Creating your custom SVG file......')
        writeToFile(svgFile, svgString);
    }

    init()
