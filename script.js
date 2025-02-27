function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operand1, operator, operand2) {
    operand1 = Number.parseInt(operand1);
    operand2 = Number.parseInt(operand2);
    switch (operator) {
        case ('+'):
            return add(operand1, operand2);
        case ('-'):
            return subtract(operand1, operand2);
        case ('*'):
            return multiply(operand1, operand2);
        case ('/'):
            return divide(operand1, operand2);
        default:
            console.log(`Unknown operator ${operator}`);
    }
}

let operand1 = null;
let operator = null;
let operand2 = null;

let buttons = document.querySelector(".buttons");
let nums = buttons.querySelectorAll('.num');
let display = document.querySelector("#display");
let clear = document.querySelector("#clear");

clear.addEventListener('click', () => display.textContent = '')

nums.forEach((button) => {
    button.addEventListener('click', () => {
        let num = button.textContent;
        if (!operand1) { operand1 = num; display.textContent = operand1; }
        else if (operand1.length < 10) {
            operand1 += num;
            display.textContent += num;
            console.log(operand1);
        }
    });
})

