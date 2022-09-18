function add (a, b) {
    return (a + b);
}

function substract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function operate(a, operator, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            console.log("Unknown operator");
            break;
    }
}

let display = document.querySelector('#display');

const btnZero = document.querySelector('#btnZero');
btnZero.addEventListener('click', () => {
    display.textContent = display.textContent + '0';
})
const btnOne = document.querySelector('#btnOne');
btnOne.addEventListener('click', () => {
    display.textContent = display.textContent + '1';
})
const btnTwo = document.querySelector('#btnTwo');
btnTwo.addEventListener('click', () => {
    display.textContent = display.textContent + '2';
})
const btnThree = document.querySelector('#btnThree');
btnThree.addEventListener('click', () => {
    display.textContent = display.textContent + '3';
})
const btnFour = document.querySelector('#btnFour');
btnFour.addEventListener('click', () => {
    display.textContent = display.textContent + '4';
})
const btnFive = document.querySelector('#btnFive');
btnFive.addEventListener('click', () => {
    display.textContent = display.textContent + '5';
})
const btnSix = document.querySelector('#btnSix');
btnSix.addEventListener('click', () => {
    display.textContent = display.textContent + '6';
})
const btnSeven = document.querySelector('#btnSeven');
btnSeven.addEventListener('click', () => {
    display.textContent = display.textContent + '7';
})
const btnEight = document.querySelector('#btnEight');
btnEight.addEventListener('click', () => {
    display.textContent = display.textContent + '8';
})
const btnNine = document.querySelector('#btnNine');
btnNine.addEventListener('click', () => {
    display.textContent = display.textContent + '9';
})
const btnDivide = document.querySelector('#btnDivide');
btnDivide.addEventListener('click', () => {
    display.textContent = display.textContent + ' / ';
})
const btnMultiply = document.querySelector('#btnMultiply');
btnMultiply.addEventListener('click', () => {
    display.textContent = display.textContent + ' * ';
})
const btnSubstract = document.querySelector('#btnSubstract');
btnSubstract.addEventListener('click', () => {
    display.textContent = display.textContent + ' - ';
})
const btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', () => {
    display.textContent = display.textContent + ' + ';
})
const btnComma = document.querySelector('#btnComma');
btnComma.addEventListener('click', () => {
    display.textContent = display.textContent + ',';
})
const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', () => {
    display.textContent = '';
})
const btnEqual = document.querySelector('#btnEqual');
btnEqual.addEventListener('click', () => {
    
    
    let a = parseInt(display.textContent.split(' ')[0]);
    let operator = display.textContent.split(' ')[1];
    let b = parseInt(display.textContent.split(' ')[2]);
    display.textContent = operate(a, operator, b);
    //console.log(a, operator, b);
    //console.log(display.textContent.split(' '));
})