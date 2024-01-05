// Calculadora

function soma(num1, num2) {
  return num1 + num2;
}

function subtrair(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

let parametro1 = parseFloat(prompt("Digite o primeiro número:"));
let parametro2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt(
  "Escolha a operação: digite 1 para +, 2 para -, 3 para * e 4 para /"
);

if (operacao === "1") {
  alert("Resultado da soma: " + soma(parametro1, parametro2));
} else if (operacao === "2") {
  alert("Resultado da subtração: " + subtrair(parametro1, parametro2));
} else if (operacao === "3") {
  alert("Resultado da multiplicação: " + multiplicacao(parametro1, parametro2));
} else if (operacao === "4") {
  alert("Resultado da divisão: " + divisao(parametro1, parametro2));
} else {
  alert("ta errado primo, faz dnv ai");
}
