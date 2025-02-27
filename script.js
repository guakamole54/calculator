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

    operand1 = Number.parseFloat(operand1);
    operand2 = Number.parseFloat(operand2);
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

function reset() {
    display.textContent = '';
    operand1 = null;
    operand2 = null;
    operator = null;
    displayState = null;
    isDisplayedResult = false;
}

let operand1 = null;
let operator = null;
let operand2 = null;
let displayState = null;
let isDisplayedResult = false;

let buttons = document.querySelector(".buttons");
let nums = buttons.querySelectorAll('.num');
let display = document.querySelector("#display");
let clear = document.querySelector("#clear");
let evaluate = document.querySelector("#evaluate");
let operations = document.querySelectorAll(".operation");

clear.addEventListener('click', () => {
    reset();
})

evaluate.addEventListener('click', () => {
    operand2 = displayState;
    displayState = null;
    if (operand1 && operand2) {

        result = operand1 = operate(operand1, operator, operand2);
        display.textContent = result;
        isDisplayedResult = true;
    }
})

nums.forEach((button) => {
    button.addEventListener('click', () => {
        let num = button.textContent;
        if (isDisplayedResult) {
            reset();
        }

        if (!displayState) {
            if (num != 0) {
                { displayState = num; display.textContent = displayState; }
            }
        }
        else if (displayState.length < 10) {
            displayState += num;
            display.textContent += num;
        }
    });
})

operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        if (isDisplayedResult) isDisplayedResult = false;

        if (!operand1 && displayState) {
            operand1 = displayState;
            displayState = null;
        }

        if (operand1) {

            let sign = operation.textContent;
            display.textContent = sign;
            operator = sign;
        }
    })
})



