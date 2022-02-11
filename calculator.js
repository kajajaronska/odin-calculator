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

console.log(calculation);