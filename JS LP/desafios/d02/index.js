
//1. Criar uma função que exibe "Olá, mundo!" no console.
function exibirNoConsole1() {
    console.log('Olá, mundo!')
}

exibirNoConsole1();

//2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nomeComoParamentro(nome) {
    console.log(`Olá ${nome}`);
}

nomeComoParamentro('Douglas');

//3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function retornarDobro(numero) {
    return numero * 2;
}

let resultado1 = retornarDobro(10);
console.log(resultado1);

//4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function retornarTresNumeros(n1, n2, n3) {
    return (n1 + n2 + n3) / 3; 
}

let media = retornarTresNumeros (10, 5, 4);
console.log(`A média dos números 10, 5 e 4 é ${media}.`)

//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior (n1, n2) {
    return n1 > n2 ? n1 : n2;
}

let maior = encontrarMaior(2, 5);
 console.log(`O maior número entre 2 e 5 é ${maior}`);

 //6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function multiplicarNumero(n1) {
    return n1 * n1;
}

let resultado = multiplicarNumero(2);

console.log(`O quadrado do número 2 é ${resultado}`);

