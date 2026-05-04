if (localStorage.getItem('usuarioNome')) {
  window.location.href = '/produtos.html';
}

async function fazerLogin(evento) {
  evento.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const resposta = await fetch(API + '/usuarios/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });
    const dados = await resposta.json();

    if (dados.usuario) {
      localStorage.setItem('usuarioNome', dados.usuario.nome);
      mostrarAlerta('alerta-login', 'Login realizado! Redirecionando...', 'sucesso');
      setTimeout(() => { window.location.href = '/produtos.html'; }, 1000);
    } else {
      mostrarAlerta('alerta-login', dados.mensagem, 'erro');
    }

  } catch (erro) {
    mostrarAlerta('alerta-login', 'Erro ao fazer login. Tente novamente.', 'erro');
  }
}

async function carregarUsuarios() {
  const lista = document.getElementById('lista-usuarios');
  if (!lista) return;

  try {
    const resposta = await fetch(API + '/usuarios');
    const usuarios = await resposta.json();

    if (usuarios.length === 0) {
      lista.innerHTML = '<tr><td colspan="3" class="vazio">Nenhum usuário cadastrado ainda.</td></tr>';
      return;
    }

    lista.innerHTML = usuarios.map(u => `
      <tr>
        <td>${u.nome}</td>
        <td>${u.email}</td>
        <td class="acoes">
          <button class="btn btn-secundario" style="font-size:13px; padding:6px 10px;" onclick="editarUsuario('${u.id}', '${u.nome}', '${u.email}')">Editar</button>
          <button class="btn-remover" onclick="excluirUsuario('${u.id}')">Excluir</button>
        </td>
      </tr>
    `).join('');

  } catch (erro) {
    lista.innerHTML = '<tr><td colspan="3">Erro ao carregar usuários.</td></tr>';
  }
}

async function editarUsuario(id, nomeAtual, emailAtual) {
  const novoNome = prompt('Novo nome:', nomeAtual);
  if (novoNome === null) return;

  const novoEmail = prompt('Novo e-mail:', emailAtual);
  if (novoEmail === null) return;

  try {
    await fetch(API + '/usuarios/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: novoNome, email: novoEmail }),
    });
    carregarUsuarios();
  } catch (erro) {
    alert('Erro ao editar usuário.');
  }
}

async function excluirUsuario(id) {
  if (!confirm('Tem certeza que deseja excluir este usuário?')) return;

  try {
    await fetch(API + '/usuarios/' + id, { method: 'DELETE' });
    carregarUsuarios();
  } catch (erro) {
    alert('Erro ao excluir usuário.');
  }
}

carregarUsuarios();
