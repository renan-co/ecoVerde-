import { CarrinhoService } from './carrinho.service';
import { ItemCarrinho } from './carrinho.model';
export declare class CarrinhoController {
    private readonly carrinhoService;
    constructor(carrinhoService: CarrinhoService);
    listar(): ItemCarrinho[];
    adicionar(dados: Omit<ItemCarrinho, 'id'>): ItemCarrinho;
    removerItem(id: string): {
        mensagem: string;
    };
    limpar(): {
        mensagem: string;
    };
}
