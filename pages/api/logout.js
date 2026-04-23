const { destruirSessao } = require('../../lib/auth')

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ mensagem: 'Método não permitido.' })
  destruirSessao(res)
  res.json({ mensagem: 'Sessão encerrada.' })
}
