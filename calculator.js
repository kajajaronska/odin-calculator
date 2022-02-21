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
let currentButton = null;
let calculationsArr = [];

display_calculations.textContent = calculationsArr.join('');


let updateCalcDisplay = function(){
    calculationsArr.push(currentButton);
    display_calculations.textContent = calculationsArr.join('');
};


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
        currentValue = button.dataset.value; // for calculations
        currentButton = button.textContent; // for display 
        assignOperator();
    });
});

// Equal sign button
equalBtn.addEventListener('click',() => {
     operate(firstNumber,secondNumber,operator);
});

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

deleteBtn.addEventListener('click', ()=>{
    // Deleting last digit of the first number
    if(!secondNumberArray.length) {
        firstNumberArray.pop();
        firstNumber = +(firstNumberArray.join(''));
        
        display_currentValue.textContent = firstNumber;
        calculationsArr.pop();
        display_calculations.textContent = calculationsArr.join('');

        return;
    };
    
    // Deleting last digit of the second number
    if(secondNumberArray.length) {
        secondNumberArray.pop();
        secondNumber = +(secondNumberArray.join(''));
        display_currentValue.textContent = secondNumber;
        calculationsArr.pop();
        display_calculations.textContent = calculationsArr.join('');

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


