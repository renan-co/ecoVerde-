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
exports.CarrinhoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CarrinhoService = class CarrinhoService {
    constructor(carrinhoModel) {
        this.carrinhoModel = carrinhoModel;
    }
    async listar() {
        return this.carrinhoModel.find().exec();
    }
    async adicionar(dados) {
        const itemExistente = await this.carrinhoModel.findOne({ produtoId: dados.produtoId });
        if (itemExistente) {
            itemExistente.quantidade += dados.quantidade;
            return itemExistente.save();
        }
        return this.carrinhoModel.create(dados);
    }
    async atualizarQuantidade(id, quantidade) {
        if (quantidade <= 0) {
            await this.carrinhoModel.findByIdAndDelete(id);
            return null;
        }
        return this.carrinhoModel.findByIdAndUpdate(id, { quantidade }, { returnDocument: 'after' });
    }
    async removerItem(id) {
        const resultado = await this.carrinhoModel.findByIdAndDelete(id).exec();
        return !!resultado;
    }
    async limparCarrinho() {
        await this.carrinhoModel.deleteMany({}).exec();
    }
};
exports.CarrinhoService = CarrinhoService;
exports.CarrinhoService = CarrinhoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Carrinho')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CarrinhoService);
//# sourceMappingURL=carrinho.service.js.map