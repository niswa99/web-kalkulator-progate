const calculatorScreen = document.querySelector('.calculator-screen')

// 3. memperbaharui input didalam area class calculator-Screen
const updateScreen =  (number) => {
    calculatorScreen.value=number
}

// 1. mengambil semua elemen class number
const numbers = document.querySelectorAll(".number")

// 2. memberikan click event kepada semua elemen
// menjalankan function updateScreen saat tombol diklik
numbers.forEach((number)=>{
    number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }
}


// mengambil semua element class operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator  = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator=operator
    currentNumber='0'
}

// const inputOperator = (operator) => {
//     prevNumber = currentNumber
//     calculationOperator = operator
//     currentNumber = ''
// }

// fungsi samadengan
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', ()=> {
    calculate()
    updateScreen(currentNumber)
})

// kondisi calculate untu fungsi samadengan
const calculate = () => {
    let result  = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default :
            
            break
    }
    currentNumber=result
    calculationOperator='';
}

// fungsi AC (class all-clear)

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () =>{
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

// fungsiDesimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const inputDecimal= (dot) => {
    if(currentNumber.includes('.')){
        return
    } 
    currentNumber += dot
}

// penggunaan persen
const persen = document.querySelector('.percentage')

persen.addEventListener('click', () => {
    persenOperator()
    updateScreen(currentNumber)
})

const persenOperator = () => {
    let result = currentNumber/100
    currentNumber=result
}
