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

display.classList.add('display-font');

firstNum.forEach((firstNum) => firstNum.addEventListener('click', handleClickOnFirstNum));

operatorBtn.forEach((operatorBtn) => operatorBtn.addEventListener('click', handleClickOnOperator));

equalBtn.addEventListener('click', () => handleClickOnEqual());

clear.addEventListener('click', () => window.location.reload());

decimal.addEventListener('click', handleClickOnDecimal, { once: true });

del.addEventListener('click', () => {
    if (num2 !== ''){
        num2 = num2.slice(0, -1);
        display.textContent = num1 + operator + num2;
    } else if (num2 === '' && operator !== ''){
        operator = ''
        display.textContent = num1 + operator;
    } else {
        num1 = num1.slice(0, -1);
        display.textContent = num1;
    };
});

function handleClickOnDecimal(){
    
    if(operator === ''){
        num1 += '.';
        display.textContent += '.';
        
    }else {
        num2 += '.';
        display.textContent += '.';
    };
};

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

    //second decimal
    decimal.addEventListener('click', handleClickOnDecimal, { once: true });

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

    num1 = Number(num1);
    num2 = Number(num2);

    let answer = 0;

    if (operator === '+'){
        answer = add(num1,num2);
    } else if (operator === '-'){
        answer = subtract(num1,num2);
    } else if (operator === 'x'){
        answer = multiply(num1,num2);
    } else if (operator === '/'){
        answer = divide(num1,num2);
    }else {
        answer = 'ERROR';
    }

    return Math.round(answer * 100) / 100;
};