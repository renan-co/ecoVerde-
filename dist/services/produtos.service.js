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
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProdutosService = class ProdutosService {
    constructor(produtoModel) {
        this.produtoModel = produtoModel;
    }
    async onModuleInit() {
        const total = await this.produtoModel.countDocuments();
        if (total === 0) {
            await this.produtoModel.insertMany([
                { nome: 'Maçã', emoji: '🍎', descricao: 'Maçã orgânica fresca', preco: 4.90, categoria: 'Fruta', estoque: 50, sustentavel: true },
                { nome: 'Banana', emoji: '🍌', descricao: 'Banana caipira da fazenda', preco: 3.50, categoria: 'Fruta', estoque: 80, sustentavel: true },
                { nome: 'Laranja', emoji: '🍊', descricao: 'Laranja lima selecionada', preco: 2.99, categoria: 'Fruta', estoque: 60, sustentavel: true },
                { nome: 'Morango', emoji: '🍓', descricao: 'Morango sem agrotóxico', preco: 8.90, categoria: 'Fruta', estoque: 25, sustentavel: true },
                { nome: 'Uva', emoji: '🍇', descricao: 'Uva niágara cultivada local', preco: 7.90, categoria: 'Fruta', estoque: 40, sustentavel: true },
                { nome: 'Manga', emoji: '🥭', descricao: 'Manga palmer docinha', preco: 5.50, categoria: 'Fruta', estoque: 35, sustentavel: true },
                { nome: 'Alface', emoji: '🥬', descricao: 'Alface crespa hidropônica', preco: 2.50, categoria: 'Verdura', estoque: 45, sustentavel: true },
                { nome: 'Rúcula', emoji: '🌱', descricao: 'Rúcula fresca em maço', preco: 3.00, categoria: 'Verdura', estoque: 30, sustentavel: true },
                { nome: 'Brócolis', emoji: '🥦', descricao: 'Brócolis orgânico inteiro', preco: 4.90, categoria: 'Verdura', estoque: 30, sustentavel: true },
                { nome: 'Cenoura', emoji: '🥕', descricao: 'Cenoura da terra lavada', preco: 3.50, categoria: 'Legume', estoque: 55, sustentavel: true },
                { nome: 'Tomate', emoji: '🍅', descricao: 'Tomate italiano sem veneno', preco: 6.90, categoria: 'Legume', estoque: 40, sustentavel: true },
                { nome: 'Pepino', emoji: '🥒', descricao: 'Pepino caipira fresco', preco: 3.90, categoria: 'Legume', estoque: 35, sustentavel: true },
                { nome: 'Manjericão', emoji: '🌿', descricao: 'Manjericão fresco em maço', preco: 3.50, categoria: 'Ervas', estoque: 25, sustentavel: true },
                { nome: 'Salsinha', emoji: '🌿', descricao: 'Salsinha crespa cheirosa', preco: 2.90, categoria: 'Ervas', estoque: 30, sustentavel: true },
            ]);
        }
    }
    async listarTodos() {
        return this.produtoModel.find().exec();
    }
    async adicionar(dados) {
        return this.produtoModel.create(dados);
    }
    async atualizar(id, dados) {
        return this.produtoModel.findByIdAndUpdate(id, dados, { returnDocument: 'after' }).exec();
    }
    async remover(id) {
        const resultado = await this.produtoModel.findByIdAndDelete(id).exec();
        return !!resultado;
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Produto')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map