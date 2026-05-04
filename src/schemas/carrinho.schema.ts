import { Schema } from 'mongoose';

export const CarrinhoSchema = new Schema(
  {
    produtoId:  String,
    nome:       String,
    quantidade: { type: Number, default: 1 },
    preco:      Number,
  },
  { versionKey: false },
);
