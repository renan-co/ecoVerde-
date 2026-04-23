module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/components/Navbar.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
;
;
;
function Navbar({ usuario }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    async function sair() {
        await fetch('/api/logout', {
            method: 'POST'
        });
        router.push('/login');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: "topo",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container navbar",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "logo",
                    children: "🌱 Eco Verde"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        className: "menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: router.pathname === '/' ? 'ativo' : '',
                                    children: "Início"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            !usuario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: router.pathname === '/login' ? 'ativo' : '',
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 26,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 25,
                                columnNumber: 15
                            }, this),
                            !usuario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cadastro",
                                    className: router.pathname === '/cadastro' ? 'ativo' : '',
                                    children: "Cadastro"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/produtos",
                                    className: router.pathname === '/produtos' ? 'ativo' : '',
                                    children: "Produtos"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/carrinho",
                                    className: router.pathname === '/carrinho' ? 'ativo' : '',
                                    children: "Carrinho"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            usuario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: sair,
                                    className: "btn-menu-sair",
                                    children: [
                                        "Sair (",
                                        usuario.nome.split(' ')[0],
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.js",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar.js",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Footer.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "rodape",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: "Projeto Eco Verde - Desenvolvimento Web II"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.js",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: new Date().getFullYear()
                }, void 0, false, {
                    fileName: "[project]/components/Footer.js",
                    lineNumber: 6,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.js",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Layout.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.js [ssr] (ecmascript)");
