const { pesos } = require("peso.json")

const form = document.querySelector('.form-convert');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const valorEntrada = document.querySelector('#value1').value;
  const unidade1 = document.querySelector('#unit_one').value;
  const unidade2 = document.querySelector('#unit_two').value;
  const resultado = document.querySelector('#resultado');

  let valorSaida;

  pesos.map(peso => console.log(peso.nome_medida))
  
  function converterPeso() {
    const 
  }

  resultado.value = valorSaida;
});
