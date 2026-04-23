document.getElementById('formCadastro').addEventListener('submit', async function(e) {
  e.preventDefault();

  const nome  = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const tipo  = document.getElementById('tipo').value;
  const msg   = document.getElementById('mensagem');

  if (senha.length < 6) {
    msg.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    return;
  }

  const resposta = await fetch('/api/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha, tipo })
  });

  const dados = await resposta.json();
  msg.textContent = dados.mensagem;

  if (resposta.ok) {
    msg.className = 'mensagem sucesso';
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
  } else {
    msg.className = 'mensagem';
  }
});
