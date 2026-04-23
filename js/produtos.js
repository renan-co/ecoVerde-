var listaProdutos = [
  { id: 1, nome: 'Maçã', categoria: 'Fruta', emoji: '🍎', preco: 4.90, unidade: 'kg', estoque: 50 },
  { id: 2, nome: 'Banana', categoria: 'Fruta', emoji: '🍌', preco: 3.50, unidade: 'kg', estoque: 80 },
  { id: 3, nome: 'Laranja', categoria: 'Fruta', emoji: '🍊', preco: 2.99, unidade: 'kg', estoque: 60 },
  { id: 4, nome: 'Morango', categoria: 'Fruta', emoji: '🍓', preco: 8.90, unidade: 'cx 200g', estoque: 25 },
  { id: 5, nome: 'Uva', categoria: 'Fruta', emoji: '🍇', preco: 7.90, unidade: 'kg', estoque: 40 },
  { id: 6, nome: 'Manga', categoria: 'Fruta', emoji: '🥭', preco: 5.50, unidade: 'unidade', estoque: 35 },
  { id: 7, nome: 'Alface', categoria: 'Verdura', emoji: '🥬', preco: 2.50, unidade: 'unidade', estoque: 45 },
  { id: 8, nome: 'Rúcula', categoria: 'Verdura', emoji: '🌱', preco: 3.00, unidade: 'maço', estoque: 30 },
  { id: 9, nome: 'Brócolis', categoria: 'Verdura', emoji: '🥦', preco: 4.90, unidade: 'unidade', estoque: 30 },
  { id: 10, nome: 'Cenoura', categoria: 'Legume', emoji: '🥕', preco: 3.50, unidade: 'kg', estoque: 55 },
  { id: 11, nome: 'Tomate', categoria: 'Legume', emoji: '🍅', preco: 6.90, unidade: 'kg', estoque: 40 },
  { id: 12, nome: 'Pepino', categoria: 'Legume', emoji: '🥒', preco: 3.90, unidade: 'unidade', estoque: 35 },
  { id: 13, nome: 'Manjericão', categoria: 'Ervas', emoji: '🌿', preco: 3.50, unidade: 'maço', estoque: 25 },
  { id: 14, nome: 'Salsinha', categoria: 'Ervas', emoji: '🌿', preco: 2.90, unidade: 'maço', estoque: 30 },
];

function mostrarProdutos(lista) {
  let container = document.getElementById('listaProdutos');
  container.innerHTML = '';

  if (lista.length === 0) {
    container.innerHTML = '<p class="vazio">Nenhum produto encontrado.</p>';
    return;
  }

  lista.forEach(function(p) {
    let card = document.createElement('article');
    card.className = 'card produto-card';
    card.innerHTML = `
      <div class="produto-emoji">${p.emoji}</div>
      <span class="tag">${p.categoria}</span>
      <h3>${p.nome}</h3>
      <p class="produto-preco">R$ ${p.preco.toFixed(2).replace('.', ',')} <span style="font-size:13px; color:#6b7280;">/ ${p.unidade}</span></p>
      <p style="font-size:13px; color:#9ca3af; margin-bottom:8px;">Estoque: ${p.estoque} ${p.unidade}</p>
      <div class="qty-controle">
        <button class="qty-btn" onclick="diminuirQtd(${p.id})">−</button>
        <input type="number" id="qtd-${p.id}" value="1" min="1" max="${p.estoque}" class="qty-input">
        <button class="qty-btn" onclick="aumentarQtd(${p.id})">+</button>
      </div>
      <button class="btn btn-adicionar" onclick="adicionarCarrinho(${p.id})">Adicionar ao Carrinho</button>
    `;
    container.appendChild(card);
  });
}

function aumentarQtd(id) {
  let input = document.getElementById('qtd-' + id);
  let produto = listaProdutos.find(function(p) { return p.id === id; });
  if (parseInt(input.value) < produto.estoque) {
    input.value = parseInt(input.value) + 1;
  }
}

function diminuirQtd(id) {
  let input = document.getElementById('qtd-' + id);
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

function adicionarCarrinho(id) {
  let produto = listaProdutos.find(function(p) { return p.id === id; });
  let qtd = parseInt(document.getElementById('qtd-' + id).value);

  if (qtd < 1 || qtd > produto.estoque) {
    alert('Quantidade inválida!');
    return;
  }

  let carrinho = JSON.parse(localStorage.getItem('ecoverde_carrinho') || '[]');
  let jaExiste = carrinho.find(function(i) { return i.id === id; });

  if (jaExiste) {
    jaExiste.quantidade += qtd;
  } else {
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      emoji: produto.emoji,
      preco: produto.preco,
      unidade: produto.unidade,
      quantidade: qtd
    });
  }

  localStorage.setItem('ecoverde_carrinho', JSON.stringify(carrinho));
  alert(produto.nome + ' adicionado ao carrinho!');
}

document.getElementById('busca').addEventListener('input', function() {
  let termo = this.value.toLowerCase();
  let cat = document.getElementById('filtroCategoria').value;

  let filtrado = listaProdutos.filter(function(p) {
    return p.nome.toLowerCase().includes(termo) && (cat === '' || p.categoria === cat);
  });

  mostrarProdutos(filtrado);
});

document.getElementById('filtroCategoria').addEventListener('change', function() {
  let cat = this.value;
  let termo = document.getElementById('busca').value.toLowerCase();

  let filtrado = listaProdutos.filter(function(p) {
    return p.nome.toLowerCase().includes(termo) && (cat === '' || p.categoria === cat);
  });

  mostrarProdutos(filtrado);
});

mostrarProdutos(listaProdutos);
