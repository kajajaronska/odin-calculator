/////////////////////////
// SELECTING QUERIES

const numBtn = document.querySelectorAll('.num-btn');
const funcBtn = document.querySelectorAll('.function-btn');
const equalBtn = document.querySelector('.equal-btn');
const allClearBtn = document.querySelector('.clear-btn');

const display_currentValue = document.querySelector('.display-value');
const display_calculations = document.querySelector('.calculations');

/////////////////////////
//  DISPLAY FUNCTIONALITY

let currentValue = null;
let calculations;
let result;


/////////////////////////
// EVENT LISTENERS FOR ALL BUTTONS


// All digits buttons
numBtn.forEach((button)=> {
    button.addEventListener('click', () => {
        currentValue = button.dataset.value;
        assignNumVariables();
    });
});

// All operator buttons (add, substract, multiply, divide)
funcBtn.forEach((button) => {
    button.addEventListener('click', () => {
        currentValue = button.dataset.value;
        assignOperator();
    });
});

// Equal sign button
equalBtn.addEventListener('click',() => {
    operate(firstNumber,secondNumber,operator);
    display_currentValue.textContent = result;

// Add a function to repeat latest calculation on the result if button is clicked again;


    console.log(result);
});

// All Clear (AC) button 

allClearBtn.addEventListener('click', () => {

    // Resetting all variables and arrays
    firstNumberArray = []; 
    secondNumberArray = [];
    firstNumber = null;
    secondNumber = null;
    operator = null;

    // Updating display
    display_currentValue.textContent = 0;

    console.log(firstNumber, secondNumber, firstNumberArray, secondNumberArray);
});


/////////////////////////
// CALCULATOR FUNCTIONALITY

// firstNumber | operator | secondNumber | result


let firstNumberArray = []; 
let secondNumberArray = [];
let firstNumber = null;
let secondNumber = null;
let operator = null;

const assignNumVariables = function () {

    // Assigning first number of the calculation with one and more digits
    if(!firstNumberArray.length && !secondNumberArray.length && !operator) {
        firstNumberArray.push(currentValue);
        firstNumber = +(firstNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = firstNumber;

        console.log("First digit clicked");
        console.log(firstNumber, secondNumber, operator);

        return;
    
    } else if((firstNumberArray.length >= 1) && !secondNumberArray.length && !operator){
        firstNumberArray.push(currentValue);
        firstNumber = +(firstNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = firstNumber;

        console.log("Next digit clicked");
        console.log(firstNumber, secondNumber, operator);

        return;
    } 
    // Assigning second number of the calculation with one or more digits
    else if (firstNumberArray.length && operator && !secondNumberArray.length) {
        secondNumberArray.push(currentValue);
        secondNumber = +(secondNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = secondNumber;

        console.log("First digit of the second number everyone!");
        console.log(firstNumber, secondNumber, operator);

        return;
    } else if(firstNumberArray.length && operator && secondNumberArray.length) {
        secondNumberArray.push(currentValue);
        secondNumber = +(secondNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = secondNumber;

        console.log("second digit! second number!");
        console.log(firstNumber, secondNumber, operator);

        return;
    };


};

const assignOperator = function() {

    // Assigning operator if there isn't one
    if (firstNumberArray.length && !secondNumberArray.length && !operator) operator = currentValue;

    // Assigning operator if user changes its mind, i.e. clicks "2", then "+", then "-"
    if(operator) operator = currentValue;

    console.log("Operator clicked! yo!");
    console.log(firstNumber, secondNumber, operator);
};


/////////////////////////
// BASIC CALCULATOR FUNCTIONS

const add = (a,b) => a + b;
const substract = (a,b) => a-b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;


const operate = function(firstNum, secondNum, operator) {
    
    if(operator==='+') result = add(firstNum,secondNum);
    if(operator==='-') result = substract(firstNum,secondNum);
    if(operator==='*') result = multiply(firstNum,secondNum);
    if(operator==='/') result = divide(firstNum,secondNum);
    
    return result;

};


