if (localStorage.getItem('usuarioNome')) {
  window.location.href = '/produtos.html';
}

async function cadastrarUsuario(evento) {
  evento.preventDefault();
  const nome  = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const resposta = await fetch(API + '/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha }),
    });
    const dados = await resposta.json();

    if (dados.mensagem && dados.mensagem.includes('cadastrado')) {
      mostrarAlerta('alerta-cadastro', dados.mensagem, 'erro');
      return;
    }

    mostrarAlerta('alerta-cadastro', 'Cadastro realizado! Redirecionando para o login...', 'sucesso');
    evento.target.reset();
    setTimeout(() => { window.location.href = '/login.html'; }, 1500);

  } catch (erro) {
    mostrarAlerta('alerta-cadastro', 'Erro ao cadastrar. Tente novamente.', 'erro');
  }
}
