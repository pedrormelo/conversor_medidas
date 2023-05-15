const form = document.querySelector('.form-convert');
const input = document.querySelector('#value1');
const select1 = document.querySelector('#unit_one');
const select2 = document.querySelector('#unit_two');
const button = document.querySelector('#convert');
const resultadoElement = document.querySelector('#resultado');

const proporcoes = {
  kg: 1,
  lb: 0.453592,
  gramas: 0.001,
  mg: 0.000001,
  toneladas: 1000
};

function converter(valor, unidade1, unidade2) {
  const proporcao1 = proporcoes[unidade1];
  const proporcao2 = proporcoes[unidade2];
  return valor * proporcao1 / proporcao2;
}

function handleSubmit(event) {
  event.preventDefault();
  const valor = parseFloat(input.value);
  const unidade1 = select1.value;
  const unidade2 = select2.value;
  const resultado = converter(valor, unidade1, unidade2);
  resultadoElement.textContent = `${valor} ${unidade1} = ${resultado.toFixed(2)} ${unidade2}`;
}

form.addEventListener('submit', handleSubmit);
