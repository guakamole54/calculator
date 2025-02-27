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

