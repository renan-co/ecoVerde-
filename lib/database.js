const mongoose = require('mongoose')

let conectado = false

async function conectarBanco() {
  if (conectado) return

  await mongoose.connect(process.env.MONGODB_URI)
  conectado = true
  console.log('Conectado ao MongoDB!')
}

module.exports = { conectarBanco }
