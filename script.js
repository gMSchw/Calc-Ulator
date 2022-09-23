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

let cuentaContainer = document.querySelector('#cuentaContainer');

const btnZero = document.querySelector('#btnZero');
btnZero.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + '0';
})
const btnOne = document.querySelector('#btnOne');
btnOne.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + '1';
})
const btnTwo = document.querySelector('#btnTwo');
btnTwo.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + '2';
})
const btnThree = document.querySelector('#btnThree');
btnThree.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + '3';
})
const btnFour = document.querySelector('#btnFour');
btnFour.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + '4';
})
const btnFive = document.querySelector('#btnFive');
btnFive.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + '5';
})
const btnSix = document.querySelector('#btnSix');
btnSix.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + '6';
})
const btnSeven = document.querySelector('#btnSeven');
btnSeven.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + '7';
})
const btnEight = document.querySelector('#btnEight');
btnEight.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + '8';
})
const btnNine = document.querySelector('#btnNine');
btnNine.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + '9';
})
const btnDivide = document.querySelector('#btnDivide');
btnDivide.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + ' / ';
})
const btnMultiply = document.querySelector('#btnMultiply');
btnMultiply.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + ' * ';
})
const btnSubstract = document.querySelector('#btnSubstract');
btnSubstract.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + ' - ';
})
const btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + ' + ';
})
const btnComma = document.querySelector('#btnComma');
btnComma.addEventListener('click', () => {
    cuentaContainer.textContent = cuentaContainer.textContent + ',';
})
const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', () => {
    cuentaContainer.textContent = '';
})
const btnEqual = document.querySelector('#btnEqual');
btnEqual.addEventListener('click', () => {
    
    
    let a = parseInt(cuentaContainer.textContent.split(' ')[0]);
    let operator = cuentaContainer.textContent.split(' ')[1];
    let b = parseInt(cuentaContainer.textContent.split(' ')[2]);
    cuentaContainer.textContent = operate(a, operator, b);
    //console.log(a, operator, b);
    //console.log(cuentaContainer.textContent.split(' '));
})