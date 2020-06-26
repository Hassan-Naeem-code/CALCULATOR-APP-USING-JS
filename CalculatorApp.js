var firstNum, secondNum, output, operator;
var display = document.getElementById('display');

function clearScreen() {
    firstNum = 0, secondNum = 0, operator = undefined, output = undefined;
    display.innerHTML = 0;
}

function number(num) {

    if (operator) {
        if (secondNum) {
            secondNum = String(secondNum) + String(num);
        } else {
            secondNum = num;
        }
        display.innerHTML = secondNum;
    } else {
        console.log(firstNum)
        if (firstNum) {
            firstNum = String(firstNum) + String(num);
            console.log(firstNum)
        } else {
            firstNum = num;
        }
        display.innerHTML = firstNum;
    }
}

function operators(operand) {
    operator = operand;
}
var results = []

function equal() {

    if (operator === '+') {
        output = Number(firstNum) + Number(secondNum);

    } else if (operator === '-') {
        output = Number(firstNum) - Number(secondNum);

    } else if (operator === '*') {
        output = Number(firstNum) * Number(secondNum);

    } else if (operator === '/') {
        output = Number(firstNum) / Number(secondNum);
    } else {
        output = 0;
    }
    if (operator) {
        results.push({
            firstNum,
            secondNum,
            operator,
            output
        })
    }
    display.innerHTML = output;
    firstNum = 0;
    secondNum = 0;
    output = 0;
    operator = null
    console.log(results)

}