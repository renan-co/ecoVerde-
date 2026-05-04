"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProdutoSchema = new mongoose_1.Schema({
    nome: String,
    descricao: String,
    emoji: String,
    preco: Number,
    categoria: String,
    estoque: { type: Number, default: 0 },
    sustentavel: { type: Boolean, default: false },
}, { versionKey: false });
//# sourceMappingURL=produto.schema.js.map