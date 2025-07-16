let display = document.querySelector(".result")
let ac = document.querySelector("#ac-btn")
let del = document.querySelector("#del-btn")
let seven = document.querySelector("#seven-btn")
let eight = document.querySelector("#eight-btn")
let nine = document.querySelector("#nine-btn")
let divide = document.querySelector("#divide-btn")
let four = document.querySelector("#four-btn")
let five = document.querySelector("#five-btn")
let six = document.querySelector("#six-btn")
let mulyiply = document.querySelector("#multiply-btn")
let one = document.querySelector("#one-btn")
let two = document.querySelector("#two-btn")
let three = document.querySelector("#three-btn")
let minus = document.querySelector("#minus-btn")
let dot = document.querySelector("#dot-btn")
let zero = document.querySelector("#zero-btn")
let equals = document.querySelector("#equals-btn")
let plus = document.querySelector("#plus-btn")
let button = document.querySelector(".button")
display.textContent="0"
let currentNumber=""
let operator = "";
let firstnum = 0;
button.addEventListener("click",function(event){
    const target = event.target
    switch(target.id){
        case 'ac-btn':
            display.textContent="0"
            currentNumber=""
            firstnum=0;
            operator="";
            break;
        case 'del-btn':
            currentNumber = currentNumber.replace(currentNumber[currentNumber.length-1],"")
            display.textContent=currentNumber
            break;
        case 'seven-btn':
            currentNumber+="7"
            display.textContent=currentNumber
            break;
        case 'eight-btn':
            currentNumber+="8"
            display.textContent=currentNumber
            break;
        case 'nine-btn':
            currentNumber+="9"
            display.textContent=currentNumber
            break;
        case 'divide-btn':
            operator="divide"
            firstnum=parseFloat(currentNumber)
            currentNumber=""
            display.textContent='/'
            break;
        case 'four-btn':
            currentNumber+="4"
            display.textContent=currentNumber
            break;
        case 'five-btn':
            currentNumber+="5"
            display.textContent=currentNumber
            break;
        case 'six-btn':
            currentNumber+="6"
            display.textContent=currentNumber
            break;
        case 'multiply-btn':
            operator="multiply"
            firstnum=parseFloat(currentNumber)
            currentNumber=""
            display.textContent='x'
            break;
        case 'one-btn':
            currentNumber+="1"
            display.textContent=currentNumber
            break;
        case 'two-btn':
            currentNumber+="2"
            display.textContent=currentNumber
            break;
        case 'three-btn':
            currentNumber+="3"
            display.textContent=currentNumber
            break;
        case 'minus-btn':
            operator="substract"
            firstnum=parseFloat(currentNumber)
            currentNumber=""
            display.textContent='-'
            break;
        case 'dot-btn':
            if(currentNumber==""){
                currentNumber+="0."
                display.textContent=currentNumber

            }
            else if(currentNumber.includes('.')){
                currentNumber+=""
                display.textContent=currentNumber
            }
            else{
                currentNumber+="."
                display.textContent=currentNumber
            }

            break;
        case 'zero-btn':
            currentNumber+="0"
            display.textContent=currentNumber
            break;
        case 'equals-btn':
            operate(firstnum,parseFloat(currentNumber),operator)
            break;
        case 'plus-btn':
            operator="add"
            firstnum=parseFloat(currentNumber)
            currentNumber=""
            display.textContent='+'
            break;
        case 'logo':
            break;
        default:
            display.textContent="ERROR"
            break;

    }
})

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function division(a,b){
    if(b!==0){
        return a/b
    }
    else{
        return "dumbass"
    }
    
}

function operate(a,b,operator){
    switch(operator){
        case'divide':
            currentNumber = division(a,b)
            display.textContent=division(a,b)
            break;
        case'multiply':
            currentNumber = multiply(a,b)
            display.textContent=multiply(a,b)
            break;
        case'add':
            currentNumber=add(a,b)
            display.textContent=add(a,b)
            break;
        case 'substract':
            currentNumber=substract(a,b)
            display.textContent=substract(a,b)
            break;
        
    }
}
