//captura de todos os elementos
const inputN1 = document.getElementById("n1");
const inputN2 = document.getElementById("n2");
const botaoSomar = document.getElementById("btnSomar");
const botaoLimpar = document.getElementById("btnLimpar");
const pResultado = document.getElementById("Resultado");

function somar() {
    const valor1 = inputN1.value;
    const valor2 = inputN2.value;
    
    // || = OU
    if (valor1 ===  "" || valor2 === "") {
        pResultado.textContent = "preencha os dois cmapos!";
        return;
    };


const numero1 = Number(valor1);
const numero2 = Number(valor2);

if (isNaN(numero1) || isNaN(numero2)) {
    pResultado.textContent = "digite apenas numeros validos";
    return;

};

const soma = numero1 + numero2;

pResultado.textContent = "Resultado: " + soma;


}

//evento que realiza a soma sendo chamdo dom click
botaoSomar.addEventListener("click", somar);

function Limpar (){

    inputN1.value = "";
    inputN2.value = "";
    pResultado.textContent = "Resultado: ";

};

botaoLimpar.addEventListener("click",Limpar);