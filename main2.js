const display = document.querySelector('.display');
const firstNum = document.querySelectorAll('.num');
const secondNumber = document.querySelectorAll('.num');
const clear = document.querySelector('.clr');
const del = document.querySelector('.del');
const operatorBtn = document.querySelectorAll('.op');
const equalBtn = document.querySelector('.equal');
const decimal = document.querySelector('.decimal')

let num1 = '';
let num2 = '';
let operator = '';
let answer = ''

display.classList.add('display-font');

firstNum.forEach((firstNum) => firstNum.addEventListener('click', handleClickOnFirstNum));

operatorBtn.forEach((operatorBtn) => operatorBtn.addEventListener('click', handleClickOnOperator));

equalBtn.addEventListener('click', () => handleClickOnEqual());

clear.addEventListener('click', () => window.location.reload());

del.addEventListener('click', () => {
    num1 = num1.slice(0, -1);
    display.textContent = num1;
});

function handleClickOnFirstNum(){2
    num1 += this.innerHTML;
    display.textContent = num1;
};

function handleClickOnOperator(){

    //update display with latest calculation 
    num1 = operate(num1, num2, operator);
    display.textContent = num1;
    num2 = '';

    //stops event listener for first num
    firstNum.forEach((firstNum) => {
        firstNum.removeEventListener('click', handleClickOnFirstNum);
    });

    //store and display operator
    operator = this.innerHTML;
    display.textContent += ' ' + operator + ' ';

    //2nd number
    secondNumber.forEach((secondNumber) => secondNumber.addEventListener('click', handleClickOnSecondNum));
};

function handleClickOnSecondNum(){
    num2 += this.innerHTML;
    display.textContent += this.innerHTML;
};

function handleClickOnEqual(){
    num1 = operate(num1, num2, operator);
    display.textContent = num1;
    num2 = '';
};

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

function operate(num1,num2,operator){

    if (num1 === '' || operator === ''){
        return num1;
    };

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