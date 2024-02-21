const names = ['Павел', 'Ilya', 'Roma', 'Nikita'];
console.log('!');

names.push('Max');
names.unshift('Sasha');

const firstName = names.shift();
const name1 = names.pop();

console.log('Names: ', names, firstName, name1);

console.log(names.reverse());
console.log(names.toReversed());
console.log(names);
console.log(names.sort());
console.log(names.splice(2, 1));
console.log(names.toSpliced(2, 1));
console.log(names);

const greateWoman = 'Ilya';
const index = names.indexOf(greateWoman);
console.log(index);
console.log(names.with(index, 'Iluha'));
console.log(names[index]);

const capitalNames = names.map(function (name1) {
  const newName1 = name1 + '!';
  return newName1.toLowerCase();
});
console.log(capitalNames);

console.log(names.includes('Ilya'));

const people = [
  { name: 'Pavel', age: 22 },
  { name: 'Ilya', age: 21 },
  { name: 'Nikita', age: 22 },
  { name: 'Roma', age: 30 },
];

const finded = people.find((p) => p.age === 22);

const finded1 = people.find(function (person) {
  return person.age === 22;
});
console.log(finded);
let sumAge = 0;
const filtered = people.filter(function (p) {
  return p.age >= 22;
});
console.log(filtered);

filtered.forEach(function (p) {
  sumAge = sumAge + p.age;
});
console.log(sumAge);

const sumAge1 = people
  .filter((p) => p.age >= 22)
  .map((p) => p.age)
  .reduce((acc, p) => acc + p, 0);
console.log(sumAge);

const string = 'Hello, how are you?';
const reversed = string
  .split('')
  .toReversed()
  .join('!')
  .split('')
  .filter((c) => c != '!')
  .join('');
console.log(reversed);
