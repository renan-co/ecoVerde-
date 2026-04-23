const mongoose = require('mongoose');

/**
 * Conecta a aplicação ao banco de dados MongoDB usando Mongoose.
 *
 * Lê a string de conexão da variável de ambiente MONGODB_URI definida no .env.
 * Exemplo de URI local:    mongodb://localhost:27017/ecoverde
 * Exemplo de URI na nuvem: mongodb+srv://usuario:senha@cluster.mongodb.net/ecoverde
 *
 * @returns {Promise<void>} Resolve quando a conexão for bem-sucedida.
 *                          Lança um erro se não conseguir conectar.
 */
async function conectarBanco() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('Variável MONGODB_URI não definida no arquivo .env');
  }

  await mongoose.connect(uri);

  console.log('Conectado ao MongoDB com sucesso!');
}

module.exports = { conectarBanco };
