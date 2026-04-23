const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const router = express.Router();

router.get('/sessao', (req, res) => {
  res.json({ usuario: req.session.usuario || null });
});

router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ mensagem: 'Informe e-mail e senha.' });
    }

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' });
    }

    req.session.usuario = {
      id: usuario._id,
      nome: usuario.nome,
      email: usuario.email,
      tipo: usuario.tipo
    };

    res.json({ mensagem: 'Login realizado!', usuario: req.session.usuario });
  } catch (err) {
    console.error('Erro no login:', err.message);
    res.status(500).json({ mensagem: 'Erro interno. Tente novamente.' });
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ mensagem: 'Sessão encerrada.' });
  });
});

router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find({}, '-senha');
    res.json(usuarios);
  } catch (err) {
    console.error('Erro ao listar usuários:', err.message);
    res.status(500).json({ mensagem: 'Erro ao buscar usuários.' });
  }
});

router.post('/usuarios', async (req, res) => {
  try {
    const { nome, email, senha, tipo } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ mensagem: 'Nome, e-mail e senha são obrigatórios.' });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const novoUsuario = new Usuario({
      nome,
      email,
      senha: senhaHash,
      tipo: tipo || 'Cliente'
    });

    await novoUsuario.save();

    res.status(201).json({
      id: novoUsuario._id,
      nome: novoUsuario.nome,
      email: novoUsuario.email,
      tipo: novoUsuario.tipo
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ mensagem: 'E-mail já cadastrado.' });
    }
    console.error('Erro ao cadastrar usuário:', err.message);
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuário.' });
  }
});

router.put('/usuarios/:id', async (req, res) => {
  try {
    const { nome, email, tipo } = req.body;

    if (!nome || !email) {
      return res.status(400).json({ mensagem: 'Nome e e-mail são obrigatórios.' });
    }

    const usuarioAtualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      { nome, email, tipo },
      { new: true, select: '-senha' }
    );

    if (!usuarioAtualizado) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    res.json(usuarioAtualizado);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ mensagem: 'E-mail já cadastrado por outro usuário.' });
    }
    console.error('Erro ao atualizar usuário:', err.message);
    res.status(500).json({ mensagem: 'Erro ao atualizar usuário.' });
  }
});

router.delete('/usuarios/:id', async (req, res) => {
  try {
    const usuarioDeletado = await Usuario.findByIdAndDelete(req.params.id);

    if (!usuarioDeletado) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    res.json({ mensagem: 'Usuário excluído com sucesso.' });
  } catch (err) {
    console.error('Erro ao excluir usuário:', err.message);
    res.status(500).json({ mensagem: 'Erro ao excluir usuário.' });
  }
});

module.exports = router;
