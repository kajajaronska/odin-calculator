/////////////////////////
// SELECTING QUERIES

const numBtn = document.querySelectorAll('.num-btn');
const funcBtn = document.querySelectorAll('.function-btn');
const equalBtn = document.querySelector('.equal-btn');
const allClearBtn = document.querySelector('.clear-btn');
const deleteBtn = document.querySelector('.delete-btn');

const display_currentValue = document.querySelector('.display-value');
const display_calculations = document.querySelector('.calculations');

/////////////////////////
//  DISPLAY FUNCTIONALITY

let currentValue = null;
let calculations;
let result = null;

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

        console.log(firstNumber,secondNumber, operator);
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

// Delete button 

deleteBtn.addEventListener('click', ()=>{
    // Deleting last digit of the first number
    if(!secondNumberArray.length) {
        firstNumberArray.pop();
        firstNumber = +(firstNumberArray.join(''));
        display_currentValue.textContent = firstNumber;

        console.log(firstNumber,secondNumber,operator)

        return;
    };
    
    // Deleting last digit of the second number
    if(secondNumberArray.length) {
        secondNumberArray.pop();
        secondNumber = +(secondNumberArray.join(''));
        display_currentValue.textContent = secondNumber;

        console.log(firstNumber,secondNumber,operator);

        return;
    };
    
});


/////////////////////////
// CALCULATOR FUNCTIONALITY

// firstNumber -> operator -> secondNumber -> result


let firstNumberArray = []; 
let secondNumberArray = [];
let firstNumber = null;
let secondNumber = null;
let operator = null;

const assignNumVariables = function () {

    // Assigning first number of the calculation with one and more digits
    if(!firstNumber && !secondNumber && !operator) {
        firstNumberArray.push(currentValue);
        firstNumber = +(firstNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = firstNumber;

        console.log("First digit clicked");
        console.log(firstNumber, secondNumber, operator);

        return;
    
    } else if((firstNumberArray.length >= 1) && !secondNumber && !operator){
        firstNumberArray.push(currentValue);
        firstNumber = +(firstNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = firstNumber;

        console.log("Next digit clicked");
        console.log(firstNumber, secondNumber, operator);

        return;
    } 
    // Assigning second number of the calculation with one or more digits
    else if (firstNumber && operator && !secondNumber) {
        secondNumberArray.push(currentValue);
        secondNumber = +(secondNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = secondNumber;

        console.log("First digit of the second number everyone!");
        console.log(firstNumber, secondNumber, operator);

        return;
    } else if(firstNumber && operator && secondNumber) {
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
    if (firstNumber && !secondNumber && !operator) operator = currentValue;

    // Assigning operator if user changes its mind, i.e. clicks "2", then "+", then "-"
    if(operator && !result) operator = currentValue;

    // Assingning operator if result becomes a first number and there is already a second number assigned in memory
    if(operator && result) {
        secondNumber = null;
        secondNumberArray = [];

        operator = currentValue;
        display_currentValue.textContent = firstNumber;

    }

    console.log("Operator clicked! yo!");
    console.log(firstNumber, secondNumber, operator, result);
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
    
    firstNumber = result;

    return result;

};


