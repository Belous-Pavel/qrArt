let num = 42
let firstName = 'Pavel'
const isProgrammer = true

// isProgrammer = false;

/* let $ = "test"
let $num = 43
let num$ = 44
let _ = 45
let _num = 46
let num_ = 47
let first_name = 'Oleg'
let num1 = 48
*/

// alert(firstName);
// console.log('Test:', firstName, num, isProgrammer);
// console.log(num + 10);
// console.log(num);

// let num2 = num + 10;
// console.log(num, num2);
// num = num2 - num;
// console.log(num, num2);

// let num3 = (num + 16) / 2;
// console.log(num3);
let lastName = 'Belous'
const fullName = firstName + ' ' + lastName
console.log(fullName)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')

plusBtn.onclick = function () {
  action = '+'
}

minusBtn.onclick = function () {
  action = '-'
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = 'red'
  } else {
    resultElement.style.color = 'green'
  }
  resultElement.textContent = result
}

function computeNumbersWithAction(value1, value2, actionSymbol) {
  const num1 = Number(value1.value)
  const num2 = Number(value2.value)
  if (actionSymbol == '+') {
    return num1 + num2
  } else if (actionSymbol == '-') {
    return num1 - num2
  }
  // return actionSymbol == '+' ? num1 + num2 : num1 - num2;
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action)
  printResult(result)
}
