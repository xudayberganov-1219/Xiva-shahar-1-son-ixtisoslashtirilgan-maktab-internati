let numberElement = document.getElementById('number');
let number = 1;

let interval = setInterval(() => {
    if (number <= 256) {
        numberElement.textContent = number;
        number++;
    } else {
        clearInterval(interval);
    }
}, 20); // 20ms interval for fast counting
let numberElement = document.getElementById('number2');
let number = 1;

let interval = setInterval(() => {
    if (number <= 50) {
        numberElement.textContent = number;
        number++;
    } else {
        clearInterval(interval);
    }
}, 20); // 20ms interval for fast counting
