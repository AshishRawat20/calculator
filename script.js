function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if(b == 0){
        // calls clear function
    }
    return a/b;
}

function operate(operator, num1, num2){
    switch(operator){
        case '+': return add(num1, num2);
        case '-': return sub(num1, num2);
        case '*': return mul(num1, num2);
        case '/':{
            if(num2 === 0){
                alert("DIVIDNG BY ZERO YOU IDIOT.. JK PLS DON'T DIVIDE BY ZERO");
                location.reload();
            }
            return div(num1, num2).toFixed(4);
        }
        default: console.log("wrong operator");
    }
}

var leftOperand = 0;
var rightOperand = 0;
var operatorValue = '';

const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.op');
const screen = document.querySelector('.screen');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

function changeDisplay(){
    if(operatorValue === ''){
        screen.textContent = leftOperand.toString();
    }
    else{
        screen.textContent = leftOperand.toString() + operatorValue + rightOperand.toString();
    }
}

numButtons.forEach(num => {
    num.addEventListener('click', item => {
        const curNum = Number(item.target.innerText);
        if(operatorValue === ''){
            leftOperand = leftOperand*10 + curNum;
            changeDisplay();
        }
        else{
            rightOperand = rightOperand*10 + curNum;
            changeDisplay();
        }
    })
})

opButtons.forEach(op =>{
    
    op.addEventListener('click', e=>{
        const newOpValue = e.target.innerText;
        if(operatorValue != ''){
            leftOperand = operate(operatorValue, leftOperand, rightOperand);
            rightOperand = 0;
        }
        operatorValue = newOpValue;
        changeDisplay();
    })
})

equalButton.addEventListener('click', ()=> {
   const newValue = operate(operatorValue, leftOperand, rightOperand);
   screen.textContent = newValue.toString();
   leftOperand = newValue;
   rightOperand = 0;
   operatorValue = '';
})

clearButton.addEventListener('click', ()=>{
    screen.textContent = '0';
    leftOperand = rightOperand = 0;
    operatorValue = '';
})

deleteButton.addEventListener('click', ()=>{
    if(rightOperand !=0){
       rightOperand =  Math.floor(rightOperand/10)
    }
    else if(operatorValue != ''){
        operatorValue = '';
    }
    else{
        leftOperand= Math.floor(leftOperand/10);
    }
    changeDisplay();
})