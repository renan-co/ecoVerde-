require('dotenv').config();

const express = require('express');
const session = require('express-session');
const path    = require('path');

const { conectarBanco } = require('./config/database');
const rotasApi = require('./routes/api.routes');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'ecoverde-segredo',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 4 }
}));

app.use(express.static(path.join(__dirname)));

app.use('/api', rotasApi);

process.on('unhandledRejection', (err) => {
  console.error('Erro não tratado:', err.message);
});

conectarBanco().then(() => {
  app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:' + PORT);
  });
}).catch((err) => {
  console.error('Erro ao conectar ao banco:', err.message);
  process.exit(1);
});
