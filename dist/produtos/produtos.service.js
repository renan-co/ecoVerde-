"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
let ProdutosService = class ProdutosService {
    constructor() {
        this.produtos = [
            { id: 1, nome: 'Maçã', descricao: 'Maçã orgânica fresca', preco: 4.90, categoria: 'Fruta', estoque: 50, sustentavel: true },
            { id: 2, nome: 'Banana', descricao: 'Banana caipira da fazenda', preco: 3.50, categoria: 'Fruta', estoque: 80, sustentavel: true },
            { id: 3, nome: 'Laranja', descricao: 'Laranja lima selecionada', preco: 2.99, categoria: 'Fruta', estoque: 60, sustentavel: true },
            { id: 4, nome: 'Morango', descricao: 'Morango sem agrotóxico', preco: 8.90, categoria: 'Fruta', estoque: 25, sustentavel: true },
            { id: 5, nome: 'Uva', descricao: 'Uva niágara cultivada local', preco: 7.90, categoria: 'Fruta', estoque: 40, sustentavel: true },
            { id: 6, nome: 'Manga', descricao: 'Manga palmer docinha', preco: 5.50, categoria: 'Fruta', estoque: 35, sustentavel: true },
            { id: 7, nome: 'Alface', descricao: 'Alface crespa hidropônica', preco: 2.50, categoria: 'Verdura', estoque: 45, sustentavel: true },
            { id: 8, nome: 'Rúcula', descricao: 'Rúcula fresca em maço', preco: 3.00, categoria: 'Verdura', estoque: 30, sustentavel: true },
            { id: 9, nome: 'Brócolis', descricao: 'Brócolis orgânico inteiro', preco: 4.90, categoria: 'Verdura', estoque: 30, sustentavel: true },
            { id: 10, nome: 'Cenoura', descricao: 'Cenoura da terra lavada', preco: 3.50, categoria: 'Legume', estoque: 55, sustentavel: true },
            { id: 11, nome: 'Tomate', descricao: 'Tomate italiano sem veneno', preco: 6.90, categoria: 'Legume', estoque: 40, sustentavel: true },
            { id: 12, nome: 'Pepino', descricao: 'Pepino caipira fresco', preco: 3.90, categoria: 'Legume', estoque: 35, sustentavel: true },
            { id: 13, nome: 'Manjericão', descricao: 'Manjericão fresco em maço', preco: 3.50, categoria: 'Ervas', estoque: 25, sustentavel: true },
            { id: 14, nome: 'Salsinha', descricao: 'Salsinha crespa cheirosa', preco: 2.90, categoria: 'Ervas', estoque: 30, sustentavel: true },
        ];
        this.proximoId = 15;
    }
    listarTodos() {
        return this.produtos;
    }
    adicionar(dados) {
        const novoProduto = Object.assign({ id: this.proximoId }, dados);
        this.proximoId++;
        this.produtos.push(novoProduto);
        return novoProduto;
    }
    atualizar(id, dados) {
        const indice = this.produtos.findIndex((p) => p.id === id);
        if (indice === -1)
            return null;
        this.produtos[indice] = Object.assign(Object.assign({}, this.produtos[indice]), dados);
        return this.produtos[indice];
    }
    remover(id) {
        const indice = this.produtos.findIndex((p) => p.id === id);
        if (indice === -1)
            return false;
        this.produtos.splice(indice, 1);
        return true;
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)()
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map