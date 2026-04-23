import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Carrinho({ usuario }) {
  const [carrinho, setCarrinho] = useState([])
  const [carregado, setCarregado] = useState(false)
  const [pedidoFeito, setPedidoFeito] = useState(false)
  const [totalFinal, setTotalFinal] = useState(0)

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('ecoverde_carrinho') || '[]')
    setCarrinho(dados)
    setCarregado(true)
  }, [])

  function salvar(novoCarrinho) {
    localStorage.setItem('ecoverde_carrinho', JSON.stringify(novoCarrinho))
    setCarrinho(novoCarrinho)
  }

  function remover(id) {
    salvar(carrinho.filter(i => i.id !== id))
  }

  function aumentar(id) {
    salvar(carrinho.map(i => i.id === id ? { ...i, quantidade: i.quantidade + 1 } : i))
  }

  function diminuir(id) {
    salvar(
      carrinho
        .map(i => i.id === id ? { ...i, quantidade: i.quantidade - 1 } : i)
        .filter(i => i.quantidade > 0)
    )
  }

  function limpar() {
    if (confirm('Deseja limpar o carrinho?')) {
      salvar([])
    }
  }

  function finalizar() {
    if (carrinho.length === 0) {
      alert('Seu carrinho está vazio!')
      return
    }
    const total = carrinho.reduce((acc, i) => acc + i.preco * i.quantidade, 0)
    setTotalFinal(total)
    localStorage.removeItem('ecoverde_carrinho')
    setCarrinho([])
    setPedidoFeito(true)
  }

  const total = carrinho.reduce((acc, i) => acc + i.preco * i.quantidade, 0)
  const totalItens = carrinho.reduce((acc, i) => acc + i.quantidade, 0)

  return (
    <Layout usuario={usuario}>
      <main className="secao">
        <div className="container">
          <h2 className="titulo-secao">Meu Carrinho</h2>
          <p className="subtitulo">Revise os produtos e finalize o seu pedido.</p>

          {!carregado ? null : pedidoFeito ? (
            <div className="card texto-centro" style={{ padding: '48px 20px' }}>
              <p style={{ fontSize: '50px' }}>✅</p>
              <h3 style={{ margin: '16px 0 8px', color: '#166534' }}>Pedido realizado com sucesso!</h3>
              <p>Total pago: <strong>R$ {totalFinal.toFixed(2).replace('.', ',')}</strong></p>
              <p style={{ marginTop: '8px', color: '#6b7280', fontSize: '14px' }}>
                Obrigado por escolher a Eco Verde 🌱
              </p>
              <br />
              <Link href="/produtos" className="btn">Continuar Comprando</Link>
            </div>
          ) : carrinho.length === 0 ? (
            <div className="card texto-centro" style={{ padding: '48px 20px' }}>
              <p style={{ fontSize: '48px' }}>🛒</p>
              <h3 style={{ margin: '16px 0 8px' }}>Seu carrinho está vazio</h3>
              <p style={{ color: '#476047', marginBottom: '24px' }}>
                Adicione produtos frescos da nossa fazenda!
              </p>
              <Link href="/produtos" className="btn">Ver Produtos</Link>
            </div>
          ) : (
            <>
              <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: '20px' }}>
                <table>
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th style={{ textAlign: 'center' }}>Quantidade</th>
                      <th style={{ textAlign: 'right' }}>Preço Unit.</th>
                      <th style={{ textAlign: 'right' }}>Subtotal</th>
                      <th style={{ textAlign: 'center' }}>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrinho.map(item => (
                      <tr key={item.id}>
                        <td>
                          {item.emoji} <strong>{item.nome}</strong>{' '}
                          <small style={{ color: '#6b7280' }}>/ {item.unidade}</small>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <div className="qty-controle qty-controle-sm">
                            <button className="qty-btn" onClick={() => diminuir(item.id)}>−</button>
                            <span className="qty-display">{item.quantidade}</span>
                            <button className="qty-btn" onClick={() => aumentar(item.id)}>+</button>
                          </div>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          R$ {item.preco.toFixed(2).replace('.', ',')}
                        </td>
                        <td style={{ textAlign: 'right', color: '#166534', fontWeight: 'bold' }}>
                          R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <button className="btn-remover" onClick={() => remover(item.id)}>
                            Remover
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="carrinho-resumo">
                <div className="card carrinho-total-card">
                  <div className="carrinho-total-linha">
                    <span>Total de itens:</span>
                    <span>{totalItens}</span>
                  </div>
                  <div className="carrinho-total-linha carrinho-total-destaque">
                    <span>Total a pagar:</span>
                    <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="botoes-form">
                    <button className="btn btn-secundario" onClick={limpar}>
                      Limpar Carrinho
                    </button>
                    <button className="btn btn-finalizar" onClick={finalizar}>
                      Finalizar Compra
                    </button>
                  </div>
                </div>

                <div className="card verde-claro" style={{ padding: '20px' }}>
                  <h3 style={{ marginBottom: '10px', color: '#166534' }}>🌿 Dica Eco Verde</h3>
                  <p style={{ fontSize: '14px', color: '#374151' }}>
                    Todos os nossos produtos são cultivados sem agrotóxicos, com reaproveitamento
                    de água e energia solar. Consumir local reduz o carbono no transporte!
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { getUsuario } = require('../lib/auth')
  const usuario = getUsuario(req)
  return { props: { usuario } }
}
