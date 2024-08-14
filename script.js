const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const ac = document.querySelector(".ac");
const equal = document.querySelector(".equal");
const backSpace = document.querySelector(".backSpace");
const display = document.querySelector(".display");

display.textContent = "";

let content = "";
let result = 0;
let firstNum = 0;
let secondNum = 0;
let oper = "";
let count = 0;

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (count == 1) {
            display.textContent = "";
            count = 0;
        }
        if(display.textContent != "") {
            display.textContent += number.textContent;
        } else {
            display.textContent = number.textContent;
        }        
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        
        if (oper !== "" && firstNum !== 0) {
            console.log(typeof(oper));
            console.log(oper);
            console.log(firstNum);
            console.log(typeof(firstNum));
            secondNum = parseInt(display.textContent);
            firstNum = compute(oper, firstNum, secondNum);            
            display.textContent = firstNum;
            count++;
        } else {
            firstNum = parseInt(display.textContent);
            display.textContent = "";
        }
        oper = operator.textContent;       
    });
});

equal.addEventListener("click", () => {
        if (oper !== null && firstNum !== 0) {
            secondNum = parseInt(display.textContent);
            result = compute(oper, firstNum, secondNum);
            display.textContent = result;
            firstNum = result;
            console.log(firstNum)
            oper = "";
    }
});

ac.addEventListener("click", () => {
    result = 0;
    firstNum = 0;
    oper = "";
    secondNum = 0;
    count = 0;
    display.textContent = "";
});  

backSpace.addEventListener("click", () => {
    display.textContent = display.textContent.substring(0,(display.textContent.length) -1);
    
});


function compute(oper, num1, num2) {
    switch(oper) {
        case "+":
            return (num1 + num2);       
        case "-":
            return (num1 - num2);
        case "*": 
            return (num1 * num2);
        case "/":
            return (num1 / num2);   
    }
}
