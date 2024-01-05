// Array 'notas' contém os valores resultantes da multiplicação de diferentes números
let notas = [2 * 5, 3 * 10, 5 * 20, 8 * 50, 15 * 100];

// Variável 'total' armazenará a soma dos valores no array 'notas'
let total = 0;

// Loop 'for' para percorrer o array 'notas'
for (let repeticoes = 0; repeticoes < notas.length; repeticoes++) {
  // Adiciona o valor atual do array 'notas' à variável 'total'
  total += notas[repeticoes];

  // Comentário genérico indicando que este bloco pertence a uma estrutura de repetição 'for'
}

// Exibe o resultado final da soma dos valores no console
console.log(total);
