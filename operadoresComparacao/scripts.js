// comparar se é identico A

"5" == 5; // Retorna true, pois o JavaScript converte a string para um número antes de comparar
"5" === 5; // Retorna false, porque os tipos são diferentes

"a" === "b";

// comparar se não é identico A

"5" != 5; // Retorna false, pois o JavaScript converte a string para um número antes de comparar
"5" !== 5; // Retorna true, porque os tipos são diferentes

"a" !== "b";

// indentificar se é maior ou menor

10 > 20;

10 < 20;

// Maior ou igual

10 >= 20;

// Menor ou igual

10 <= 20;

// exercicio

// Solicita ao usuário para inserir a primeira nota e converte para número
let nota1 = Number(prompt("Digite sua primeira nota"));

// Solicita ao usuário para inserir a segunda nota e converte para número
let nota2 = Number(prompt("Digite sua segunda nota"));

// Solicita ao usuário para inserir a terceira nota e converte para número
let nota3 = Number(prompt("Digite sua terceira nota"));

// Calcula a média das três notas
let resultados = (nota1 + nota2 + nota3) / 3;

// Exibe um alerta se a média é maior ou igual a 5
alert(resultados >= 5);

// Exibe a média no console
console.log(resultados);
