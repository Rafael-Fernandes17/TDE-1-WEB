const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const pares = document.getElementById("pares");
const soma = document.getElementById("somar");
const subtracao = document.getElementById("subtrair");
const multiplicacao = document.getElementById("multiplicar");
const divisao = document.getElementById("dividir");
let listaPares = [];

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

function verificarValores(funcao){
    let valor1 = num1.value;
    let valor2 = num2.value;

    if(valor1 == "" || valor2 == ""){
        alert("Preencha todos os campos!")
        return;
    } else {
        valor1 = parseFloat(valor1);
        valor2 = parseFloat(valor2);
    }

    const resultado = funcao(valor1, valor2);
    if(resultado %2 == 0){
        listaPares.push(resultado)
    }   
    alert("O resultado é: " + resultado);
}

if(soma){
    soma.addEventListener("click", function(){
        verificarValores(somar);
    });
}

if(subtracao){
    subtracao.addEventListener("click", function(){
        verificarValores(subtrair);
    });
}

if(multiplicacao){
    multiplicacao.addEventListener("click", function(){
        verificarValores(multiplicar);
    });
}

if(divisao){
    divisao.addEventListener("click", function(){
        verificarValores(dividir);
    })
}

if(pares){
    pares.addEventListener("click", function(){
        alert("Os resultados pares até o momento foram: " + listaPares);
    });
}
