// main.js - utilitários globais do Eco Verde

// preenche o ano atual no rodapé de todas as páginas
document.querySelectorAll('#ano').forEach(function(el) {
  el.textContent = new Date().getFullYear();
});
