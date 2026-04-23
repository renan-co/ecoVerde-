// cadastro.js — envia o formulário de cadastro para a API

document.getElementById('formCadastro').addEventListener('submit', async function(e) {
  e.preventDefault(); // impede o envio normal do formulário

  const nome  = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const tipo  = document.getElementById('tipo').value;
  const msg   = document.getElementById('mensagem');

  // Validação simples
  if (senha.length < 6) {
    msg.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    return;
  }

  // Envia os dados para a API
  const resposta = await fetch('/api/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha, tipo })
  });

  const dados = await resposta.json();
  msg.textContent = dados.mensagem;

  if (resposta.ok) {
    msg.className = 'mensagem sucesso';
    // Cadastrou! Vai para a página de login após 1,5 segundos
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
  } else {
    msg.className = 'mensagem';
  }
});
