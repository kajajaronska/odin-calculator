"use strict";

/////////////////////////
// SELECTING QUERIES

const btn = document.querySelectorAll('.button');
const numBtn = document.querySelectorAll('.num-btn');
const funcBtn = document.querySelectorAll('.function-btn');
const equalBtn = document.querySelector('.equal-btn');
const percentageBtn = document.querySelector('.percentage-btn');
const allClearBtn = document.querySelector('.clear-btn');
const deleteBtn = document.querySelector('.delete-btn');
const dotBtn = document.querySelector('.dot-btn');
const desert = document.querySelector('.desert');
const ocean = document.querySelector('.ocean');
const forest = document.querySelector('.forest');

const styleBtn = document.querySelectorAll('.style-btn');

const display_currentValue = document.querySelector('.display-value');
const display_calculations = document.querySelector('.calculations');

/////////////////////////
//  DISPLAY FUNCTIONALITY

let currentValue = null;
let currentButton = null;
let calculationsArr = [];

display_calculations.textContent = calculationsArr.join('');


//////////////////////////
// FUNCTIONS

const updateCalcDisplay = function(){
    calculationsArr.push(currentButton);
    display_calculations.textContent = calculationsArr.join('');
};

const addDecimal = function() {

    currentValue = dotBtn.dataset.value; // for calculations
    currentButton = dotBtn.textContent; // for display

    if(firstNumber && !operator && !secondNumber) {
        if(firstNumberArray.includes('.')) return;
        firstNumberArray.push(currentValue);
        firstNumber = firstNumberArray.join('');

        display_currentValue.textContent = firstNumber;
        updateCalcDisplay();

        return;
    };

    if(firstNumber && operator && secondNumber) {
        if(secondNumberArray.includes('.')) return;

        secondNumberArray.push(currentValue);
        secondNumber = secondNumberArray.join('');

        display_currentValue.textContent = secondNumber;
        updateCalcDisplay();

        return;
    };
};


const calcResult = function(){
    
    if (!firstNumber || !operator || !secondNumber) {
        console.log("Please choose all of the parameters for your calculation");

        return;
    }

    operate(firstNumber,secondNumber,operator);

    return;
};

const deleteDigit = function() {

     // Deleting last digit of the first number
     if(!secondNumberArray.length) {
        firstNumberArray.pop();
        firstNumber = firstNumberArray.join('');
        
        display_currentValue.textContent = firstNumber;
        calculationsArr.pop();
        display_calculations.textContent = calculationsArr.join('');

        return;
    };

    
    // Deleting last digit of the second number
    if(secondNumberArray.length) {
        secondNumberArray.pop();
        secondNumber = secondNumberArray.join('');
        display_currentValue.textContent = secondNumber;
        calculationsArr.pop();
        display_calculations.textContent = calculationsArr.join('');

        return;
    };

};

const calcPercentage = function() {

    currentValue = percentageBtn.dataset.value; // for calculations
    currentButton = percentageBtn.textContent; // for display


    // If there is no second number and percentage button is clicked return 1% of the current number
    if(firstNumber && !secondNumber) {
  
        operator = '*'
        secondNumber = 0.01;

        operate(firstNumber, secondNumber, operator);

        // Updating display
        display_currentValue.textContent = result;
        currentButton = '';
        updateCalcDisplay();


        return;
    };

    if(firstNumber && operator && secondNumber) {
        secondNumber = firstNumber *(secondNumber/100); 

        display_currentValue.textContent = secondNumber;
        updateCalcDisplay();

        return;

    }

}

/////////////////////////
// EVENT LISTENERS FOR ALL BUTTONS

// All digits buttons
numBtn.forEach((button)=> {
    button.addEventListener('click', () => {
        currentValue = button.dataset.value; // for calculations
        currentButton = button.textContent; // for display
        assignNumVariables();
    });
});

// All operator buttons (add, substract, multiply, divide)
funcBtn.forEach((button) => {
    button.addEventListener('click', () => {

        if(!firstNumber) {
            alert("Hey! Choose a number first.");
    
            return;
        }

        currentValue = button.dataset.value; // for calculations
        currentButton = button.textContent; // for display 
        assignOperator();
    });
});

// Percentage button 

percentageBtn.addEventListener('click', calcPercentage);


// Equal sign button
equalBtn.addEventListener('click', calcResult);


// All Clear (AC) button 
allClearBtn.addEventListener('click', () => {

    // Resetting all variables and arrays
    firstNumberArray = []; 
    secondNumberArray = [];
    firstNumber = null;
    secondNumber = null;
    operator = null;
    result = null;

    // Updating display
    display_currentValue.textContent = 0;
    display_calculations.textContent = '';
    calculationsArr = [];
    display_calculations.textContent = calculationsArr.join('');

});

