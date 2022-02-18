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
let currentOperator = null;
let calculationsArr = [];

display_calculations.textContent = calculationsArr.join('');




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
        currentValue = button.dataset.value; // for calculations
        currentOperator = button.textContent; // for display 
        assignOperator();
    });
});

// Equal sign button
equalBtn.addEventListener('click',() => {

    operate(firstNumber,secondNumber,operator);
    console.log("Before operate func", `first num:${firstNumber} | second number:${secondNumber} | operator:${operator} | result:${result}`);
    display_currentValue.textContent = result;

    // // Assigning result to the firstNumber
    firstNumber = result;


    console.log("After resetting result", `first num:${firstNumber} | second number:${secondNumber} | operator:${operator} | result:${result}`);
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

    

    console.log(firstNumber, secondNumber, firstNumberArray, secondNumberArray);
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

        console.log(firstNumber,secondNumber,operator)

        return;
    };
    
    // Deleting last digit of the second number
    if(secondNumberArray.length) {
        secondNumberArray.pop();
        secondNumber = +(secondNumberArray.join(''));
        display_currentValue.textContent = secondNumber;
        calculationsArr.pop();
        display_calculations.textContent = calculationsArr.join('');

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
let result = null;

const assignNumVariables = function () {

    // Assigning first number of the calculation with one and more digits
    if(!firstNumber && !secondNumber && !operator) {
        firstNumberArray.push(currentValue);
        firstNumber = +(firstNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = firstNumber;
        calculationsArr.push(currentValue);
        display_calculations.textContent = calculationsArr.join('');

        console.log("First digit clicked");
        console.log(`first num:${firstNumber} | second number:${secondNumber} | operator:${operator} | result:${result}`);

        return;
    
    } else if((firstNumberArray.length >= 1) && !secondNumber && !operator){
        firstNumberArray.push(currentValue);
        firstNumber = +(firstNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = firstNumber;
        calculationsArr.push(currentValue);
        display_calculations.textContent = calculationsArr.join('');

        console.log("Next digit clicked");
        console.log(`first num:${firstNumber} | second number:${secondNumber} | operator:${operator} | result:${result}`);

        return;
    } 
    // Assigning second number of the calculation with one or more digits
    else if (firstNumber && operator && !secondNumber) {
        secondNumberArray.push(currentValue);
        secondNumber = +(secondNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = secondNumber;
        calculationsArr.push(currentValue);
        display_calculations.textContent = calculationsArr.join('');

        console.log("First digit of the second number everyone!");
        console.log(`first num:${firstNumber} | second number:${secondNumber} | operator:${operator} | result:${result}`);

        return;

    } else if(firstNumber && operator && secondNumber) {
        secondNumberArray.push(currentValue);
        secondNumber = +(secondNumberArray.join(''));

        // Updating display
        display_currentValue.textContent = secondNumber;
        calculationsArr.push(currentValue);
        display_calculations.textContent = calculationsArr.join('');

        console.log("next digit! second number!");
        console.log(`first num:${firstNumber} | second number:${secondNumber} | operator:${operator} | result:${result}`);

        return;
    };


};



const assignOperator = function() {
    console.log("Operator button was clicked!");

    // SCENARIO 1 
    if(!operator) {
        operator = currentValue;
        secondNumberArray = [];
        secondNumber = null;
        calculationsArr.push(currentOperator);
        display_calculations.textContent = calculationsArr.join('');

        console.log(`SCENARIO 1: first num:${firstNumber} | second number:${secondNumber} | operator:${operator} | result:${result}`);

        return;

    }

    // SCENARIO 2
    else if(operator && !secondNumber) {
        operator = currentValue;
        calculationsArr.pop();
        calculationsArr.push(currentOperator);
        display_calculations.textContent = calculationsArr.join('');

        console.log(`SCENARIO 2 REASSIGNING THE OPERATOR:first num:${firstNumber} | second number:${secondNumber} | operator:${operator} | result:${result}`);

        return;
    }

    // SCENARIO 3
    else if(operator && firstNumber && secondNumber && result) {

        
        secondNumberArray = [];
        secondNumber = null;
        result = null;

        operator = currentValue;

        calculationsArr.push(currentOperator);
        display_calculations.textContent = calculationsArr.join('');

        console.log(`SCENARIO 3 REASSIGNING THE OPERATOR: first num:${firstNumber} | second number:${secondNumber} | operator:${operator} | result:${result}`);

        return;
    }




    
}




// const assignOperator = function() {
    
//     // Assigning operator if first number is chosen and second number && operator are null 
//     if (firstNumber && !secondNumber && !operator) {
//         operator = currentValue;
//         calculationsArr.push(currentOperator);
//         display_calculations.textContent = calculationsArr.join('');

//         console.log(firstNumber, secondNumber, operator, result);

//         return;
//     };


//     // Assigning operator if user changes its mind, i.e. clicks "2", then "+", then "-"
//     if(operator && !result) {
//         operator = currentOperator;
//         secondNumber = null;
//         secondNumberArray = [];

        
//         calculationsArr.pop()
//         calculationsArr.push(currentOperator)
//         display_calculations.textContent = calculationsArr.join('');

//         console.log(firstNumber, secondNumber, `Oops! Sorry! Changing to ${operator}`, result);

//         return;
//     };
//     // // Assignning operator if result variable becomes a first number and there is already a second number assigned in memory
//     if(firstNumber && operator && secondNumber && !result) {
//         secondNumber = null;
//         secondNumberArray = [];

//         operator = currentOperator;
//         display_currentValue.textContent = firstNumber;

//         calculationsArr.push(currentOperator);

//         // //  Checking whether last character display was a letter or a number and updating display accordingly
//         // if(isNaN(lastElement)) {
//         //     display_calculations.textContent = calculationsArr.join('');
//         //     console.log("SCENARIO 1", calculationsArr);
//         // } else {
//         //     calculationsArr.pop()
//         //     calculationsArr.push(currentOperator)
//         //     display_calculations.textContent = calculationsArr.join('');
//         //     console.log("SCENARIO 2", calculationsArr);
//         // }     

//         return;
//     }

//     console.log("Operator clicked! yo!");
//     console.log(firstNumber, secondNumber, operator, result);
// };


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

}


