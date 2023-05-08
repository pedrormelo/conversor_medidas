// Obtém os elementos HTML que serão manipulados
const form = document.querySelector('form');
const input = document.querySelector('#value1');
const select1 = document.querySelector('#unit_one');
const select2 = document.querySelector('#unit_two');
const button = document.querySelector('#convert');

// Define as proporções para cada unidade de medida em relação aos metros
const proporcoes = {
    metros: 1,
    centimetros: 0.01,
    quilometros: 1000,
    milhas: 1609.34,
    polegadas: 0.0254
};

// Define a função de conversão
function converter(value1, unit_one, unit_two) {
    const proporcao1 = proporcoes[unit_one];
    const proporcao2 = proporcoes[unit_two];
    return value1 * proporcao1 / proporcao2;
}

const resultadoElement = document.querySelector('#resultado');

// Define a função para tratar o envio do formulário
function handleSubmit(event) {
    event.preventDefault();
    const value1 = parseFloat(input.value);
    const unit_one = select1.value;
    const unit_two = select2.value;
    const resultado = converter(value1, unit_one, unit_two);
    resultadoElement.textContent = `${value1} ${unit_one} = ${resultado.toFixed(2)} ${unit_two}`;
}

// Adiciona o evento de clique no botão para realizar a conversão
button.addEventListener('click', handleSubmit);

