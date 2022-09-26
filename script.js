function add (a, b) {
    return Math.round((a + b) * 100) / 100;
}

function substract(a, b) {
    return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
    return Math.round((a * b) * 100) / 100;
}

function divide(a, b) {
    if(b === 0) return 'What???';
    return Math.round((a / b) * 100) / 100;
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

function writeToDisplay(char) {
    if(cuentaContainer.textContent.length < 9) {
        cuentaContainer.textContent = cuentaContainer.textContent + char;
    }
}

let cuentaContainer = document.querySelector('#cuentaContainer');

const btnZero = document.querySelector('#btnZero');
btnZero.addEventListener('click', () => {
    writeToDisplay('0');
})
const btnOne = document.querySelector('#btnOne');
btnOne.addEventListener('click', () => {
    writeToDisplay('1');
})
const btnTwo = document.querySelector('#btnTwo');
btnTwo.addEventListener('click', () => {
    writeToDisplay('2');
})
const btnThree = document.querySelector('#btnThree');
btnThree.addEventListener('click', () => {
    writeToDisplay('3');
})
const btnFour = document.querySelector('#btnFour');
btnFour.addEventListener('click', () => {
    writeToDisplay('4');
})
const btnFive = document.querySelector('#btnFive');
btnFive.addEventListener('click', () => {
    writeToDisplay('5');
})
const btnSix = document.querySelector('#btnSix');
btnSix.addEventListener('click', () => {
    writeToDisplay('6');
})
const btnSeven = document.querySelector('#btnSeven');
btnSeven.addEventListener('click', () => {
    writeToDisplay('7');
})
const btnEight = document.querySelector('#btnEight');
btnEight.addEventListener('click', () => {
    writeToDisplay('8');
})
const btnNine = document.querySelector('#btnNine');
btnNine.addEventListener('click', () => {
    writeToDisplay('9');
})
const btnDivide = document.querySelector('#btnDivide');
btnDivide.addEventListener('click', () => {
    if(cuentaContainer.textContent.split(' ').filter(element => element).length === 3){
        btnEqual.click();
        writeToDisplay(' / ');
    } else if(cuentaContainer.textContent.split(' ').length == 1) {
    writeToDisplay(' / ');
    } else {
        btnErase.click();
        writeToDisplay(' / ');
    }
})
const btnMultiply = document.querySelector('#btnMultiply');
btnMultiply.addEventListener('click', () => {
    if(cuentaContainer.textContent.split(' ').filter(element => element).length === 3){
        btnEqual.click();
        writeToDisplay(' * ');
    } else if(cuentaContainer.textContent.split(' ').length == 1) {
    writeToDisplay(' * ');
    } else {
        btnErase.click();
        writeToDisplay(' * ');
    }
})
const btnSubstract = document.querySelector('#btnSubstract');
btnSubstract.addEventListener('click', () => {
    if(cuentaContainer.textContent.split(' ').filter(element => element).length === 3){
        btnEqual.click();
        writeToDisplay(' - ');
    } else if(cuentaContainer.textContent.split(' ').length == 1) {
    writeToDisplay(' - ');
    } else {
        btnErase.click();
        writeToDisplay(' - ');
    }
})
const btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', () => {
    if(cuentaContainer.textContent.split(' ').filter(element => element).length === 3){
        btnEqual.click();
        writeToDisplay(' + ');
    } else if(cuentaContainer.textContent.split(' ').length == 1) {
    writeToDisplay(' + ');
    } else {
        btnErase.click();
        writeToDisplay(' + ');
    }
    
})
const btnComma = document.querySelector('#btnComma');
btnComma.addEventListener('click', () => {
    writeToDisplay('.');
})
const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', () => {
    cuentaContainer.textContent = '';
})
const btnEqual = document.querySelector('#btnEqual');
btnEqual.addEventListener('click', () => {
    
    let a = cuentaContainer.textContent.split(' ')[0];
    a = a * 1;
    let operator = cuentaContainer.textContent.split(' ')[1];
    let b = 1 * (cuentaContainer.textContent.split(' ')[2]);
    cuentaContainer.textContent = operate(a, operator, b);
    //console.log(a, operator, b);
    //console.log(cuentaContainer.textContent.split(' '));
})

const btnErase = document.querySelector('#btnErase');
// Si hay un operador borra 3 caracteres. Intente usar regex pero incluso " " == /\s/ siempre retorna false
btnErase.addEventListener('click', () => {
    if(cuentaContainer.textContent.slice(-3) == " + ") {
        cuentaContainer.textContent = cuentaContainer.textContent.slice(0, -3);
    } else if(cuentaContainer.textContent.slice(-3) == " - ") {
        cuentaContainer.textContent = cuentaContainer.textContent.slice(0, -3);
    } else if(cuentaContainer.textContent.slice(-3) == " * ") {
        cuentaContainer.textContent = cuentaContainer.textContent.slice(0, -3);
    } else if(cuentaContainer.textContent.slice(-3) == " / ") {
        cuentaContainer.textContent = cuentaContainer.textContent.slice(0, -3);
    } else {
        cuentaContainer.textContent = cuentaContainer.textContent.slice(0, -1);
    }
});