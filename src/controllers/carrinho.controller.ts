import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CarrinhoService } from '../services/carrinho.service';

@Controller('carrinho')
export class CarrinhoController {

  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Get()
  listar() {
    return this.carrinhoService.listar();
  }

  @Post()
  adicionar(@Body() dados: any) {
    return this.carrinhoService.adicionar(dados);
  }

  @Put(':id')
  atualizarQuantidade(@Param('id') id: string, @Body() body: { quantidade: number }) {
    return this.carrinhoService.atualizarQuantidade(id, body.quantidade);
  }

  @Delete(':id')
  async removerItem(@Param('id') id: string) {
    const removido = await this.carrinhoService.removerItem(id);
    if (!removido) return { mensagem: 'Item não encontrado no carrinho' };
    return { mensagem: 'Item removido do carrinho' };
  }

  @Delete()
  async limpar() {
    await this.carrinhoService.limparCarrinho();
    return { mensagem: 'Carrinho esvaziado com sucesso' };
  }
}
