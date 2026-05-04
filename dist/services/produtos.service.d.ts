import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
export declare class ProdutosService implements OnModuleInit {
    private produtoModel;
    constructor(produtoModel: Model<any>);
    onModuleInit(): Promise<void>;
    listarTodos(): Promise<any[]>;
    adicionar(dados: any): Promise<any>;
    atualizar(id: string, dados: any): Promise<any>;
    remover(id: string): Promise<boolean>;
}
