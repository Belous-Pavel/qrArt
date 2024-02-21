// const start = new Date(0);

// const date = new Date(2011, 0, 4, 12, 42, 12);

// console.log(date);
// console.log(now.getDate());

// now.setFullYear(2055);
// console.log(now);

// console.log(now.toLocaleDateString());

// const now = new Date();

let mode = 'full';
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

fullBtn.onclick = bindMode('full');

dateBtn.onclick = bindMode('date');

timeBtn.onclick = bindMode('time');

setInterval(update, 1000);
update();

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();
  switch (formatMode) {
    case 'time':
      return now.toLocaleTimeString();
    case 'date':
      return now.toLocaleDateString();
    case 'full':
      return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString;
  }
}
