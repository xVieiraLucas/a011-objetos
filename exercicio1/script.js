// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

const sacolao = []

const fruta1 = {
    nome: "Melancia",
    preco: 7,
    disponibilidade: true}
const fruta2 = {
    nome: "Abacaxi",
    preco: 5,
    disponibilidade: false
}
const fruta3 = {
    nome: "Laranja",
    preco: 2,
    disponibilidade: true
}

sacolao.push(fruta1)
sacolao.push(fruta2)
sacolao.push(fruta3)
// OU sacolao.push(fruta1, fruta2, fruta3)
console.log("Frutas do sacolão: ", sacolao)
