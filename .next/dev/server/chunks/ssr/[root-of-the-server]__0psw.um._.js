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
"[project]/lib/produtos.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const listaProdutos = [
    {
        id: 1,
        nome: 'Maçã',
        categoria: 'Fruta',
        emoji: '🍎',
        preco: 4.90,
        unidade: 'kg',
        estoque: 50
    },
    {
        id: 2,
        nome: 'Banana',
        categoria: 'Fruta',
        emoji: '🍌',
        preco: 3.50,
        unidade: 'kg',
        estoque: 80
    },
    {
        id: 3,
        nome: 'Laranja',
        categoria: 'Fruta',
        emoji: '🍊',
        preco: 2.99,
        unidade: 'kg',
        estoque: 60
    },
    {
        id: 4,
        nome: 'Morango',
        categoria: 'Fruta',
        emoji: '🍓',
        preco: 8.90,
        unidade: 'cx 200g',
        estoque: 25
    },
    {
        id: 5,
        nome: 'Uva',
        categoria: 'Fruta',
        emoji: '🍇',
        preco: 7.90,
        unidade: 'kg',
        estoque: 40
    },
    {
        id: 6,
        nome: 'Manga',
        categoria: 'Fruta',
        emoji: '🥭',
        preco: 5.50,
        unidade: 'unidade',
        estoque: 35
    },
    {
        id: 7,
        nome: 'Alface',
        categoria: 'Verdura',
        emoji: '🥬',
        preco: 2.50,
        unidade: 'unidade',
        estoque: 45
    },
    {
        id: 8,
        nome: 'Rúcula',
        categoria: 'Verdura',
        emoji: '🌱',
        preco: 3.00,
        unidade: 'maço',
        estoque: 30
    },
    {
        id: 9,
        nome: 'Brócolis',
        categoria: 'Verdura',
        emoji: '🥦',
        preco: 4.90,
        unidade: 'unidade',
        estoque: 30
    },
    {
        id: 10,
        nome: 'Cenoura',
        categoria: 'Legume',
        emoji: '🥕',
        preco: 3.50,
        unidade: 'kg',
        estoque: 55
    },
    {
        id: 11,
        nome: 'Tomate',
        categoria: 'Legume',
        emoji: '🍅',
        preco: 6.90,
        unidade: 'kg',
        estoque: 40
    },
    {
        id: 12,
        nome: 'Pepino',
        categoria: 'Legume',
        emoji: '🥒',
        preco: 3.90,
        unidade: 'unidade',
        estoque: 35
    },
    {
        id: 13,
        nome: 'Manjericão',
        categoria: 'Ervas',
        emoji: '🌿',
        preco: 3.50,
        unidade: 'maço',
        estoque: 25
    },
    {
        id: 14,
        nome: 'Salsinha',
        categoria: 'Ervas',
        emoji: '🌿',
        preco: 2.90,
        unidade: 'maço',
        estoque: 30
    }
];
module.exports = {
    listaProdutos
};
}),
"[project]/pages/produtos.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Produtos,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Layout.js [ssr] (ecmascript)");
;
;
;
function Produtos({ usuario, produtos }) {
    const [busca, setBusca] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [categoria, setCategoria] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [quantidades, setQuantidades] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const produtosFiltrados = produtos.filter(function(p) {
        const nomeOk = p.nome.toLowerCase().includes(busca.toLowerCase());
        const categoriaOk = categoria === '' || p.categoria === categoria;
        return nomeOk && categoriaOk;
    });
    function getQtd(id) {
        return quantidades[id] || 1;
    }
    function setQtd(id, valor) {
        setQuantidades({
            ...quantidades,
            [id]: valor
        });
    }
    function adicionarCarrinho(produto) {
        const qtd = getQtd(produto.id);
        const carrinho = JSON.parse(localStorage.getItem('ecoverde_carrinho') || '[]');
        let encontrado = false;
        for(let i = 0; i < carrinho.length; i++){
            if (carrinho[i].id === produto.id) {
                carrinho[i].quantidade += qtd;
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            carrinho.push({
                id: produto.id,
                nome: produto.nome,
                emoji: produto.emoji,
                preco: produto.preco,
                unidade: produto.unidade,
                quantidade: qtd
            });
        }
        localStorage.setItem('ecoverde_carrinho', JSON.stringify(carrinho));
        alert(produto.nome + ' adicionado ao carrinho!');
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
                        children: "Nossos Produtos"
                    }, void 0, false, {
                        fileName: "[project]/pages/produtos.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "subtitulo",
                        children: "Frutas e verduras frescas, cultivadas de forma ecológica no coração da cidade. Direto da fazenda para a sua mesa."
                    }, void 0, false, {
                        fileName: "[project]/pages/produtos.js",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "card filtros",
                        style: {
                            marginBottom: '28px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid-filtros",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            children: "Pesquisar produto"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/produtos.js",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Ex: alface, morango, cenoura...",
                                            value: busca,
                                            onChange: function(e) {
                                                setBusca(e.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/pages/produtos.js",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/produtos.js",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            children: "Categoria"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/produtos.js",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                            value: categoria,
                                            onChange: function(e) {
                                                setCategoria(e.target.value);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Todos"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/produtos.js",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "Fruta",
                                                    children: "Frutas"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/produtos.js",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "Verdura",
                                                    children: "Verduras"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/produtos.js",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "Legume",
                                                    children: "Legumes"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/produtos.js",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "Ervas",
                                                    children: "Ervas"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/produtos.js",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/produtos.js",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/produtos.js",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/produtos.js",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/produtos.js",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid-produtos",
                        children: produtosFiltrados.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "vazio",
                            children: "Nenhum produto encontrado."
                        }, void 0, false, {
                            fileName: "[project]/pages/produtos.js",
                            lineNumber: 87,
                            columnNumber: 15
                        }, this) : produtosFiltrados.map(function(p) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                                className: "card produto-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "produto-emoji",
                                        children: p.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/pages/produtos.js",
                                        lineNumber: 92,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "tag",
                                        children: p.categoria
                                    }, void 0, false, {
                                        fileName: "[project]/pages/produtos.js",
                                        lineNumber: 93,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        children: p.nome
                                    }, void 0, false, {
                                        fileName: "[project]/pages/produtos.js",
                                        lineNumber: 94,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "produto-preco",
                                        children: [
                                            "R$ ",
                                            p.preco.toFixed(2).replace('.', ','),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '13px',
                                                    color: '#6b7280'
                                                },
                                                children: [
                                                    " / ",
                                                    p.unidade
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/produtos.js",
                                                lineNumber: 97,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/produtos.js",
                                        lineNumber: 95,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '13px',
                                            color: '#9ca3af',
                                            marginBottom: '8px'
                                        },
                                        children: [
                                            "Estoque: ",
                                            p.estoque,
                                            " ",
                                            p.unidade
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/produtos.js",
                                        lineNumber: 99,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "qty-controle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "qty-btn",
                                                onClick: function() {
                                                    setQtd(p.id, Math.max(1, getQtd(p.id) - 1));
                                                },
                                                children: "−"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/produtos.js",
                                                lineNumber: 103,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "qty-input",
                                                value: getQtd(p.id),
                                                min: 1,
                                                max: p.estoque,
                                                onChange: function(e) {
                                                    setQtd(p.id, parseInt(e.target.value) || 1);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/pages/produtos.js",
                                                lineNumber: 104,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "qty-btn",
                                                onClick: function() {
                                                    setQtd(p.id, Math.min(p.estoque, getQtd(p.id) + 1));
                                                },
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/produtos.js",
                                                lineNumber: 112,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/produtos.js",
                                        lineNumber: 102,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "btn btn-adicionar",
                                        onClick: function() {
                                            adicionarCarrinho(p);
                                        },
                                        children: "Adicionar ao Carrinho"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/produtos.js",
                                        lineNumber: 114,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/pages/produtos.js",
                                lineNumber: 91,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/pages/produtos.js",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/produtos.js",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pages/produtos.js",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/produtos.js",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
async function getServerSideProps({ req }) {
    const { getUsuario } = __turbopack_context__.r("[project]/lib/auth.js [ssr] (ecmascript)");
    const { listaProdutos } = __turbopack_context__.r("[project]/lib/produtos.js [ssr] (ecmascript)");
    const usuario = getUsuario(req);
    return {
        props: {
            usuario: usuario,
            produtos: listaProdutos
        }
    };
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0psw.um._.js.map