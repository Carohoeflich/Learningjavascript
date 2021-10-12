class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = ''
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1) //slices aka deletes just on string from the right to the left.
    }

    appendNumber(number){ //what occurs when you click on a number to appear on the screen
        if(number === '.' && this.currentOperand.includes('.')){ //an IF for just the period. so you only get to add one, and not constantly add periods.
            return
        }
        this.currentOperand = this.currentOperand.toString() + number.toString() //we need to convert it to string so js doesnt actually sum them as numbers, and just keeps adding them
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute() //this is so, if we chose another operator later on, it computes the first 2 things we wanted and adds the second operator
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return //if there's no number then it cancels the function completely
        switch (this.operation){
            case '+':
                computation = prev + current
            break;
            case '-':
                computation = prev - current
            break;
            case 'x':
                computation = prev * current
            break;
            case '÷':
                computation = prev / current
            break;
        default: return
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number){  //so the numbers display commas every 3 numbers
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0]) //this turns it into an array and the first part choses the part before the period, and the second part, AFTER the period
        const decimalDigits = stringNumber.split('.')[1] //we dont need the parsefloat in this one, bc we dont need it to be a number
        let integerDisplay
        if (isNaN(integerDigits)){
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0})
        }

        if(decimalDigits != null){  //this means the user DID enter a period and some numbers AFTER it
            return `${integerDisplay}.${decimalDigits}`;
        }else {
            return integerDisplay
        }
       
       
        /* const floatNumber = parseFloat(number)
        if(isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString('en') //en for english */
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber (this.currentOperand)
        if(this.operation != null){
            this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)}${this.operation}`;
        } else{
            this.previousOperandTextElement.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement) //creating a prototype for the class Calculator, so we can call on it using the "new" operator.

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})