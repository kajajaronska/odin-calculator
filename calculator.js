/////////////////////////
// SELECTING QUERIES

// const one = document.querySelector('#one');
// const two = document.querySelector('#two');
// const three = document.querySelector('#three');
// const four = document.querySelector('#four');
// const five = document.querySelector('#five');
// const six = document.querySelector('#six');
// const seven = document.querySelector('#seven');
// const eight = document.querySelector('#eight');
// const nine = document.querySelector('#nine');
// const zero = document.querySelector('#zero');
// const add_btn = document.querySelector('#plus');
// const substract_btn = document.querySelector('#minus');
// const multiply_btn = document.querySelector('#multiply');
// const divide_btn = document.querySelector('#divide');
// const equal_btn = document.querySelector('#equal');
// const dot = document.querySelector('#dot');
const btn = document.querySelectorAll('.button');


const display_currentValue = document.querySelector('.display-value');
const display_calculations = document.querySelector('.calculations');

/////////////////////////
//  DISPLAY FUNCTIONALITY

let currentValue = 0;
let calculations;


/////////////////////////
// BUTTONS - ADDING EVENT LISTENERS

btn.forEach((button)=> {

    button.addEventListener('click', () => {
        display_currentValue.textContent = button.textContent;
        currentValue = +button.textContent;

        console.log(button.textContent, typeof currentValue);
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
    if(operator==='*') result = multiply(firstNum,secondNum);
    if(operator==='/') result = divide(firstNum,secondNum);
    
    return result;

};

let calculation = operate(10,6,'/');

// console.log(calculation);