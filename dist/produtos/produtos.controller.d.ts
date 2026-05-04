import { ProdutosService } from './produtos.service';
import { Produto } from './produto.model';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    listarTodos(): Produto[];
    adicionar(dados: Omit<Produto, 'id'>): Produto;
    atualizar(id: string, dados: Partial<Produto>): Produto | {
        mensagem: string;
    };
    remover(id: string): {
        mensagem: string;
    };
}
