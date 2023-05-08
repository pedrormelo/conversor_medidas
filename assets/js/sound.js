// const buttons = document.querySelectorAll('.btn');
// const sound = new Audio('assets\sounds\1103408807704547359.mp3');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function() {
//     sound.play();
//   });
// }

// Cria um novo objeto Audio com o arquivo de áudio
const audio = new Audio("C:\Users\sakki\OneDrive\Área de Trabalho\1103408807704547359.mp3");

// Seleciona o botão
const buttonSound = document.getElementById("btn1");

// Adiciona um evento de clique ao botão
buttonSound.addEventListener("click", function() {
  // Toca o arquivo de áudio
  audio.play();
});