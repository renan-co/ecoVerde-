import { ProdutosService } from '../services/produtos.service';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    listarTodos(): Promise<any[]>;
    adicionar(dados: any): Promise<any>;
    atualizar(id: string, dados: any): Promise<any>;
    remover(id: string): Promise<{
        mensagem: string;
    }>;
}
