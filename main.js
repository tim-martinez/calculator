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
let num1 = '';
let num2 = '';
let operator = '';

//operate and return answer
function operate(num1,num2,operator){
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (operator === '+'){
        return add(num1,num2);
    } else if (operator === '-'){
        return subtract(num1,num2);
    } else if (operator === 'x'){
        return multiply(num1,num2);
    } else if (operator === '/'){
        return divide(num1,num2);
    }else {
        return 'ERROR';
    }
};

//calculator display 
const display = document.querySelector('.display');

//first number 
const firstNum = document.querySelectorAll('.num');
firstNum.forEach((firstNum) =>{
    firstNum.addEventListener('click', handleClickOnFirstNum);
});

//function handle click for firstNum 
function handleClickOnFirstNum(){
    num1 += this.innerHTML;
    display.textContent = num1;
    display.classList.add('display-font');
    console.log('num1: ' + num1);
};

//clear button
const clear = document.querySelector('.clr');
clear.addEventListener('click', () => {
    window.location.reload();
});

//delete button aka backspace
const del = document.querySelector('.del');
del.addEventListener('click', () => {
    num1 = num1.slice(0, -1);
    display.textContent = num1;
});

//operator button
const operatorBtn = document.querySelectorAll('.op');
operatorBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', handleClickOnOperator);
});

//function handles click on operator
function handleClickOnOperator(){

    //stops event listener for first num
    firstNum.forEach((firstNum) => {
        firstNum.removeEventListener('click', handleClickOnFirstNum);
    });

    operator = this.innerHTML;
    display.textContent += ' ' + operator;

    //2nd number
    const secondNumber = document.querySelectorAll('.num');
    secondNumber.forEach((element) => {
        element.addEventListener('click', handleClickOnSecondNum);
        //num1 = operate(num1, num2, operator);
    });
};

//function handles click for 2nd Number
function handleClickOnSecondNum(){
    num2 += this.innerHTML;
    display.textContent += ' ' + num2;
}

//equal button
const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', () => {
    num1 = operate(num1, num2, operator)
    display.textContent = num1;

    num2 = '';
});