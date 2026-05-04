import { UsuariosService } from '../services/usuarios.service';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    listarTodos(): Promise<{
        id: any;
        nome: any;
        email: any;
    }[]>;
    cadastrar(body: {
        nome: string;
        email: string;
        senha: string;
    }): Promise<{
        id: any;
        nome: any;
        email: any;
    } | {
        mensagem: any;
    }>;
    login(body: {
        email: string;
        senha: string;
    }): Promise<{
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
    atualizar(id: string, body: {
        nome?: string;
        email?: string;
    }): Promise<{
        mensagem: string;
        id?: undefined;
        nome?: undefined;
        email?: undefined;
    } | {
        id: any;
        nome: any;
        email: any;
        mensagem?: undefined;
    }>;
    remover(id: string): Promise<{
        mensagem: string;
    }>;
}
