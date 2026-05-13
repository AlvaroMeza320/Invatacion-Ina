// Activar música al primer toque/click
window.addEventListener("click", () => {

  const musica = document.getElementById("musica");

  musica.play();

}, { once:true });