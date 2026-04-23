const { listaProdutos } = require('../../lib/produtos')

export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ mensagem: 'Método não permitido.' })
  res.json(listaProdutos)
}
