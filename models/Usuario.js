const mongoose = require('mongoose');

/**
 * Schema do usuário no MongoDB.
 *
 * Define a "forma" dos documentos que serão salvos na coleção "usuarios".
 * No MongoDB não há tabelas — usamos coleções e documentos (parecido com JSON).
 *
 * Campos:
 *  - nome      {String}  Nome completo do usuário (obrigatório)
 *  - email     {String}  E-mail único do usuário (obrigatório)
 *  - senha     {String}  Senha já criptografada com bcrypt (obrigatória)
 *  - tipo      {String}  Perfil do usuário: 'Cliente', 'Produtor' ou 'Administrador'
 *  - criadoEm  {Date}    Data de criação (preenchida automaticamente)
 */
const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  senha: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    default: 'Cliente'
  },
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

// Cria e exporta o Model com base no schema acima.
// O Mongoose vai criar automaticamente uma coleção chamada "usuarios" no banco.
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
