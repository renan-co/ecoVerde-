import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsuariosService {

  constructor(@InjectModel('Usuario') private usuarioModel: Model<any>) {}

  async listarTodos() {
    const usuarios = await this.usuarioModel.find();
    return usuarios.map(u => ({ id: u._id, nome: u.nome, email: u.email }));
  }

  async cadastrar(dados: { nome: string; email: string; senha: string }) {
    const jaExiste = await this.usuarioModel.findOne({ email: dados.email });
    if (jaExiste) {
      throw new Error('E-mail já cadastrado');
    }
    const novo = await this.usuarioModel.create(dados);
    return { id: novo._id, nome: novo.nome, email: novo.email };
  }

  async login(email: string, senha: string) {
    const usuario = await this.usuarioModel.findOne({ email });

    if (!usuario || usuario.senha !== senha) {
      return { mensagem: 'E-mail ou senha incorretos' };
    }

    return {
      mensagem: 'Login realizado com sucesso!',
      usuario: { id: usuario._id, nome: usuario.nome, email: usuario.email },
    };
  }

  async atualizar(id: string, dados: { nome?: string; email?: string }) {
    return this.usuarioModel.findByIdAndUpdate(id, dados, { returnDocument: 'after' });
  }

  async remover(id: string) {
    const resultado = await this.usuarioModel.findByIdAndDelete(id);
    return !!resultado;
  }
}
