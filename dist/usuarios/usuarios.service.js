"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
let UsuariosService = class UsuariosService {
    constructor() {
        this.usuarios = [];
        this.proximoId = 1;
    }
    listarTodos() {
        return this.usuarios.map((_a) => {
            var { senha } = _a, semSenha = __rest(_a, ["senha"]);
            return semSenha;
        });
    }
    cadastrar(dados) {
        const jaExiste = this.usuarios.find((u) => u.email === dados.email);
        if (jaExiste) {
            throw new Error('E-mail já cadastrado');
        }
        const novoUsuario = Object.assign({ id: this.proximoId }, dados);
        this.proximoId++;
        this.usuarios.push(novoUsuario);
        const { senha } = novoUsuario, semSenha = __rest(novoUsuario, ["senha"]);
        return semSenha;
    }
    login(email, senha) {
        const usuario = this.usuarios.find((u) => u.email === email);
        if (!usuario || usuario.senha !== senha) {
            return { mensagem: 'E-mail ou senha incorretos' };
        }
        const { senha: _ } = usuario, semSenha = __rest(usuario, ["senha"]);
        return {
            mensagem: 'Login realizado com sucesso!',
            usuario: semSenha,
        };
    }
    remover(id) {
        const indice = this.usuarios.findIndex((u) => u.id === id);
        if (indice === -1)
            return false;
        this.usuarios.splice(indice, 1);
        return true;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)()
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map