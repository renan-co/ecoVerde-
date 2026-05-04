import { CarrinhoService } from '../services/carrinho.service';
export declare class CarrinhoController {
    private readonly carrinhoService;
    constructor(carrinhoService: CarrinhoService);
    listar(): Promise<any[]>;
    adicionar(dados: any): Promise<any>;
    atualizarQuantidade(id: string, body: {
        quantidade: number;
    }): Promise<any>;
    removerItem(id: string): Promise<{
        mensagem: string;
    }>;
    limpar(): Promise<{
        mensagem: string;
    }>;
}
