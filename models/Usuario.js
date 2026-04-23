const mongoose = require('mongoose');

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

const Usuario = mongoose.models.Usuario || mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
