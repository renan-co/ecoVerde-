"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CarrinhoSchema = new mongoose_1.Schema({
    produtoId: String,
    nome: String,
    quantidade: { type: Number, default: 1 },
    preco: Number,
}, { versionKey: false });
//# sourceMappingURL=carrinho.schema.js.map