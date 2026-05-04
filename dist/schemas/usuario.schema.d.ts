import { Schema } from 'mongoose';
export declare const UsuarioSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
}, {
    nome?: string;
    senha?: string;
    email?: string;
}, import("mongoose").Document<unknown, {}, {
    nome?: string;
    senha?: string;
    email?: string;
}, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "versionKey"> & {
    versionKey: false;
}> & Omit<{
    nome?: string;
    senha?: string;
    email?: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, "id"> & {
    id: string;
}, unknown, {
    nome?: string;
    senha?: string;
    email?: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
