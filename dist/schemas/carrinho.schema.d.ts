import { Schema } from 'mongoose';
export declare const CarrinhoSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
}, {
    quantidade: number;
    produtoId?: string;
    nome?: string;
    preco?: number;
}, import("mongoose").Document<unknown, {}, {
    quantidade: number;
    produtoId?: string;
    nome?: string;
    preco?: number;
}, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "versionKey"> & {
    versionKey: false;
}> & Omit<{
    quantidade: number;
    produtoId?: string;
    nome?: string;
    preco?: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, "id"> & {
    id: string;
}, unknown, {
    quantidade: number;
    produtoId?: string;
    nome?: string;
    preco?: number;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
