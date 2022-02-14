/////////////////////////
// SELECTING QUERIES

const numBtn = document.querySelectorAll('.num-btn');
const funcBtn = document.querySelectorAll('.function-btn');
const equalBtn = document.querySelector('.equal-btn');

const display_currentValue = document.querySelector('.display-value');
const display_calculations = document.querySelector('.calculations');

/////////////////////////
//  DISPLAY FUNCTIONALITY

let currentValue = null;
let calculations;
let operator = null;
let result;


/////////////////////////
// BUTTONS - ADDING EVENT LISTENER

numBtn.forEach((button)=> {
    button.addEventListener('click', () => {
        currentValue = +button.dataset.value;
        display_currentValue.textContent = currentValue;

        calculate();
    });

});

funcBtn.forEach((button) => {
    button.addEventListener('click', () => {
        currentValue = button.dataset.value;

        calculate();

        // console.log( operator, typeof operator, operate(10,6,operator));
    });
});

equalBtn.addEventListener('click',() => {
    operate(firstNumber,secondNumber,operator);
    display_currentValue.textContent = result;

    console.log(result);
})

/////////////////////////
// CALCULATOR FUNCTIONALITY

// firstNum, operator, secondNum, equal button => calculate using operate function

let firstNumber = null; 
let secondNumber = null;

const calculate= function() {
    
    if(!firstNumber && !secondNumber && !operator) {
        firstNumber = currentValue;
        console.log("SCENARIO 1");
        console.log(`${firstNumber}: this is a first number `,`${secondNumber}: this is a second number`, `${operator}: this is the operator`);
        // return;
    } else if (firstNumber && !secondNumber && !operator) {
        operator = currentValue;
        console.log("SCENARIO 2")
        console.log(`${firstNumber}: this is a first number `,`${secondNumber}: this is a second number`, `${operator}: this is the operator`);
        // return;
    } else if(firstNumber && operator && !secondNumber) {
        secondNumber = currentValue;
        console.log("SCENARIO 3")
        console.log(`${firstNumber}: this is a first number `,`${secondNumber}: this is a second number`, `${operator}: this is the operator`);
        
        // console.log(operate(firstNumber,secondNumber,operator));
    }

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

// let calculation = operate(10,6,operator);

