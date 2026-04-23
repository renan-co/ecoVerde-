import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Cadastro({ usuario }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [tipo, setTipo] = useState('Cliente')
  const [mensagem, setMensagem] = useState('')
  const [sucesso, setSucesso] = useState(false)
  const router = useRouter()

  async function handleCadastro(e) {
    e.preventDefault()
    setMensagem('')

    if (senha.length < 6) {
      setMensagem('A senha deve ter pelo menos 6 caracteres.')
      setSucesso(false)
      return
    }

    const res = await fetch('/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha, tipo }),
    })
    const dados = await res.json()
    setMensagem(dados.mensagem || (res.ok ? 'Cadastro realizado!' : 'Erro no cadastro.'))
    setSucesso(res.ok)
    if (res.ok) {
      setTimeout(() => router.push('/login'), 1500)
    }
  }

  return (
    <Layout usuario={usuario}>
      <main className="secao">
        <div className="container">
          <h2 className="titulo-secao">Criar conta</h2>
          <p className="subtitulo">
            Cadastre-se para acompanhar seus pedidos e receber novidades da fazenda.
          </p>

          <div className="form-unico">
            <section className="card">
              <h3>Novo cadastro</h3>
              <form className="formulario" onSubmit={handleCadastro}>
                <label htmlFor="nome">Nome completo</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Digite seu nome"
                  required
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  placeholder="Mínimo 6 caracteres"
                  required
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
                <label htmlFor="tipo">Tipo de perfil</label>
                <select id="tipo" value={tipo} onChange={e => setTipo(e.target.value)}>
                  <option value="Cliente">Cliente</option>
                  <option value="Produtor">Produtor</option>
                  <option value="Administrador">Administrador</option>
                </select>
                <p className={`mensagem${sucesso ? ' sucesso' : ''}`}>{mensagem}</p>
                <button type="submit" className="btn">Criar conta</button>
              </form>
              <p style={{ marginTop: '16px' }}>
                Já tem conta?{' '}
                <Link href="/login" className="link-verde">Faça login aqui.</Link>
              </p>
            </section>
          </div>
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
