const { getUsuario } = require('../../lib/auth')

export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ mensagem: 'Método não permitido.' })
  const usuario = getUsuario(req)
  res.json({ usuario })
}
