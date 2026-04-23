const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const router = express.Router();

// -------------------------------------------------------
// GET /api/sessao — retorna o usuário logado na sessão
// -------------------------------------------------------
router.get('/sessao', (req, res) => {
  res.json({ usuario: req.session.usuario || null });
});

// -------------------------------------------------------
// POST /api/login — autentica o usuário
// -------------------------------------------------------

/**
 * Faz o login do usuário verificando e-mail e senha no MongoDB.
 *
 * Body esperado: { email, senha }
 *
 * Busca o documento na coleção "usuarios" pelo e-mail.
 * Compara a senha informada com o hash salvo usando bcrypt.
 * Se tudo OK, salva o usuário na sessão e retorna seus dados.
 *
 * @route POST /api/login
 */
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ mensagem: 'Informe e-mail e senha.' });
    }

    // findOne() é o equivalente ao SELECT ... WHERE email = $1
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' });
    }

    req.session.usuario = {
      id: usuario._id,   // No MongoDB o id é _id
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

// -------------------------------------------------------
// POST /api/logout — encerra a sessão
// -------------------------------------------------------
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ mensagem: 'Sessão encerrada.' });
  });
});

// -------------------------------------------------------
// GET /api/usuarios — lista todos os usuários
// -------------------------------------------------------

/**
 * Busca e retorna todos os usuários cadastrados no MongoDB.
 *
 * Usa .select() para não retornar o campo senha na resposta,
 * protegendo os dados sensíveis do usuário.
 *
 * @route GET /api/usuarios
 * @returns {Array} Lista de usuários sem o campo senha
 */
router.get('/usuarios', async (req, res) => {
  try {
    // O segundo parâmetro do find() seleciona os campos que queremos
    // '-senha' significa: retorna tudo EXCETO a senha
    const usuarios = await Usuario.find({}, '-senha');
    res.json(usuarios);
  } catch (err) {
    console.error('Erro ao listar usuários:', err.message);
    res.status(500).json({ mensagem: 'Erro ao buscar usuários.' });
  }
});

// -------------------------------------------------------
// POST /api/usuarios — cadastra novo usuário
// -------------------------------------------------------

/**
 * Cadastra um novo usuário no MongoDB.
 *
 * Recebe nome, e-mail, senha e tipo no corpo da requisição.
 * Criptografa a senha com bcrypt antes de salvar.
 * O Mongoose cuida de verificar se o e-mail já existe (campo unique no schema).
 *
 * @route POST /api/usuarios
 * @param {string} req.body.nome   - Nome do usuário
 * @param {string} req.body.email  - E-mail do usuário
 * @param {string} req.body.senha  - Senha em texto puro (será criptografada)
 * @param {string} req.body.tipo   - Tipo do usuário (padrão: 'Cliente')
 * @returns {Object} Dados do usuário criado (sem a senha)
 */
router.post('/usuarios', async (req, res) => {
  try {
    const { nome, email, senha, tipo } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ mensagem: 'Nome, e-mail e senha são obrigatórios.' });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    // new Usuario() cria um novo documento; .save() salva no banco
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
    // Código 11000 é o erro do MongoDB para campo duplicado (email único)
    if (err.code === 11000) {
      return res.status(409).json({ mensagem: 'E-mail já cadastrado.' });
    }
    console.error('Erro ao cadastrar usuário:', err.message);
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuário.' });
  }
});

// -------------------------------------------------------
// PUT /api/usuarios/:id — atualiza um usuário
// -------------------------------------------------------

/**
 * Atualiza os dados de um usuário existente no MongoDB.
 *
 * Usa findByIdAndUpdate() que busca pelo _id e já atualiza em uma só operação.
 * A opção { new: true } faz retornar o documento já atualizado.
 *
 * @route PUT /api/usuarios/:id
 * @param {string} req.params.id   - ID do usuário no MongoDB
 * @param {string} req.body.nome   - Novo nome
 * @param {string} req.body.email  - Novo e-mail
 * @param {string} req.body.tipo   - Novo tipo
 * @returns {Object} Usuário atualizado (sem a senha)
 */
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

// -------------------------------------------------------
// DELETE /api/usuarios/:id — remove um usuário
// -------------------------------------------------------

/**
 * Remove um usuário do banco pelo seu ID.
 *
 * Usa findByIdAndDelete() que busca e deleta em uma só operação.
 *
 * @route DELETE /api/usuarios/:id
 * @param {string} req.params.id - ID do usuário no MongoDB
 * @returns {Object} Mensagem de confirmação
 */
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
