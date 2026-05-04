const API = 'http://localhost:3000';

function verificarLogin() {
  const usuario = localStorage.getItem('usuarioNome');
  if (!usuario) {
    window.location.href = '/login.html';
  }
}

function sair() {
  localStorage.removeItem('usuarioNome');
  window.location.href = '/login.html';
}

function atualizarNavbar() {
  const usuario = localStorage.getItem('usuarioNome');
  const areaLogin = document.getElementById('area-login');
  if (!areaLogin) return;

  if (usuario) {
    areaLogin.innerHTML = `
      <span style="color: white; padding: 8px 10px;">Olá, ${usuario}</span>
      <button onclick="sair()" class="btn-menu-sair">Sair</button>
    `;
  } else {
    areaLogin.innerHTML = `
      <a href="/login.html">Entrar</a>
      <a href="/cadastro.html">Cadastrar</a>
    `;
  }
}

function mostrarAlerta(elementoId, mensagem, tipo) {
  const alerta = document.getElementById(elementoId);
  if (!alerta) return;
  alerta.className = 'alerta alerta-' + tipo;
  alerta.textContent = mensagem;
  alerta.style.display = 'block';
  setTimeout(() => { alerta.style.display = 'none'; }, 4000);
}
