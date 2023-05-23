const argInput = document.querySelector('.arg1_array');
const result = document.querySelector('.result');
// const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-calc');
const calcBtn = document.querySelector('.calc');
const fillBtn = document.querySelector('.fill');

calcBtn.addEventListener('click', calculate)
fillBtn.addEventListener('click', fill)
function calculate() {
    let array = argInput.value.split(' ').join('');
    array = Array.from(array, Number);

    switch (filterOption.value) {
        case "sum":
            result.value = sum(array);
            break;
        case "product":
            result.value = product(array);
            console.log(array);
            break;
        case "maximum":
            result.value = max(array)
            break;
        case "minimum":
            result.value = min(array)
            break;
    }

}

function random(){
    return Math.floor(Math.random()*10)
}
function fill(){
    let n = new Array(10).fill(random())
    console.log(n)

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

