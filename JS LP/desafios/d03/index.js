
//1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.


let peso = 80;
let altura = 1.89;

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
      
   console.log(`O IMC é ${imc}.`);
}
 
 calcularIMC(peso, altura); 


//2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.


function calcularFatorial (numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }


    let fatorial = 1;
    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    
    return fatorial
}

let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
    
//3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolarParaReais(valorEmDolar) {
    const cotacaoDolar = 4.80;
    const valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais;
}

const valorEmDolar = 10;
const valorEmReais = converterDolarParaReais(valorEmDolar);
console.log(valorEmReais);
console.log(`${valorEmDolar} dólares equivalem a ${valorEmReais.toFixed(2)} reais.`);

//4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

let altura1 = 10;
let largura = 200;

function areaEperimetro(altura1, largura){
    let area = altura1 * largura;
    let perimetro = 2 * (altura1 + largura);

    console.log(`A área e o perimetro de um retangulo equivalem: ${area} sendo a área e ${perimetro} sendo o perimetro.`);
}

areaEperimetro(altura1,largura);
    

//5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

let raio = 4;

function areaEperimetroSalaCircular(raio) {
    const Pi = 3.14;

    let area = parseInt(Pi * raio * raio);

    let circulo = parseInt(2 * Pi * area);

    console.log(area);
    console.log(circulo);
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${circulo.toFixed(2)} metros`);
}

areaEperimetroSalaCircular(raio);


 //6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

 // FEITA MANUALMENTE
 let valor1 = 2;
 let valor2 = 1;
 
 function tabuada(valor1, valor2) {
    let soma = valor1 + valor2;
    let subtracao = valor1 - valor2;
    let multiplicacao = valor1 * valor2;
    let divisao = valor1 / valor2;
    let poteciacao = valor1 ** valor2;
   

    
    console.log(`A tabuada manual do valor ${valor1} é: A soma é ${soma}, a subtracao é ${subtracao}, a multiplicacao é ${multiplicacao}, a divisao é ${divisao} e a poteciacao é ${poteciacao}.`)
 }

 tabuada(valor1,valor2);


 // FEITA USANDO LOOPING =D
const numerotabuada = 2;

function tabuadalooping(numerotabuada){
    console.log(`Tabuada do número ${numerotabuada}:`)
    for (let i = 1; i <= 10; i++){
        console.log(`${numerotabuada} x ${i} = ${numerotabuada * i}`)
    }
}
tabuadalooping(numerotabuada);