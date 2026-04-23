module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/database.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const mongoose = __turbopack_context__.r("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
let conectado = false;
async function conectarBanco() {
    if (conectado) return;
    await mongoose.connect(process.env.MONGODB_URI);
    conectado = true;
    console.log('Conectado ao MongoDB!');
}
module.exports = {
    conectarBanco
};
}),
"[project]/models/Usuario.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const mongoose = __turbopack_context__.r("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
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
}),
"[project]/lib/auth.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const jwt = __turbopack_context__.r("[externals]/jsonwebtoken [external] (jsonwebtoken, cjs, [project]/node_modules/jsonwebtoken)");
const cookie = __turbopack_context__.r("[externals]/cookie [external] (cookie, cjs, [project]/node_modules/cookie)");
const SEGREDO = process.env.SESSION_SECRET || 'ecoverde-chave-2026';
const NOME_COOKIE = 'ecoverde_token';
function criarSessao(res, usuario) {
    const token = jwt.sign({
        id: String(usuario._id),
        nome: usuario.nome,
        email: usuario.email,
        tipo: usuario.tipo
    }, SEGREDO, {
        expiresIn: '4h'
    });
    res.setHeader('Set-Cookie', cookie.serialize(NOME_COOKIE, token, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 4,
        sameSite: 'lax'
    }));
}
function destruirSessao(res) {
    res.setHeader('Set-Cookie', cookie.serialize(NOME_COOKIE, '', {
        httpOnly: true,
        path: '/',
        maxAge: 0
    }));
}
function getUsuario(req) {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies[NOME_COOKIE];
    if (!token) return null;
    try {
        return jwt.verify(token, SEGREDO);
    } catch (err) {
        return null;
    }
}
module.exports = {
    criarSessao,
    destruirSessao,
    getUsuario
};
}),
"[project]/pages/api/login.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
const bcrypt = __turbopack_context__.r("[externals]/bcryptjs [external] (bcryptjs, cjs, [project]/node_modules/bcryptjs)");
const { conectarBanco } = __turbopack_context__.r("[project]/lib/database.js [api] (ecmascript)");
const Usuario = __turbopack_context__.r("[project]/models/Usuario.js [api] (ecmascript)");
const { criarSessao } = __turbopack_context__.r("[project]/lib/auth.js [api] (ecmascript)");
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            mensagem: 'Metodo nao permitido.'
        });
    }
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({
            mensagem: 'Informe e-mail e senha.'
        });
    }
    await conectarBanco();
    const usuario = await Usuario.findOne({
        email: email
    });
    if (!usuario) {
        return res.status(401).json({
            mensagem: 'E-mail ou senha incorretos.'
        });
    }
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
        return res.status(401).json({
            mensagem: 'E-mail ou senha incorretos.'
        });
    }
    criarSessao(res, usuario);
    res.json({
        mensagem: 'Login realizado!',
        usuario: {
            id: usuario._id,
            nome: usuario.nome,
            email: usuario.email,
            tipo: usuario.tipo
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0t9c-7y._.js.map