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
let result;


/////////////////////////
// BUTTONS - ADDING EVENT LISTENER

numBtn.forEach((button)=> {
    button.addEventListener('click', () => {
        currentValue = button.dataset.value;
        assignNumVariables();
    });

});

funcBtn.forEach((button) => {
    button.addEventListener('click', () => {
        currentValue = button.dataset.value;
        console.log("Operator clicked!")

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


let firstNumberArray = []; 
let secondNumberArray = [];
let firstNumber = null;
let secondNumber = null;
let operator = null;

const assignNumVariables = function () {
    if(!firstNumberArray.length && !secondNumberArray.length && !operator) {
        firstNumberArray.push(currentValue);
        firstNumber = +(firstNumberArray.join(''));

        display_currentValue.textContent = firstNumber;


        console.log("SCENARIO 1");
        console.log(`${firstNumber}: this is a first number `,`${secondNumber}: this is a second number`, `${operator}: this is the operator`);
    
    } else if((firstNumberArray.length >= 0) && !secondNumberArray.length && !operator){
        firstNumberArray.push(currentValue);
        firstNumber = +(firstNumberArray.join(''));

        display_currentValue.textContent = firstNumber;

        console.log("Second number clicked");
        console.log(firstNumber, secondNumber, operator);
    }
};

const assignOperator = function() {

};

const calculate= function() {
    
    if(!firstNumber.length && !secondNumber.length && !operator) {
        firstNumber[0] = +currentValue;
        console.log("SCENARIO 1");
        console.log(`${firstNumber[0]}: this is a first number `,`${secondNumber[0]}: this is a second number`, `${operator}: this is the operator`);
        // return;
    } else if(firstNumber.length && !secondNumber.length && !operator){
        
    
    } else if (firstNumber && !secondNumber && !operator) {
        operator = currentValue;
        console.log("SCENARIO 2")
        console.log(`${firstNumber}: this is a first number `,`${secondNumber}: this is a second number`, `${operator}: this is the operator`);
        // return;
    } else if(firstNumber && operator && !secondNumber) {
        secondNumber = +currentValue;
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

