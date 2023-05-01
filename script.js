// Obtém os elementos HTML que serão manipulados
const form = document.querySelector('form');
const input = document.querySelector('#valor1');
const select1 = document.querySelector('#unidade1');
const select2 = document.querySelector('#unidade2');
const button = document.querySelector('button');

// Define as proporções para cada unidade de medida em relação aos metros
const proporcoes = {
    metro: 1,
    centimetro: 0.01,
    quilometro: 1000,
    milhas: 1609.34,
    polegadas: 0.0254
};

// Define a função de conversão
function converter(valor, unidade1, unidade2) {
    const proporcao1 = proporcoes[unidade1];
    const proporcao2 = proporcoes[unidade2];
    return valor * proporcao1 / proporcao2;
}

const resultadoElement = document.querySelector('#resultado');

// Define a função para tratar o envio do formulário
function handleSubmit(event) {
    event.preventDefault();
    const valor = parseFloat(input.value);
    const unidade1 = select1.value;
    const unidade2 = select2.value;
    const resultado = converter(valor, unidade1, unidade2);
    resultadoElement.textContent = `${valor} ${unidade1} = ${resultado.toFixed(2)} ${unidade2}`;
}

// Adiciona o evento de clique no botão para realizar a conversão
button.addEventListener('click', handleSubmit);
