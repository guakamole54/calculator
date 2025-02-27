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
    console.log(operand1, operator, operand2);
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

// reset states
clear.addEventListener('click', () => {
    reset();
})


// evaluate the result
evaluate.addEventListener('click', () => {
    operand2 = displayState;

    if (operand1 && operand2) {

        result = operand1 = operate(operand1, operator, operand2);

        display.textContent = result;
        isDisplayedResult = true;
        displayState = null;
    }
})

// get input from the keyboard into displayState
nums.forEach((button) => {
    button.addEventListener('click', () => {
        let num = button.textContent;
        if (isDisplayedResult) {
            reset();
            isDisplayedResult = false;
        }

        if (!displayState) {
            if (num != 0) {
                { displayState = num; display.textContent = displayState; }
            }
        }
        else if (displayState.length < 15) {
            displayState += num;
            display.textContent += num;
        }

        console.log(displayState);
    });

})

// get the operator sign from user
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        if (isDisplayedResult) { isDisplayedResult = false; operator = null; }

        // first number input
        if (!operand1 && displayState) {
            operand1 = displayState;
            displayState = null;
        }

        // first operator input
        if (operand1 && !operator) {

            let sign = operation.textContent;
            display.textContent = sign;
            operator = sign;
            displayState = null;

        }
        // further operator inputs    
        else {
            operand2 = displayState;
            if (operand1 && operand2) {
                let sign = operation.textContent;
                console.log(displayState);
                operand1 = operate(operand1, operator, operand2);
                operator = sign;
                display.textContent = operand1;
                displayState = null;
            }
        }
    })
})



