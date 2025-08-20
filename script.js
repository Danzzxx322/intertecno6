// Função para botão "Ver Cardápios"
function irPara(pagina) {
  window.location.href = pagina;
}

// Exibir uma dica aleatória no console ou elemento
const dicas = [
  "Coma frutas todos os dias 🍎",
  "Beba bastante água 💧",
  "Inclua vegetais em todas as refeições 🌱",
  "Evite refrigerantes e ultraprocessados 🚫"
];

document.addEventListener("DOMContentLoaded", () => {
  const dicaEl = document.getElementById("dica-dia");
  if(dicaEl){
    const aleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    dicaEl.textContent = aleatoria;
  }
});
