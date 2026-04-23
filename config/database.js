const mongoose = require('mongoose');

async function conectarBanco() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('Variável MONGODB_URI não definida no arquivo .env');
  }

  await mongoose.connect(uri);

  console.log('Conectado ao MongoDB com sucesso!');
}

module.exports = { conectarBanco };
