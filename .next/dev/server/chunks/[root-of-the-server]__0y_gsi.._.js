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
"[project]/pages/api/usuarios/index.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
const bcrypt = __turbopack_context__.r("[externals]/bcryptjs [external] (bcryptjs, cjs, [project]/node_modules/bcryptjs)");
const { conectarBanco } = __turbopack_context__.r("[project]/lib/database.js [api] (ecmascript)");
const Usuario = __turbopack_context__.r("[project]/models/Usuario.js [api] (ecmascript)");
async function handler(req, res) {
    await conectarBanco();
    if (req.method === 'GET') {
        try {
            const usuarios = await Usuario.find({}, '-senha');
            res.json(usuarios);
        } catch (err) {
            res.status(500).json({
                mensagem: 'Erro ao buscar usuarios.'
            });
        }
    } else if (req.method === 'POST') {
        try {
            const { nome, email, senha, tipo } = req.body;
            if (!nome || !email || !senha) {
                return res.status(400).json({
                    mensagem: 'Nome, e-mail e senha sao obrigatorios.'
                });
            }
            const senhaHash = await bcrypt.hash(senha, 10);
            const novoUsuario = new Usuario({
                nome: nome,
                email: email,
                senha: senhaHash,
                tipo: tipo || 'Cliente'
            });
            await novoUsuario.save();
            res.status(201).json({
                mensagem: 'Usuario cadastrado com sucesso!',
                id: novoUsuario._id,
                nome: novoUsuario.nome,
                email: novoUsuario.email,
                tipo: novoUsuario.tipo
            });
        } catch (err) {
            if (err.code === 11000) {
                return res.status(409).json({
                    mensagem: 'E-mail ja cadastrado.'
                });
            }
            res.status(500).json({
                mensagem: 'Erro ao cadastrar usuario.'
            });
        }
    } else if (req.method === 'PUT') {
        try {
            const id = req.query.id;
            const { nome, email, tipo } = req.body;
            if (!nome || !email) {
                return res.status(400).json({
                    mensagem: 'Nome e e-mail sao obrigatorios.'
                });
            }
            const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, {
                nome: nome,
                email: email,
                tipo: tipo
            }, {
                new: true,
                select: '-senha'
            });
            if (!usuarioAtualizado) {
                return res.status(404).json({
                    mensagem: 'Usuario nao encontrado.'
                });
            }
            res.json(usuarioAtualizado);
        } catch (err) {
            if (err.code === 11000) {
                return res.status(409).json({
                    mensagem: 'E-mail ja cadastrado por outro usuario.'
                });
            }
            res.status(500).json({
                mensagem: 'Erro ao atualizar usuario.'
            });
        }
    } else if (req.method === 'DELETE') {
        try {
            const id = req.query.id;
            const usuarioDeletado = await Usuario.findByIdAndDelete(id);
            if (!usuarioDeletado) {
                return res.status(404).json({
                    mensagem: 'Usuario nao encontrado.'
                });
            }
            res.json({
                mensagem: 'Usuario excluido com sucesso.'
            });
        } catch (err) {
            res.status(500).json({
                mensagem: 'Erro ao excluir usuario.'
            });
        }
    } else {
        res.status(405).json({
            mensagem: 'Metodo nao permitido.'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0y_gsi.._.js.map