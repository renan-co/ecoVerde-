const jwt = require('jsonwebtoken')
const cookie = require('cookie')

const SEGREDO = process.env.SESSION_SECRET || 'ecoverde-chave-2026'
const NOME_COOKIE = 'ecoverde_token'

function criarSessao(res, usuario) {
  const token = jwt.sign(
    {
      id: String(usuario._id),
      nome: usuario.nome,
      email: usuario.email,
      tipo: usuario.tipo
    },
    SEGREDO,
    { expiresIn: '4h' }
  )

  res.setHeader('Set-Cookie', cookie.serialize(NOME_COOKIE, token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 4,
    sameSite: 'lax'
  }))
}

function destruirSessao(res) {
  res.setHeader('Set-Cookie', cookie.serialize(NOME_COOKIE, '', {
    httpOnly: true,
    path: '/',
    maxAge: 0
  }))
}

function getUsuario(req) {
  const cookies = cookie.parse(req.headers.cookie || '')
  const token = cookies[NOME_COOKIE]

  if (!token) return null

  try {
    return jwt.verify(token, SEGREDO)
  } catch (err) {
    return null
  }
}

module.exports = { criarSessao, destruirSessao, getUsuario }
