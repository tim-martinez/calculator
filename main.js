//functions for add, subtract, multiply, and divide
function add(a,b){
    return a + b;
};

function subtract(a,b){
    return a - b;
};

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return a / b;
};

//declare variables for numbers and operator
let num1 = 10;
let num2 = 2;
let operator = '';

//operate and return answer
function operate(num1,num2,operator){
    if (operator === 'add'){
        return add(num1,num2);
    } else if (operator === 'subtract'){
        return subtract(num1,num2);
    } else if (operator === 'multiply'){
        return multiply(num1,num2);
    } else if (operator === 'divide'){
        return divide(num1,num2);
    }else {
        return 'ERROR';
    }
};

//test operate function
console.log(operate(num1,num2,'divide'));

