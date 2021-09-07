let num1 = 10;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
//create four function: add(), sub(), prod(), divide()
//call the correct function when the user clicks on one of the buttons
//perform the given calculation using num1 and num2
//render the result of the calculation in the paragraph with id= "sum-el"

//e.g. if the user click on the sum button you should render
// "sum:12" inside the paragraph with id= "sum-el"
let AnswerEl = document.getElementById("sum-el");
function add2number(){
    sum = num1 + num2;
    AnswerEl.textContent = "Answer: " + sum
}

function sub2number() {
    sub = num1 - num2;
    AnswerEl.textContent = "Answer: " + sub
}

function multiply2number() {
    prod = num1 * num2;
    AnswerEl.textContent = "Answer: " + prod
}

function divide2number() {
    divide = num1 / num2;
    AnswerEl.textContent = "Answer: " + divide
}
