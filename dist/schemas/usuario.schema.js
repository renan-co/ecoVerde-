"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UsuarioSchema = new mongoose_1.Schema({
    nome: String,
    email: { type: String, unique: true },
    senha: String,
}, { versionKey: false });
//# sourceMappingURL=usuario.schema.js.map