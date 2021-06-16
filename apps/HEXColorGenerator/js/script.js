const body = document.querySelector('body'),
      form = document.querySelector('input'),
      btn = document.querySelector('.btn');

let newColor;

const hexNumberGenerator = () =>
    Math.floor(Math.random() * 16).toString(16).toUpperCase();

const hexColorGenerator = () =>
    '#' + Array.from({length: 6}).map(hexNumberGenerator).join('');

function generate() {
    newColor = hexColorGenerator();
    body.style.backgroundColor = newColor;
    form.value = newColor;
}

btn.addEventListener('click', generate);

generate();