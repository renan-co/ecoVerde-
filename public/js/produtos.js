verificarLogin();
atualizarNavbar();

async function carregarProdutos() {
  const grade = document.getElementById('grade-produtos');
  if (!grade) return;

  try {
    const resposta = await fetch(API + '/produtos');
    const produtos = await resposta.json();

    if (produtos.length === 0) {
      grade.innerHTML = '<p class="vazio">Nenhum produto cadastrado ainda.</p>';
      return;
    }

    grade.innerHTML = produtos.map(produto => `
      <div class="card produto-card">
        <p class="produto-emoji">${produto.emoji || '🌱'}</p>
        <h3 class="produto-nome">${produto.nome}</h3>
        <p class="produto-descricao">${produto.descricao}</p>
        <p class="produto-preco">R$ ${produto.preco.toFixed(2)}</p>
        <p class="produto-estoque">Estoque: ${produto.estoque} un.</p>
        <div style="display:flex; align-items:center; justify-content:center; gap:10px; margin: 8px 0;">
          <button onclick="diminuirQtd('${produto._id}')" style="width:32px;height:32px;border-radius:50%;border:2px solid #16a34a;background:white;color:#16a34a;font-size:18px;font-weight:bold;cursor:pointer;">−</button>
          <span id="qtd-${produto._id}" style="font-size:16px;font-weight:bold;min-width:24px;text-align:center;">1</span>
          <button onclick="aumentarQtd('${produto._id}', ${produto.estoque})" style="width:32px;height:32px;border-radius:50%;border:2px solid #16a34a;background:white;color:#16a34a;font-size:18px;font-weight:bold;cursor:pointer;">+</button>
        </div>
        <button class="btn btn-adicionar" onclick="adicionarAoCarrinho('${produto._id}', '${produto.nome}', ${produto.preco})">
          Adicionar ao carrinho
        </button>
      </div>
    `).join('');

  } catch (erro) {
    grade.innerHTML = '<p class="vazio">Erro ao carregar produtos. Verifique se o servidor está ligado.</p>';
  }
}

function aumentarQtd(produtoId, estoque) {
  const el = document.getElementById('qtd-' + produtoId);
  const atual = parseInt(el.textContent);
  if (atual < estoque) el.textContent = atual + 1;
}

function diminuirQtd(produtoId) {
  const el = document.getElementById('qtd-' + produtoId);
  const atual = parseInt(el.textContent);
  if (atual > 1) el.textContent = atual - 1;
}

async function adicionarAoCarrinho(produtoId, nome, preco) {
  const el = document.getElementById('qtd-' + produtoId);
  const quantidade = el ? parseInt(el.textContent) : 1;

  try {
    await fetch(API + '/carrinho', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ produtoId, nome, quantidade, preco }),
    });
    alert('✅ ' + quantidade + 'x ' + nome + ' adicionado ao carrinho!');
    el.textContent = 1;
  } catch (erro) {
    alert('❌ Erro ao adicionar ao carrinho.');
  }
}

carregarProdutos();
