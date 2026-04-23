const bcrypt = require('bcryptjs')
const { conectarBanco } = require('../../../lib/database')
const Usuario = require('../../../models/Usuario')

export default async function handler(req, res) {
  await conectarBanco()

  if (req.method === 'GET') {
    try {
      const usuarios = await Usuario.find({}, '-senha')
      res.json(usuarios)
    } catch (err) {
      res.status(500).json({ mensagem: 'Erro ao buscar usuarios.' })
    }

  } else if (req.method === 'POST') {
    try {
      const { nome, email, senha, tipo } = req.body

      if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'Nome, e-mail e senha sao obrigatorios.' })
      }

      const senhaHash = await bcrypt.hash(senha, 10)

      const novoUsuario = new Usuario({
        nome: nome,
        email: email,
        senha: senhaHash,
        tipo: tipo || 'Cliente'
      })

      await novoUsuario.save()

      res.status(201).json({
        mensagem: 'Usuario cadastrado com sucesso!',
        id: novoUsuario._id,
        nome: novoUsuario.nome,
        email: novoUsuario.email,
        tipo: novoUsuario.tipo
      })

    } catch (err) {
      if (err.code === 11000) {
        return res.status(409).json({ mensagem: 'E-mail ja cadastrado.' })
      }
      res.status(500).json({ mensagem: 'Erro ao cadastrar usuario.' })
    }

  } else if (req.method === 'PUT') {
    try {
      const id = req.query.id
      const { nome, email, tipo } = req.body

      if (!nome || !email) {
        return res.status(400).json({ mensagem: 'Nome e e-mail sao obrigatorios.' })
      }

      const usuarioAtualizado = await Usuario.findByIdAndUpdate(
        id,
        { nome: nome, email: email, tipo: tipo },
        { new: true, select: '-senha' }
      )

      if (!usuarioAtualizado) {
        return res.status(404).json({ mensagem: 'Usuario nao encontrado.' })
      }

      res.json(usuarioAtualizado)

    } catch (err) {
      if (err.code === 11000) {
        return res.status(409).json({ mensagem: 'E-mail ja cadastrado por outro usuario.' })
      }
      res.status(500).json({ mensagem: 'Erro ao atualizar usuario.' })
    }

  } else if (req.method === 'DELETE') {
    try {
      const id = req.query.id

      const usuarioDeletado = await Usuario.findByIdAndDelete(id)

      if (!usuarioDeletado) {
        return res.status(404).json({ mensagem: 'Usuario nao encontrado.' })
      }

      res.json({ mensagem: 'Usuario excluido com sucesso.' })

    } catch (err) {
      res.status(500).json({ mensagem: 'Erro ao excluir usuario.' })
    }

  } else {
    res.status(405).json({ mensagem: 'Metodo nao permitido.' })
  }
}
