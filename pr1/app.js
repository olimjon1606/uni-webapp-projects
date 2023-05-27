const argInput = document.querySelector('.arg1_array');
const input = document.querySelectorAll('.input');
const result = document.querySelector('.result');
const filterOption = document.querySelector('.filter-calc');
const calcBtn = document.querySelector('.calc');
const fillBtn = document.querySelector('.fill');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const file = document.querySelector('.file');
const saveBtn = document.querySelector('.save');

calcBtn.addEventListener('click', calculate)
fillBtn.addEventListener('click', fill)
saveBtn.addEventListener('click', save)
function calculate() {
    let array = argInput.value.split(' ');
    array = Array.from(array, Number);

    switch (filterOption.value) {
        case "sum":
            result.value = sum(array);
            break;
        case "product":
            result.value = product(array);
            break;
        case "maximum":
            result.value = max(array)
            break;
        case "minimum":
            result.value = min(array)
            break;
    }

}
function random() {
    return Math.floor(Math.random() * 10)
}

function fill() {
    let n = new Array(10).fill()
    n = n.map(f = (i) => i = random())
    argInput.value = n.join(' ')
}

function sum(array) {
    function f(total, num) {
        return total + num
    }
    return array.reduce(f, 0)
}

function product(array) {
    function f(total, num) {
        return total * num
    }
    return array.reduce(f, 1)
}
const max = array => array.sort(f = (a, b) => a - b)[array.length - 1]
const min = array => array.sort(f = (b, a) => a - b)[array.length - 1]

function fontColor() {
    input.forEach(f = x => x.style.color = color1.value)
}

function backgColor() {
    input.forEach(f = x => x.style.background = color2.value)
}
const n = "olimjon" 
console.log(n.slice(-3))

const inputData = 'Hello, world!';
function save() {
    var inputData = `[${argInput.value}] : ${filterOption.value} => ${result.value}`
    var blob = new Blob([inputData], { type: 'text/plain' });
    var anchor = document.createElement('a');
    anchor.href = window.URL.createObjectURL(blob);
    if (file.value === '' || file.value === ' ') {
        anchor.download = 'output.txt';
        anchor.click();
    } else if (file.value.slice(-4) !== '.txt') {
        anchor.download = file.value + '.txt';
        anchor.click();
    }else{
        anchor.download = file.value;
        anchor.click();
    }
}