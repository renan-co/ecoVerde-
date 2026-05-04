import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { UsuariosService } from '../services/usuarios.service';

@Controller('usuarios')
export class UsuariosController {

  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  listarTodos() {
    return this.usuariosService.listarTodos();
  }

  @Post()
  async cadastrar(@Body() body: { nome: string; email: string; senha: string }) {
    try {
      return await this.usuariosService.cadastrar(body);
    } catch (erro) {
      return { mensagem: erro.message };
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() body: { email: string; senha: string }) {
    return this.usuariosService.login(body.email, body.senha);
  }

  @Put(':id')
  async atualizar(@Param('id') id: string, @Body() body: { nome?: string; email?: string }) {
    const usuario = await this.usuariosService.atualizar(id, body);
    if (!usuario) return { mensagem: 'Usuário não encontrado' };
    return { id: usuario._id, nome: usuario.nome, email: usuario.email };
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    const removido = await this.usuariosService.remover(id);
    if (!removido) return { mensagem: 'Usuário não encontrado' };
    return { mensagem: 'Usuário removido com sucesso' };
  }
}
