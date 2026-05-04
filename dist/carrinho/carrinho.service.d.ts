import { ItemCarrinho } from './carrinho.model';
export declare class CarrinhoService {
    private itens;
    private proximoId;
    listar(): ItemCarrinho[];
    adicionar(dados: Omit<ItemCarrinho, 'id'>): ItemCarrinho;
    removerItem(id: number): boolean;
    limparCarrinho(): void;
}
