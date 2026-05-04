import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProdutosService } from '../services/produtos.service';

@Controller('produtos')
export class ProdutosController {

  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  listarTodos() {
    return this.produtosService.listarTodos();
  }

  @Post()
  adicionar(@Body() dados: any) {
    return this.produtosService.adicionar(dados);
  }

  @Put(':id')
  async atualizar(@Param('id') id: string, @Body() dados: any) {
    const produto = await this.produtosService.atualizar(id, dados);
    if (!produto) return { mensagem: 'Produto não encontrado' };
    return produto;
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    const removido = await this.produtosService.remover(id);
    if (!removido) return { mensagem: 'Produto não encontrado' };
    return { mensagem: 'Produto removido com sucesso' };
  }
}
