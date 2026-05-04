import { Schema } from 'mongoose';

export const UsuarioSchema = new Schema(
  {
    nome:  String,
    email: { type: String, unique: true },
    senha: String,
  },
  { versionKey: false },
);
