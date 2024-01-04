// Solicita ao usuário para inserir a primeira nota e converte para número
let nota1 = Number(prompt("Digite sua primeira nota"));

// Solicita ao usuário para inserir a segunda nota e converte para número
let nota2 = Number(prompt("Digite sua segunda nota"));

// Solicita ao usuário para inserir a terceira nota e converte para número
let nota3 = Number(prompt("Digite sua terceira nota"));

// Calcula a média das três notas
let resultados = (nota1 + nota2 + nota3) / 3;

// Verifica se a média é maior ou igual a 5
if (resultados >= 5) {
  // Se a média é maior ou igual a 5, exibe uma mensagem de aprovação
  alert("Você foi aprovado. Parabéns pelo resultado!");
} else {
  // Se a média é menor que 5, exibe uma mensagem de reprovação
  alert("Infelizmente, você foi reprovado. Estude mais para a próxima.");
}

// Exibe a média no console
console.log("Média:", resultados);
