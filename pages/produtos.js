import { useState } from 'react'
import Layout from '../components/Layout'

export default function Produtos({ usuario, produtos }) {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('')
  const [quantidades, setQuantidades] = useState({})

  const produtosFiltrados = produtos.filter(function(p) {
    const nomeOk = p.nome.toLowerCase().includes(busca.toLowerCase())
    const categoriaOk = categoria === '' || p.categoria === categoria
    return nomeOk && categoriaOk
  })

  function getQtd(id) {
    return quantidades[id] || 1
  }

  function setQtd(id, valor) {
    setQuantidades({ ...quantidades, [id]: valor })
  }

  function adicionarCarrinho(produto) {
    const qtd = getQtd(produto.id)
    const carrinho = JSON.parse(localStorage.getItem('ecoverde_carrinho') || '[]')

    let encontrado = false
    for (let i = 0; i < carrinho.length; i++) {
      if (carrinho[i].id === produto.id) {
        carrinho[i].quantidade += qtd
        encontrado = true
        break
      }
    }

    if (!encontrado) {
      carrinho.push({
        id: produto.id,
        nome: produto.nome,
        emoji: produto.emoji,
        preco: produto.preco,
        unidade: produto.unidade,
        quantidade: qtd
      })
    }

    localStorage.setItem('ecoverde_carrinho', JSON.stringify(carrinho))
    alert(produto.nome + ' adicionado ao carrinho!')
  }

  return (
    <Layout usuario={usuario}>
      <main className="secao">
        <div className="container">
          <h2 className="titulo-secao">Nossos Produtos</h2>
          <p className="subtitulo">
            Frutas e verduras frescas, cultivadas de forma ecológica no coração da cidade.
            Direto da fazenda para a sua mesa.
          </p>

          <div className="card filtros" style={{ marginBottom: '28px' }}>
            <div className="grid-filtros">
              <div>
                <label>Pesquisar produto</label>
                <input
                  type="text"
                  placeholder="Ex: alface, morango, cenoura..."
                  value={busca}
                  onChange={function(e) { setBusca(e.target.value) }}
                />
              </div>
              <div>
                <label>Categoria</label>
                <select value={categoria} onChange={function(e) { setCategoria(e.target.value) }}>
                  <option value="">Todos</option>
                  <option value="Fruta">Frutas</option>
                  <option value="Verdura">Verduras</option>
                  <option value="Legume">Legumes</option>
                  <option value="Ervas">Ervas</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid-produtos">
            {produtosFiltrados.length === 0 ? (
              <p className="vazio">Nenhum produto encontrado.</p>
            ) : (
              produtosFiltrados.map(function(p) {
                return (
                  <article key={p.id} className="card produto-card">
                    <div className="produto-emoji">{p.emoji}</div>
                    <span className="tag">{p.categoria}</span>
                    <h3>{p.nome}</h3>
                    <p className="produto-preco">
                      R$ {p.preco.toFixed(2).replace('.', ',')}
                      <span style={{ fontSize: '13px', color: '#6b7280' }}> / {p.unidade}</span>
                    </p>
                    <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '8px' }}>
                      Estoque: {p.estoque} {p.unidade}
                    </p>
                    <div className="qty-controle">
                      <button className="qty-btn" onClick={function() { setQtd(p.id, Math.max(1, getQtd(p.id) - 1)) }}>−</button>
                      <input
                        type="number"
                        className="qty-input"
                        value={getQtd(p.id)}
                        min={1}
                        max={p.estoque}
                        onChange={function(e) { setQtd(p.id, parseInt(e.target.value) || 1) }}
                      />
                      <button className="qty-btn" onClick={function() { setQtd(p.id, Math.min(p.estoque, getQtd(p.id) + 1)) }}>+</button>
                    </div>
                    <button className="btn btn-adicionar" onClick={function() { adicionarCarrinho(p) }}>
                      Adicionar ao Carrinho
                    </button>
                  </article>
                )
              })
            )}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { getUsuario } = require('../lib/auth')
  const { listaProdutos } = require('../lib/produtos')

  const usuario = getUsuario(req)

  return {
    props: {
      usuario: usuario,
      produtos: listaProdutos
    }
  }
}
