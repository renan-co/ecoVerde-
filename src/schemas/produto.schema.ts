import { Schema } from 'mongoose';

export const ProdutoSchema = new Schema(
  {
    nome:        String,
    descricao:   String,
    emoji:       String,
    preco:       Number,
    categoria:   String,
    estoque:     { type: Number, default: 0 },
    sustentavel: { type: Boolean, default: false },
  },
  { versionKey: false },
);