;
;
;
function Layout({ children, usuario }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                usuario: usuario
            }, void 0, false, {
                fileName: "[project]/components/Layout.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Layout.js",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/lib/auth.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/lib/database.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/models/Usuario.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/pages/login.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Layout.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
;
;
function Login({ usuario, usuariosIniciais }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [senha, setSenha] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [mensagem, setMensagem] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [sucesso, setSucesso] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [usuarios, setUsuarios] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(usuariosIniciais);
    const [editando, setEditando] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    async function handleLogin(e) {
        e.preventDefault();
        setMensagem('');
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                senha
            })
        });
        const dados = await res.json();
        setMensagem(dados.mensagem);
        setSucesso(res.ok);
        if (res.ok) {
            setTimeout(()=>router.push('/produtos'), 1000);
        }
    }
    async function carregarUsuarios() {
        const res = await fetch('/api/usuarios');
        const data = await res.json();
        setUsuarios(data);
        setEditando(null);
    }
    async function salvarUsuario() {
        if (!editando.nome || !editando.email) {
            alert('Nome e e-mail são obrigatórios!');
            return;
        }
        const res = await fetch('/api/usuarios?id=' + editando.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: editando.nome,
                email: editando.email,
                tipo: editando.tipo
            })
        });
        const dados = await res.json();
        if (res.ok) {
            alert('Usuário atualizado com sucesso!');
            carregarUsuarios();
        } else {
            alert(dados.mensagem || 'Erro ao salvar.');
        }
    }
    async function excluirUsuario(id, nome) {
        if (!confirm('Deseja excluir o usuário "' + nome + '"?')) return;
        const res = await fetch('/api/usuarios?id=' + id, {
            method: 'DELETE'
        });
        const dados = await res.json();
        if (res.ok) {
            carregarUsuarios();
        } else {
            alert(dados.mensagem || 'Erro ao excluir.');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        usuario: usuario,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
            className: "secao",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "titulo-secao",
                        children: "Entrar na conta"
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "subtitulo",
                        children: "Acesse sua conta para acompanhar seus pedidos e aproveitar nossos produtos frescos."
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "form-unico",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/pages/login.js",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                    className: "formulario",
                                    onSubmit: handleLogin,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            htmlFor: "loginEmail",
                                            children: "E-mail"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            id: "loginEmail",
                                            placeholder: "Digite seu e-mail",
                                            required: true,
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            htmlFor: "loginSenha",
                                            children: "Senha"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            id: "loginSenha",
                                            placeholder: "Digite sua senha",
                                            required: true,
                                            value: senha,
                                            onChange: (e)=>setSenha(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: `mensagem${sucesso ? ' sucesso' : ''}`,
                                            children: mensagem
                                        }, void 0, false, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "btn",
                                            children: "Entrar"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/login.js",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginTop: '16px'
                                    },
                                    children: [
                                        "Ainda não tem conta?",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/cadastro",
                                            className: "link-verde",
                                            children: "Cadastre-se aqui."
                                        }, void 0, false, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/login.js",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/login.js",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        style: {
                            marginTop: '50px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "titulo-secao menor",
                                children: "Usuários cadastrados"
                            }, void 0, false, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Nome"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/login.js",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "E-mail"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/login.js",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Perfil"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/login.js",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            textAlign: 'center'
                                                        },
                                                        children: "Ação"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/login.js",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                                            children: usuarios.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                    colSpan: 4,
                                                    className: "vazio",
                                                    children: "Nenhum usuário cadastrado ainda."
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, this) : usuarios.map((u)=>editando && editando.id === u._id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: "input-edicao",
                                                                value: editando.nome,
                                                                onChange: (e)=>setEditando({
                                                                        ...editando,
                                                                        nome: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/login.js",
                                                                lineNumber: 130,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/login.js",
                                                            lineNumber: 129,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                className: "input-edicao",
                                                                value: editando.email,
                                                                onChange: (e)=>setEditando({
                                                                        ...editando,
                                                                        email: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/login.js",
                                                                lineNumber: 138,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/login.js",
                                                            lineNumber: 137,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                className: "input-edicao",
                                                                value: editando.tipo,
                                                                onChange: (e)=>setEditando({
                                                                        ...editando,
                                                                        tipo: e.target.value
                                                                    }),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: "Cliente",
                                                                        children: "Cliente"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/login.js",
                                                                        lineNumber: 151,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: "Produtor",
                                                                        children: "Produtor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/login.js",
                                                                        lineNumber: 152,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: "Administrador",
                                                                        children: "Administrador"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/login.js",
                                                                        lineNumber: 153,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/login.js",
                                                                lineNumber: 146,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/login.js",
                                                            lineNumber: 145,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                textAlign: 'center'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    gap: '6px',
                                                                    justifyContent: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                        className: "btn",
                                                                        style: {
                                                                            padding: '6px 10px',
                                                                            fontSize: '13px'
                                                                        },
                                                                        onClick: salvarUsuario,
                                                                        children: "Salvar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/login.js",
                                                                        lineNumber: 158,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                        className: "btn btn-secundario",
                                                                        style: {
                                                                            padding: '6px 10px',
                                                                            fontSize: '13px'
                                                                        },
                                                                        onClick: ()=>setEditando(null),
                                                                        children: "Cancelar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/login.js",
                                                                        lineNumber: 165,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/login.js",
                                                                lineNumber: 157,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/login.js",
                                                            lineNumber: 156,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, u._id, true, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 128,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            children: u.nome
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/login.js",
                                                            lineNumber: 177,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            children: u.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/login.js",
                                                            lineNumber: 178,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            children: u.tipo
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/login.js",
                                                            lineNumber: 179,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                textAlign: 'center'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    gap: '6px',
                                                                    justifyContent: 'center'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                        className: "btn btn-secundario",
                                                                        style: {
                                                                            padding: '6px 12px',
                                                                            fontSize: '13px'
                                                                        },
                                                                        onClick: ()=>setEditando({
                                                                                id: u._id,
                                                                                nome: u.nome,
                                                                                email: u.email,
                                                                                tipo: u.tipo
                                                                            }),
                                                                        children: "Editar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/login.js",
                                                                        lineNumber: 182,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                        className: "btn-remover",
                                                                        style: {
                                                                            padding: '6px 12px',
                                                                            fontSize: '13px'
                                                                        },
                                                                        onClick: ()=>excluirUsuario(u._id, u.nome),
                                                                        children: "Excluir"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/login.js",
                                                                        lineNumber: 189,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/login.js",
                                                                lineNumber: 181,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/login.js",
                                                            lineNumber: 180,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, u._id, true, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 176,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/login.js",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/login.js",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pages/login.js",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/login.js",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
async function getServerSideProps({ req }) {
    const { getUsuario } = __turbopack_context__.r("[project]/lib/auth.js [ssr] (ecmascript)");
    const usuario = getUsuario(req);
    if (usuario) {
        return {
            redirect: {
                destination: '/produtos',
                permanent: false
            }
        };
    }
    const { conectarBanco } = __turbopack_context__.r("[project]/lib/database.js [ssr] (ecmascript)");
    const Usuario = __turbopack_context__.r("[project]/models/Usuario.js [ssr] (ecmascript)");
    await conectarBanco();
    const usuarios = await Usuario.find({}, '-senha').lean();
    return {
        props: {
            usuario: null,
            usuariosIniciais: JSON.parse(JSON.stringify(usuarios))
        }
    };
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0~b5vnk._.js.map