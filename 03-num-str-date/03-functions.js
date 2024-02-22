function greet(firstName) {
  console.log('Hello - ', firstName)
}

const greet2 = function (firstName) {
  console.log('2 Hello - ', firstName)
}

greet('Pasha')
greet2('Pasha')

setTimeout(function () {
  greet('Pasha')
}, 15000)

setInterval(function () {
  console.log(Math.random())
}, 2000)

let counter = 0
const interval = setInterval(function () {
  if (counter === 5) {
    clearInterval(interval)
  } else {
    console.log(++counter)
  }
}, 1000)

function greet(firstName) {
  console.log('Hello - ', firstName)
}

const arrow = (firstName) => {
  console.log('Hello - ', firstName)
}
arrow('Pasha')
