let operator = "";
let previousValue = "";
let currentValue = "";
let resultValue = "";


document.addEventListener("DOMContentLoaded", function(){
    //Store all HTML components on JS.
    let clearBtn = document.querySelector(".clear");
    let decimal = document.querySelector(".decimal");
    let equal = document.querySelector(".equals");
    let backBtn = document.querySelector(".back");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");
    //console.log(operators, numbers);


    numbers.forEach((number) => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
        console.log(currentValue);
    }))

    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + "" + operator;
        currentScreen.textContent = currentValue;

    }))

    clearBtn.addEventListener('click', function(e){
        previousValue = "";
        currentValue = "";
        operator = "";
        resultValue = "";
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;

    })
    backBtn.addEventListener('click', function(e){
        if(currentValue){
            currentValue = currentValue.slice(0, -1);
            currentScreen.textContent = currentValue;
        }else if(operator){
            operator = "";
        }else{
            previousValue = previousValue.slice(0, -1);
            previousScreen.textContent = previousValue;
        }
        

    })
    equal.addEventListener('click', function(){
        if(currentValue != '' || previousValue != ''){
            calculate()
            previousScreen.textContent = "";
            if(previousValue.length <= 7){
                currentScreen.textContent = previousValue;
            } else{
                currentScreen.textContent = previousValue.slice(0,5) + '...';
            }
        }       
    })
    decimal.addEventListener('click', function(){
        addDecimal();        
    })
})

function handleNumber(num){
    if(!resultValue){
        if(currentValue.length <= 7){
            currentValue += num;
        }    
    }else{
        resultValue = "";
        currentValue = "";
        previousValue = "";
        if(currentValue.length <= 7){
            currentValue += num;
        }
    }
}
function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    }else if(operator === "-"){
        previousValue -= currentValue;
    }else if(operator === "x"){
        previousValue *= currentValue;
    }else{
        if(currentValue == 0){
            alert("Can't divide by 0!")
        }
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
    resultValue = previousValue;
   /* currentValue = "  ";
    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");
    previousScreen.textContent = currentValue;
    currentScreen.textContent = previousValue;
    return previousValue;*/
}
function handleOperator(op){
    if(previousValue && currentValue){
        calculate()
        operator = op;
        previousValue = resultValue;
        currentValue = "";
        console.log(previousValue);
    }else{
        operator = op;
        previousValue = currentValue;
        currentValue = "";
    }
     
}

function roundNumber(num){
   return Math.round(num * 1000)/1000 
}

function addDecimal(){
    if(!currentValue.includes('.')){
        currentValue += '.';;
    }
}
















/*//const calculatorDiv = document.querySelector('#calculator');
const display = document.querySelector(".display");
//const equate = document.createElement('div');
//equate.setAttribute('style', 'font-size: 45px;', 'color: red;', 'background: whitesmoke;');
const buttons = document.querySelectorAll("button"); 
const specialChar = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== ""){
        output = eval(output.replace('%', "/100"));
    }else if (btnValue === "AC"){
        output = "";
    }else if (btnValue === "DE"){
        output = output.toString().slice(0, -1);
    }else {
        if (output === "" && specialChar.includes(btnValue)) return
        output += btnValue;
    }
    display.value = output;
};

console.log(display, buttons);
console.log("Isaac Luka");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

/*buttons.forEach((button) => {
    console.log('Haha!');
    //button.addEventListener('click', () => equate.value += buttons.textContent);
    
   // button.addEventListener("click", (e) => console.log(e.target.dataset.value));
});
//function show(){
  //  buttons.textContent = 'Haha!';
//}

function disp(){
    console.log(this.value);
}
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

//var First = ;
//var Operator = ;
//var Second = ;

//function Operate(First, Second) {
  //  return Operator(First, Second);
    
//}


//displayDiv.appendChild(equate);*/