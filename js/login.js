carregarUsuarios();

document.getElementById('formLogin').addEventListener('submit', async function(e) {
  e.preventDefault();

  let email = document.getElementById('loginEmail').value;
  let senha = document.getElementById('loginSenha').value;
  let msg = document.getElementById('mensagemLogin');

  let resposta = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  });

  let dados = await resposta.json();
  msg.textContent = dados.mensagem;

  if (resposta.ok) {
    msg.className = 'mensagem sucesso';
    setTimeout(() => {
      window.location.href = 'produtos.html';
    }, 1000);
  } else {
    msg.className = 'mensagem';
  }
});

async function carregarUsuarios() {
  let resposta = await fetch('/api/usuarios');
  let usuarios = await resposta.json();
  let tbody = document.getElementById('listaUsuarios');
  tbody.innerHTML = '';

  if (usuarios.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" class="vazio">Nenhum usuário cadastrado ainda.</td></tr>';
    return;
  }

  usuarios.forEach(function(u) {
    let tr = document.createElement('tr');
    tr.id = 'linha-' + u._id;
    tr.innerHTML = `
      <td>${u.nome}</td>
      <td>${u.email}</td>
      <td>${u.tipo}</td>
      <td style="text-align:center;">
        <div style="display:flex; gap:6px; justify-content:center;">
          <button class="btn btn-secundario" style="padding:6px 12px; font-size:13px;"
            onclick="editarUsuario('${u._id}', '${u.nome}', '${u.email}', '${u.tipo}')">Editar</button>
          <button class="btn-remover" style="padding:6px 12px; font-size:13px;"
            onclick="excluirUsuario('${u._id}', '${u.nome}')">Excluir</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function editarUsuario(id, nome, email, tipo) {
  let tr = document.getElementById('linha-' + id);
  if (!tr) return;
  tr.innerHTML = `
    <td><input type="text" id="edit-nome-${id}" value="${nome}" class="input-edicao"></td>
    <td><input type="email" id="edit-email-${id}" value="${email}" class="input-edicao"></td>
    <td>
      <select id="edit-tipo-${id}" class="input-edicao">
        <option value="Cliente" ${tipo === 'Cliente' ? 'selected' : ''}>Cliente</option>
        <option value="Produtor" ${tipo === 'Produtor' ? 'selected' : ''}>Produtor</option>
        <option value="Administrador" ${tipo === 'Administrador' ? 'selected' : ''}>Administrador</option>
      </select>
    </td>
    <td style="text-align:center;">
      <div style="display:flex; gap:6px; justify-content:center;">
        <button class="btn" style="padding:6px 10px; font-size:13px;" onclick="salvarUsuario('${id}')">Salvar</button>
        <button class="btn btn-secundario" style="padding:6px 10px; font-size:13px;" onclick="carregarUsuarios()">Cancelar</button>
      </div>
    </td>
  `;
}

async function salvarUsuario(id) {
  let nome = document.getElementById('edit-nome-' + id).value;
  let email = document.getElementById('edit-email-' + id).value;
  let tipo = document.getElementById('edit-tipo-' + id).value;

  if (!nome || !email) {
    alert('Nome e e-mail são obrigatórios!');
    return;
  }

  let resposta = await fetch('/api/usuarios/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, tipo })
  });

  let dados = await resposta.json();

  if (resposta.ok) {
    alert('Usuário atualizado com sucesso!');
    carregarUsuarios();
  } else {
    alert(dados.mensagem || 'Erro ao salvar.');
  }
}

async function excluirUsuario(id, nome) {
  if (!confirm('Deseja excluir o usuário "' + nome + '"?')) return;

  let resposta = await fetch('/api/usuarios/' + id, { method: 'DELETE' });
  let dados = await resposta.json();

  if (resposta.ok) {
    carregarUsuarios();
  } else {
    alert(dados.mensagem || 'Erro ao excluir.');
  }
}
