/////////////////////////
// SELECTING QUERIES

const numBtn = document.querySelectorAll('.num-btn');
const funcBtn = document.querySelectorAll('.function-btn');


const display_currentValue = document.querySelector('.display-value');
const display_calculations = document.querySelector('.calculations');

/////////////////////////
//  DISPLAY FUNCTIONALITY

let currentValue = 0;
let calculations;
let operator;


/////////////////////////
// BUTTONS - ADDING EVENT LISTENER

numBtn.forEach((button)=> {

    button.addEventListener('click', () => {
        display_currentValue.textContent = button.textContent;
        currentValue = +button.textContent;

        console.log(button.textContent, typeof currentValue);
    });

});

funcBtn.forEach((button) => {

    button.addEventListener('click', () => {
        operator = button.textContent;

        console.log(button, operator, operate(10,6,operator));
        
    });
});



console.log(currentValue)











/////////////////////////
// BASIC CALCULATOR FUNCTIONS

const add = (a,b) => a + b;
const substract = (a,b) => a-b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;


const operate = function(firstNum, secondNum, operator) {
    let result;
    if(operator==='+') result = add(firstNum,secondNum);
    if(operator==='-') result = substract(firstNum,secondNum);
    if(operator==='×') result = multiply(firstNum,secondNum);
    if(operator==='÷') result = divide(firstNum,secondNum);
    
    return result;

};

let calculation = operate(10,6,operator);

console.log(calculation);