require('dotenv').config();

const express = require('express');
const session = require('express-session');
const path    = require('path');

const { conectarBanco } = require('./config/database');
const rotasApi = require('./routes/api.routes');

const app  = express();
const PORT = process.env.PORT || 3000;

// Lê JSON e formulários HTML
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sessão do usuário logado
app.use(session({
  secret: process.env.SESSION_SECRET || 'ecoverde-segredo',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 4 } // 4 horas
}));

// Serve os arquivos estáticos (HTML, CSS, imagens, JS)
app.use(express.static(path.join(__dirname)));

// Todas as rotas da API ficam em /api
app.use('/api', rotasApi);

// Captura erros não tratados para o servidor nunca derrubar
process.on('unhandledRejection', (err) => {
  console.error('Erro não tratado:', err.message);
});

// Inicia o servidor somente após conectar ao banco
conectarBanco().then(() => {
  app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:' + PORT);
  });
}).catch((err) => {
  console.error('Erro ao conectar ao banco:', err.message);
  process.exit(1);
});
