const person = {
  name: 'Pavel',
  age: 22,
  isProgrammer: true,
  languages: ['ru', 'en'],
  address: {
    city: 'Minsk',
    street: 'Kazinez',
  },
  'complex key': 'complex',
  [1 + 2]: 'computed value',
  greet() {
    console.log('Greet from person', this)
  },
  arrow: () => {
    console.log('Person Arrow', this)
  },
  info() {
    console.log(this.name)
  },
}

console.log(person)
person.greet()
person.arrow()
person.info()

console.log(person.address)
const addressKey = 'address'
console.log(person[addressKey])
console.log(person['complex key'])

person.age++
console.log(person.age)

person.address = undefined
delete person.address
console.log(person)

const age1 = person.age
const name = person.name
// const languages = person.languages;
const { age, name: firstName = 'Test', languages } = person
console.log(age, firstName, languages)

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(person[key])
  }
}

const keys = Object.keys(person)
console.log(keys)

const logger = {
  keys() {
    console.log('Object keys', Object.keys(this))
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log('Key', key)
      console.log('Value', this[key])
    })
  },
}

const bound = logger.keys.bind(person)
bound()

logger.keys.call(person)
logger.keys.apply(person)

class Human {
  isHuman = true
  humanGreet() {
    console.log('Hello from human')
  }
}

class Person extends Human {
  constructor(name, age) {
    super()
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log('Hello from', this.name)
  }
}

const newPerson = new Person('Pasha', 22)
console.log(newPerson.humanGreet)
newPerson.sayHello()
