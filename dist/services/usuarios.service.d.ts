import { Model } from 'mongoose';
export declare class UsuariosService {
    private usuarioModel;
    constructor(usuarioModel: Model<any>);
    listarTodos(): Promise<{
        id: any;
        nome: any;
        email: any;
    }[]>;
    cadastrar(dados: {
        nome: string;
        email: string;
        senha: string;
    }): Promise<{
        id: any;
        nome: any;
        email: any;
    }>;
    login(email: string, senha: string): Promise<{
        mensagem: string;
        usuario?: undefined;
    } | {
        mensagem: string;
        usuario: {
            id: any;
            nome: any;
            email: any;
        };
    }>;
    atualizar(id: string, dados: {
        nome?: string;
        email?: string;
    }): Promise<any>;
    remover(id: string): Promise<boolean>;
}
