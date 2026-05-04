"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoService = void 0;
const common_1 = require("@nestjs/common");
let CarrinhoService = class CarrinhoService {
    constructor() {
        this.itens = [];
        this.proximoId = 1;
    }
    listar() {
        return this.itens;
    }
    adicionar(dados) {
        const itemExistente = this.itens.find((i) => i.produtoId === dados.produtoId);
        if (itemExistente) {
            itemExistente.quantidade += dados.quantidade;
            return itemExistente;
        }
        const novoItem = Object.assign({ id: this.proximoId }, dados);
        this.proximoId++;
        this.itens.push(novoItem);
        return novoItem;
    }
    removerItem(id) {
        const indice = this.itens.findIndex((i) => i.id === id);
        if (indice === -1)
            return false;
        this.itens.splice(indice, 1);
        return true;
    }
    limparCarrinho() {
        this.itens = [];
    }
};
exports.CarrinhoService = CarrinhoService;
exports.CarrinhoService = CarrinhoService = __decorate([
    (0, common_1.Injectable)()
], CarrinhoService);
//# sourceMappingURL=carrinho.service.js.map