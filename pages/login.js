import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Login({ usuario, usuariosIniciais }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [sucesso, setSucesso] = useState(false)
  const [usuarios, setUsuarios] = useState(usuariosIniciais)
  const [editando, setEditando] = useState(null)
  const router = useRouter()

  async function handleLogin(e) {
    e.preventDefault()
    setMensagem('')
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    })
    const dados = await res.json()
    setMensagem(dados.mensagem)
    setSucesso(res.ok)
    if (res.ok) {
      setTimeout(() => router.push('/produtos'), 1000)
    }
  }

  async function carregarUsuarios() {
    const res = await fetch('/api/usuarios')
    const data = await res.json()
    setUsuarios(data)
    setEditando(null)
  }

  async function salvarUsuario() {
    if (!editando.nome || !editando.email) {
      alert('Nome e e-mail são obrigatórios!')
      return
    }
    const res = await fetch('/api/usuarios?id=' + editando.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: editando.nome, email: editando.email, tipo: editando.tipo })
    })
    const dados = await res.json()
    if (res.ok) {
      alert('Usuário atualizado com sucesso!')
      carregarUsuarios()
    } else {
      alert(dados.mensagem || 'Erro ao salvar.')
    }
  }

  async function excluirUsuario(id, nome) {
    if (!confirm('Deseja excluir o usuário "' + nome + '"?')) return
    const res = await fetch('/api/usuarios?id=' + id, { method: 'DELETE' })
    const dados = await res.json()
    if (res.ok) {
      carregarUsuarios()
    } else {
      alert(dados.mensagem || 'Erro ao excluir.')
    }
  }

  return (
    <Layout usuario={usuario}>
      <main className="secao">
        <div className="container">
          <h2 className="titulo-secao">Entrar na conta</h2>
          <p className="subtitulo">
            Acesse sua conta para acompanhar seus pedidos e aproveitar nossos produtos frescos.
          </p>

          <div className="form-unico">
            <section className="card">
              <h3>Login</h3>
              <form className="formulario" onSubmit={handleLogin}>
                <label htmlFor="loginEmail">E-mail</label>
                <input
                  type="email"
                  id="loginEmail"
                  placeholder="Digite seu e-mail"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="loginSenha">Senha</label>
                <input
                  type="password"
                  id="loginSenha"
                  placeholder="Digite sua senha"
                  required
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
                <p className={`mensagem${sucesso ? ' sucesso' : ''}`}>{mensagem}</p>
                <button type="submit" className="btn">Entrar</button>
              </form>
              <p style={{ marginTop: '16px' }}>
                Ainda não tem conta?{' '}
                <Link href="/cadastro" className="link-verde">Cadastre-se aqui.</Link>
              </p>
            </section>
          </div>

          <section style={{ marginTop: '50px' }}>
            <h3 className="titulo-secao menor">Usuários cadastrados</h3>
            <div className="card">
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Perfil</th>
                    <th style={{ textAlign: 'center' }}>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="vazio">Nenhum usuário cadastrado ainda.</td>
                    </tr>
                  ) : usuarios.map(u =>
                    editando && editando.id === u._id ? (
                      <tr key={u._id}>
                        <td>
                          <input
                            type="text"
                            className="input-edicao"
                            value={editando.nome}
                            onChange={e => setEditando({ ...editando, nome: e.target.value })}
                          />
                        </td>
                        <td>
                          <input
                            type="email"
                            className="input-edicao"
                            value={editando.email}
                            onChange={e => setEditando({ ...editando, email: e.target.value })}
                          />
                        </td>
                        <td>
                          <select
                            className="input-edicao"
                            value={editando.tipo}
                            onChange={e => setEditando({ ...editando, tipo: e.target.value })}
                          >
                            <option value="Cliente">Cliente</option>
                            <option value="Produtor">Produtor</option>
                            <option value="Administrador">Administrador</option>
                          </select>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                            <button
                              className="btn"
                              style={{ padding: '6px 10px', fontSize: '13px' }}
                              onClick={salvarUsuario}
                            >
                              Salvar
                            </button>
                            <button
                              className="btn btn-secundario"
                              style={{ padding: '6px 10px', fontSize: '13px' }}
                              onClick={() => setEditando(null)}
                            >
                              Cancelar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      <tr key={u._id}>
                        <td>{u.nome}</td>
                        <td>{u.email}</td>
                        <td>{u.tipo}</td>
                        <td style={{ textAlign: 'center' }}>
                          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                            <button
                              className="btn btn-secundario"
                              style={{ padding: '6px 12px', fontSize: '13px' }}
                              onClick={() => setEditando({ id: u._id, nome: u.nome, email: u.email, tipo: u.tipo })}
                            >
                              Editar
                            </button>
                            <button
                              className="btn-remover"
                              style={{ padding: '6px 12px', fontSize: '13px' }}
                              onClick={() => excluirUsuario(u._id, u.nome)}
                            >
                              Excluir
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { getUsuario } = require('../lib/auth')
  const usuario = getUsuario(req)

  if (usuario) {
    return { redirect: { destination: '/produtos', permanent: false } }
  }

  const { conectarBanco } = require('../lib/database')
  const Usuario = require('../models/Usuario')
  await conectarBanco()
  const usuarios = await Usuario.find({}, '-senha').lean()

  return {
    props: {
      usuario: null,
      usuariosIniciais: JSON.parse(JSON.stringify(usuarios)),
    },
  }
}
