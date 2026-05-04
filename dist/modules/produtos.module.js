"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const produtos_controller_1 = require("../controllers/produtos.controller");
const produtos_service_1 = require("../services/produtos.service");
const produto_schema_1 = require("../schemas/produto.schema");
let ProdutosModule = class ProdutosModule {
};
exports.ProdutosModule = ProdutosModule;
exports.ProdutosModule = ProdutosModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Produto', schema: produto_schema_1.ProdutoSchema }])],
        controllers: [produtos_controller_1.ProdutosController],
        providers: [produtos_service_1.ProdutosService],
    })
], ProdutosModule);
//# sourceMappingURL=produtos.module.js.map