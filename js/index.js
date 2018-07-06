//Simple calculator
document.querySelectorAll('.basic').forEach(el => el.addEventListener('click', basic));
document.querySelector('.calc').addEventListener('click', calc);
document.querySelector('.reset').addEventListener('click', reset);
const display = document.querySelector('.display');

function basic(event) {
    display.value += event.target.innerText;
}
function calc() {
    display.value = eval(display.value);
}
function reset() {
    display.value = '';
}
//Better calculator
document.querySelectorAll('.digit').forEach(el => el.addEventListener('click', digit));
document.querySelectorAll('.operator').forEach(el => el.addEventListener('click', operator));
document.querySelector('.sqrt').addEventListener('click', squareRoot);
document.querySelector('.better-calc').addEventListener('click', betterCalc);
document.querySelector('.better-reset').addEventListener('click', betterReset);
const miniDisplay = document.querySelector('.mini-display');
const mainDisplay = document.querySelector('.main-display');
let mem = { num1: '', operation: '', num2: '', result: '' };

function digit() {
    if (mainDisplay.value == '+' || mainDisplay.value == '-' || mainDisplay.value == '/' || mainDisplay.value == '*' || mainDisplay.value == '0' ) {
        mainDisplay.value = '';
    }
    else if (mainDisplay.value == mem.result) {
        betterReset();
    }
    mainDisplay.value += event.target.innerText;
    miniDisplay.value += event.target.innerText;
}
function operator() {
    if (mainDisplay.value > -Infinity) {
        if (mem.num1 == '') {
            mem.num1 = mainDisplay.value;
        }
        else if (mem.num2 == '') {
            mem.num2 = mainDisplay.value;
            mem.result = eval(mem.num1 + mem.operation + mem.num2 );
            mem.num1 = mem.result;
            mem.num2 = '';
        }
        else if (mainDisplay.value == mem.result) {
            mem.num1 = mem.result;
            mem.num2 = '';
        }
        else {
            mem.result = eval(mem.num1 + mem.operation + mem.num2 );
            miniDisplay.value += "=" + mem.result;
            mem.num1 = mem.result;
            mem.num2 = mainDisplay.value;
        }
    }
    mainDisplay.value = event.target.innerText;
    mem.operation = mainDisplay.value;
    miniDisplay.value += event.target.innerText;
}
function betterCalc() {
    if (mem.num2 == '') {
        mem.num2 = mainDisplay.value;
        mem.result = eval(mem.num1 + mem.operation + mem.num2 );
        mainDisplay.value = mem.result;
        miniDisplay.value += "=" + mem.result;
    }
    else if (mainDisplay.value == mem.result) {
        mem.result = eval(mem.result + mem.operation + mem.num2 );
        mainDisplay.value = mem.result;
        miniDisplay.value += mem.operation + mem.num2 + "=" + mem.result;
    }
    else {
        mem.result = eval(mem.num1 + mem.operation + mem.num2 );
        mainDisplay.value = mem.result;
        miniDisplay.value += "=" + mem.result;
    }
}
function betterReset() {
    miniDisplay.value = '';
    mainDisplay.value = '';
    mem.num1 = '';
    mem.num2 = '';
    mem.result = '';
}
function squareRoot () {
    var sq = mainDisplay.value;
    mainDisplay.value = Math.sqrt(sq);
    miniDisplay.value = mainDisplay.value;
}