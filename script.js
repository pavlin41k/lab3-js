function calculateTask1() {
    const input = document.getElementById('numberInput1').value;
    const resultElement = document.getElementById('result1');
    
    if (!input || isNaN(input)) {
        resultElement.textContent = 'Будь ласка, введіть дійсне число.';
        return;
    }

    const digits = input.split('').map(Number);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    const product = digits.reduce((acc, digit) => acc * digit, 1);

    resultElement.textContent = `Сума цифр: ${sum}, Добуток цифр: ${product}`;
}


function findLargestDigitTask2() {
    const input = document.getElementById('numberInput2').value;
    const resultElement = document.getElementById('result2');
    
    if (!input || isNaN(input) || input <= 0 || !Number.isInteger(Number(input))) {
        resultElement.textContent = 'Будь ласка, введіть дійсне натуральне число.';
        return;
    }

    const digits = input.split('').map(Number);
    const largestDigit = Math.max(...digits);

    resultElement.textContent = `Найбільша цифра: ${largestDigit}`;
}


const enteredNumbers = new Set();

function checkDuplicate() {
    const input = document.getElementById('numberInput3').value;
    const resultElement = document.getElementById('result3');
    
    if (!input || isNaN(input)) {
        resultElement.textContent = 'Будь ласка, введіть дійсне число.';
        return;
    }

    if (enteredNumbers.has(input)) {
        resultElement.textContent = `Число ${input} вже введено.`;
    } else {
        enteredNumbers.add(input);
        resultElement.textContent = `Число ${input} успішно додано.`;
        updateEnteredNumbersList();
    }
}


function updateEnteredNumbersList() {
    const enteredNumbersListElement = document.getElementById('enteredNumbersList');
    enteredNumbersListElement.innerHTML = ''; 

    enteredNumbers.forEach(number => {
        const listItem = document.createElement('li');
        listItem.textContent = number;
        enteredNumbersListElement.appendChild(listItem);
    });
}


updateEnteredNumbersList();

function countCharacters() {
    const inputText = document.getElementById('textInput4').value;
    const resultElement = document.getElementById('result4');

    const characterCount = inputText.length;

    resultElement.textContent = `Кількість символів у тексті: ${characterCount}`;
}




