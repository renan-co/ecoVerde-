verificarLogin();
atualizarNavbar();

async function carregarCarrinho() {
  const tabela = document.getElementById('corpo-tabela-carrinho');
  const totalEl = document.getElementById('total-carrinho');
  const qtdEl = document.getElementById('qtd-itens');
  if (!tabela) return;

  try {
    const resposta = await fetch(API + '/carrinho');
    const itens = await resposta.json();

    if (itens.length === 0) {
      tabela.innerHTML = '<tr><td colspan="5" class="vazio">Carrinho vazio.</td></tr>';
      if (totalEl) totalEl.textContent = 'R$ 0,00';
      if (qtdEl) qtdEl.textContent = '0';
      return;
    }

    const total = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
    const qtdTotal = itens.reduce((soma, item) => soma + item.quantidade, 0);

    if (totalEl) totalEl.textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
    if (qtdEl) qtdEl.textContent = qtdTotal;

    tabela.innerHTML = itens.map(item => `
      <tr>
        <td>${item.nome}</td>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <button onclick="mudarQuantidade('${item._id}', ${item.quantidade - 1})" style="width:28px;height:28px;border-radius:50%;border:2px solid #16a34a;background:white;color:#16a34a;font-size:16px;font-weight:bold;cursor:pointer;">−</button>
            <span style="font-weight:bold; min-width:20px; text-align:center;">${item.quantidade}</span>
            <button onclick="mudarQuantidade('${item._id}', ${item.quantidade + 1})" style="width:28px;height:28px;border-radius:50%;border:2px solid #16a34a;background:white;color:#16a34a;font-size:16px;font-weight:bold;cursor:pointer;">+</button>
          </div>
        </td>
        <td>R$ ${item.preco.toFixed(2)}</td>
        <td>R$ ${(item.preco * item.quantidade).toFixed(2)}</td>
        <td><button class="btn-remover" onclick="removerDoCarrinho('${item._id}')">Excluir</button></td>
      </tr>
    `).join('');

  } catch (erro) {
    tabela.innerHTML = '<tr><td colspan="5">Erro ao carregar carrinho.</td></tr>';
  }
}

async function mudarQuantidade(id, novaQuantidade) {
  try {
    await fetch(API + '/carrinho/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantidade: novaQuantidade }),
    });
    carregarCarrinho();
  } catch (erro) {
    console.error('Erro ao atualizar quantidade:', erro);
  }
}

async function removerDoCarrinho(id) {
  try {
    await fetch(API + '/carrinho/' + id, { method: 'DELETE' });
    carregarCarrinho();
  } catch (erro) {
    console.error('Erro ao remover item:', erro);
  }
}

async function limparCarrinho() {
  if (!confirm('Tem certeza que deseja esvaziar o carrinho?')) return;
  try {
    await fetch(API + '/carrinho', { method: 'DELETE' });
    carregarCarrinho();
  } catch (erro) {
    console.error('Erro ao limpar carrinho:', erro);
  }
}

carregarCarrinho();
