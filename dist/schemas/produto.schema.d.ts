import { Schema } from 'mongoose';
export declare const ProdutoSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
}, {
    estoque: number;
    sustentavel: boolean;
    nome?: string;
    descricao?: string;
    emoji?: string;
    preco?: number;
    categoria?: string;
}, import("mongoose").Document<unknown, {}, {
    estoque: number;
    sustentavel: boolean;
    nome?: string;
    descricao?: string;
    emoji?: string;
    preco?: number;
    categoria?: string;
}, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "versionKey"> & {
    versionKey: false;
}> & Omit<{
    estoque: number;
    sustentavel: boolean;
    nome?: string;
    descricao?: string;
    emoji?: string;
    preco?: number;
    categoria?: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, "id"> & {
    id: string;
}, unknown, {
    estoque: number;
    sustentavel: boolean;
    nome?: string;
    descricao?: string;
    emoji?: string;
    preco?: number;
    categoria?: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
