const argInput = document.querySelector('.arg1_array');
const result = document.querySelector('.result');
// const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-calc');
const calcBtn = document.querySelector('.calc');

calcBtn.addEventListener('click', calculate)
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
const n = [5, 2, 3, 4]
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
console.log(max(n))
console.log(min(n))

