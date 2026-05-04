import { Model } from 'mongoose';
export declare class CarrinhoService {
    private carrinhoModel;
    constructor(carrinhoModel: Model<any>);
    listar(): Promise<any[]>;
    adicionar(dados: {
        produtoId: string;
        nome: string;
        quantidade: number;
        preco: number;
    }): Promise<any>;
    atualizarQuantidade(id: string, quantidade: number): Promise<any>;
    removerItem(id: string): Promise<boolean>;
    limparCarrinho(): Promise<void>;
}
