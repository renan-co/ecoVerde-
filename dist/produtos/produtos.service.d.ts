import { Produto } from './produto.model';
export declare class ProdutosService {
    private produtos;
    private proximoId;
    listarTodos(): Produto[];
    adicionar(dados: Omit<Produto, 'id'>): Produto;
    atualizar(id: number, dados: Partial<Produto>): Produto | null;
    remover(id: number): boolean;
}
