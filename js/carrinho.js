// carrinho.js - gerencia o carrinho de compras

function carregarCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('ecoverde_carrinho') || '[]');
  let tbody = document.getElementById('listaCarrinho');
  let vazio = document.getElementById('carrinhoVazio');
  let conteudo = document.getElementById('carrinhoConteudo');

  if (carrinho.length === 0) {
    conteudo.style.display = 'none';
    vazio.style.display = 'block';
    return;
  }

  conteudo.style.display = 'block';
  vazio.style.display = 'none';
  tbody.innerHTML = '';

  let total = 0;
  let totalItens = 0;

  carrinho.forEach(function(item) {
    let subtotal = item.preco * item.quantidade;
    total += subtotal;
    totalItens += item.quantidade;

    let tr = document.createElement('tr');
    tr.id = 'linha-' + item.id;
    tr.innerHTML = `
      <td>${item.emoji} <strong>${item.nome}</strong> <small style="color:#6b7280;">/ ${item.unidade}</small></td>
      <td style="text-align:center;">
        <div class="qty-controle qty-controle-sm">
          <button class="qty-btn" onclick="diminuir(${item.id})">−</button>
          <span class="qty-display">${item.quantidade}</span>
          <button class="qty-btn" onclick="aumentar(${item.id})">+</button>
        </div>
      </td>
      <td style="text-align:right;">R$ ${item.preco.toFixed(2).replace('.', ',')}</td>
      <td style="text-align:right; color:#166534; font-weight:bold;">R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
      <td style="text-align:center;">
        <button class="btn-remover" onclick="remover(${item.id})">Remover</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('totalItens').textContent = totalItens;
  document.getElementById('totalPreco').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
}

// remove um item do carrinho
function remover(id) {
  let carrinho = JSON.parse(localStorage.getItem('ecoverde_carrinho') || '[]');
  carrinho = carrinho.filter(function(i) { return i.id !== id; });
  localStorage.setItem('ecoverde_carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}

// aumenta a quantidade de um item
function aumentar(id) {
  let carrinho = JSON.parse(localStorage.getItem('ecoverde_carrinho') || '[]');
  let item = carrinho.find(function(i) { return i.id === id; });
  if (item) item.quantidade += 1;
  localStorage.setItem('ecoverde_carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}

// diminui a quantidade; remove se chegar a zero
function diminuir(id) {
  let carrinho = JSON.parse(localStorage.getItem('ecoverde_carrinho') || '[]');
  let item = carrinho.find(function(i) { return i.id === id; });

  if (item) {
    item.quantidade -= 1;
    if (item.quantidade <= 0) {
      carrinho = carrinho.filter(function(i) { return i.id !== id; });
    }
  }

  localStorage.setItem('ecoverde_carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}

// limpa todo o carrinho
document.getElementById('btnLimpar').addEventListener('click', function() {
  if (confirm('Deseja limpar o carrinho?')) {
    localStorage.removeItem('ecoverde_carrinho');
    carregarCarrinho();
  }
});

// finaliza a compra
document.getElementById('btnFinalizar').addEventListener('click', function() {
  let carrinho = JSON.parse(localStorage.getItem('ecoverde_carrinho') || '[]');

  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  let total = 0;
  carrinho.forEach(function(item) {
    total += item.preco * item.quantidade;
  });

  localStorage.removeItem('ecoverde_carrinho');

  document.getElementById('carrinhoConteudo').style.display = 'none';
  document.getElementById('carrinhoVazio').style.display = 'block';
  document.getElementById('carrinhoVazio').innerHTML = `
    <p style="font-size:50px;">✅</p>
    <h3 style="margin: 16px 0 8px; color:#166534;">Pedido realizado com sucesso!</h3>
    <p>Total pago: <strong>R$ ${total.toFixed(2).replace('.', ',')}</strong></p>
    <p style="margin-top:8px; color:#6b7280; font-size:14px;">Obrigado por escolher a Eco Verde 🌱</p>
    <br><a href="produtos.html" class="btn">Continuar Comprando</a>
  `;
});

carregarCarrinho();
