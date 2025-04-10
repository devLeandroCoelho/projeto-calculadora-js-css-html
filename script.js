let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const result = evaluateExpression(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    const result = Math.sqrt(parseFloat(display.value));
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function evaluateExpression(expression) {
  const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
  return Function(`'use strict'; return (${sanitizedExpression})`)();
}
