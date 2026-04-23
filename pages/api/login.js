const bcrypt = require('bcryptjs')
const { conectarBanco } = require('../../lib/database')
const Usuario = require('../../models/Usuario')
const { criarSessao } = require('../../lib/auth')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ mensagem: 'Metodo nao permitido.' })
  }

  const { email, senha } = req.body

  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'Informe e-mail e senha.' })
  }

  await conectarBanco()

  const usuario = await Usuario.findOne({ email: email })

  if (!usuario) {
    return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' })
  }

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

  if (!senhaCorreta) {
    return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' })
  }

  criarSessao(res, usuario)

  res.json({
    mensagem: 'Login realizado!',
    usuario: {
      id: usuario._id,
      nome: usuario.nome,
      email: usuario.email,
      tipo: usuario.tipo
    }
  })
}
