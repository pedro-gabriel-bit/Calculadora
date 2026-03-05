//captura de todos os elementos
const inputN1 = document.getElementById("n1");
const inputN2 = document.getElementById("n2");
const botaoSomar = document.getElementById("btnSomar");
const botaoSubtrair = document.getElementById("btnSubtrair");
const botaonMultiplicar = document.getElementById("btnMultiplicar");
const botaoDividir = document.getElementById("btnDividir");
const botaoLimpar = document.getElementById("btnLimpar");
const pResultado = document.getElementById("Resultado");

function somar() {
    const valor1 = inputN1.value;
    const valor2 = inputN2.value;

    // || = OU
    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "preencha os dois camapos!";
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


};

function subtrair() {
    const valor1 = inputN1.value;
    const valor2 = inputN2.value;

    // || = OU
    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "preencha os dois camapos!";
        return;
    };


    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if (isNaN(numero1) || isNaN(numero2)) {
        pResultado.textContent = "digite apenas numeros validos";
        return;

    };

    const subtrair = numero1 - numero2;
    pResultado.textContent = "Resultado: " + subtrair;

};

function multiplicar() {

    const valor1 = inputN1.value;
    const valor2 = inputN2.value;

    // || = OU
    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "preencha os dois camapos!";
        return;
    };


    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if (isNaN(numero1) || isNaN(numero2)) {
        pResultado.textContent = "digite apenas numeros validos";
        return;

    };

    const multiplicar = numero1 * numero2;
    pResultado.textContent = "Resultado: " + multiplicar;

};

function dividir() {


    const valor1 = inputN1.value;
    const valor2 = inputN2.value;

    // || = OU
    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "preencha os dois camapos!";
        return;
    };


    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if (isNaN(numero1) || isNaN(numero2)) {
        pResultado.textContent = "digite apenas numeros validos";
        return;

    };

    const dividir = numero1 / numero2;
    pResultado.textContent = "Resultado: " + dividir;



    if (numero2 === 0) {
        pResultado.textContent = "digite um numero que nao seja zero";
        return;
    };
};

//evento que realiza a soma sendo chamdo dom click
function limpar() {

    inputN1.value = "";
    inputN2.value = "";
    pResultado.textContent = "Resultado: ";

};

botaoSomar.addEventListener("click", somar);
botaoSubtrair.addEventListener("click", subtrair);
botaonMultiplicar.addEventListener("click", multiplicar);
botaoDividir.addEventListener("click", dividir);
botaoLimpar.addEventListener("click", limpar);