// Delete button 

deleteBtn.addEventListener('click', deleteDigit);

// Dot button

dotBtn.addEventListener('click', addDecimal);

// Keyboard support 

window.addEventListener('keydown', (e) => {
    
    // Selecting queries
    const numBtn = document.querySelector(`.num-btn[data-value="${e.key}`);
    const functionBtn = document.querySelector(`.function-btn[data-value="${e.key}`);
    const dotBtn = document.querySelector(`.dot-btn[data-value="${e.key}`);
    const equalBtn = document.querySelector(`.equal-btn[data-value="${e.key}`);
    const delBtn = document.querySelector(`.delete-btn[data-value="${e.key}`);
    const percBtn = document.querySelector(`.percentage-btn[data-value="${e.key}`);


    if(numBtn) {
        currentValue = numBtn.dataset.value;
        currentButton = numBtn.textContent; 

        assignNumVariables();

        return;
    };

    if(functionBtn) {
        currentValue = functionBtn.dataset.value;
        currentButton = functionBtn.textContent; 
       
        assignOperator();

        return;
    };

    if(dotBtn) {
        addDecimal();
        return;
    }

    if(equalBtn) {
        calcResult();
        return;
    };

    if(delBtn) {
        deleteDigit();
        return;
    }

    if(percBtn) {
        calcPercentage();
        return;
    }

});



/////////////////////////
// CALCULATOR FUNCTIONALITY

// firstNumber -> operator -> secondNumber -> result


let firstNumberArray = []; 
let secondNumberArray = [];
let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;

const assignNumVariables = function () {

    // Assigning first number of the calculation with one and more digits
    if(!firstNumber && !secondNumber && !operator) {
        firstNumberArray.push(currentValue);
        firstNumber = +(firstNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = firstNumber;
        updateCalcDisplay();

        return;
    
    } else if((firstNumberArray.length >= 1) && !secondNumber && !operator){
        firstNumberArray.push(currentValue);
        firstNumber = +(firstNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = firstNumber;
        updateCalcDisplay();

        return;
    } 
    // Assigning second number of the calculation with one or more digits
    else if (firstNumber && operator && !secondNumber) {

        // Preventing division by 0
        if(operator === "/" && currentValue === '0') {
            alert("Oops! Are you trying to divide by 0?😲");

            return;
        };

        secondNumberArray.push(currentValue);
        secondNumber = +(secondNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = secondNumber;
        updateCalcDisplay();

        return;

    } else if(firstNumber && operator && secondNumber) {
        secondNumberArray.push(currentValue);
        secondNumber = +(secondNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = secondNumber;
        updateCalcDisplay();

        return;
    };


};


const assignOperator = function() {
    
    // SCENARIO 1 
    if(!operator) {
        operator = currentValue;
        secondNumberArray = [];
        secondNumber = null;

        updateCalcDisplay();

        return;

    }

    // SCENARIO 2
    else if(operator && !secondNumber) {
        operator = currentValue;
        calculationsArr.pop();
        
        updateCalcDisplay();

        return;
    }

    // SCENARIO 3
    else if(operator && firstNumber && secondNumber && result) {

        // Resetting second number and a result from the previous calculation
        secondNumberArray = [];
        secondNumber = null;
        result = null;

        operator = currentValue;

        updateCalcDisplay();

        return;
    }

    // SCENARIO 5: user forgets to click equal button after entering the second number in; trigerring equal button functionality & assigning new operator; 
   
    operate(firstNumber,secondNumber,operator);

    secondNumberArray = [];
    secondNumber = null;
    result = null;

    operator = currentValue;
    updateCalcDisplay();

    return;
    
};


/////////////////////////
// BASIC CALCULATOR FUNCTIONS

const add = (a,b) => a + b;
const substract = (a,b) => a-b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
let  longResult;


const operate = function(firstNum, secondNum, operator) {
    
    if(operator==='+') longResult = add(firstNum,secondNum);
    if(operator==='-') longResult = substract(firstNum,secondNum);
    if(operator==='*') longResult = multiply(firstNum,secondNum);
    if(operator==='/') longResult = divide(firstNum,secondNum);
    
    result = Math.round(longResult * 1000000000000)/1000000000000;
    display_currentValue.textContent = result;
    firstNumber = result;

    return result;

};


/////////////////////////
// COLOR PALLETES FUNCTIONALITY

const setTheme = (theme) => document.documentElement.className = theme;

styleBtn.forEach((button)=>{
    button.addEventListener('click', ()=> {
        setTheme(button.dataset.value);
    });
});

