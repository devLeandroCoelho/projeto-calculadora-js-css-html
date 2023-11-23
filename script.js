// Obtém a referência para o visor da calculadora
let display = document.getElementById('display');

// Adiciona um valor ao visor
function appendToDisplay(value) {
  display.value += value;
}

// Limpa o visor
function clearDisplay() {
  display.value = '';
}

// Calcula a expressão no visor
function calculate() {
  try {
    const result = evaluateExpression(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

// Calcula a raiz quadrada do número no visor
function calculateSquareRoot() {
  try {
    const result = Math.sqrt(parseFloat(display.value));
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

// Avalia uma expressão matemática de forma segura
function evaluateExpression(expression) {
  // Utilizando parseFloat para converter strings numéricas
  // Utilizando RegExp para garantir que a expressão seja segura
  const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
  return Function(`'use strict'; return (${sanitizedExpression})`)();
}
