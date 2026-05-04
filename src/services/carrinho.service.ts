import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CarrinhoService {

  constructor(@InjectModel('Carrinho') private carrinhoModel: Model<any>) {}

  async listar() {
    return this.carrinhoModel.find().exec();
  }

  async adicionar(dados: { produtoId: string; nome: string; quantidade: number; preco: number }) {
    const itemExistente = await this.carrinhoModel.findOne({ produtoId: dados.produtoId });
    if (itemExistente) {
      itemExistente.quantidade += dados.quantidade;
      return itemExistente.save();
    }
    return this.carrinhoModel.create(dados);
  }

  async atualizarQuantidade(id: string, quantidade: number) {
    if (quantidade <= 0) {
      await this.carrinhoModel.findByIdAndDelete(id);
      return null;
    }
    return this.carrinhoModel.findByIdAndUpdate(id, { quantidade }, { returnDocument: 'after' });
  }

  async removerItem(id: string) {
    const resultado = await this.carrinhoModel.findByIdAndDelete(id).exec();
    return !!resultado;
  }

  async limparCarrinho() {
    await this.carrinhoModel.deleteMany({}).exec();
  }
}
