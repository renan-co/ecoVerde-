"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UsuariosService = class UsuariosService {
    constructor(usuarioModel) {
        this.usuarioModel = usuarioModel;
    }
    async listarTodos() {
        const usuarios = await this.usuarioModel.find();
        return usuarios.map(u => ({ id: u._id, nome: u.nome, email: u.email }));
    }
    async cadastrar(dados) {
        const jaExiste = await this.usuarioModel.findOne({ email: dados.email });
        if (jaExiste) {
            throw new Error('E-mail já cadastrado');
        }
        const novo = await this.usuarioModel.create(dados);
        return { id: novo._id, nome: novo.nome, email: novo.email };
    }
    async login(email, senha) {
        const usuario = await this.usuarioModel.findOne({ email });
        if (!usuario || usuario.senha !== senha) {
            return { mensagem: 'E-mail ou senha incorretos' };
        }
        return {
            mensagem: 'Login realizado com sucesso!',
            usuario: { id: usuario._id, nome: usuario.nome, email: usuario.email },
        };
    }
    async atualizar(id, dados) {
        return this.usuarioModel.findByIdAndUpdate(id, dados, { returnDocument: 'after' });
    }
    async remover(id) {
        const resultado = await this.usuarioModel.findByIdAndDelete(id);
        return !!resultado;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Usuario')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map