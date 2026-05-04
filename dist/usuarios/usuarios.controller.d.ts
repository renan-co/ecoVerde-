import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    listarTodos(): Omit<import("./usuario.model").Usuario, "senha">[];
    cadastrar(body: {
        nome: string;
        email: string;
        senha: string;
    }): Omit<import("./usuario.model").Usuario, "senha"> | {
        mensagem: any;
    };
    login(body: {
        email: string;
        senha: string;
    }): {
        mensagem: string;
        usuario?: Omit<import("./usuario.model").Usuario, "senha">;
    };
    remover(id: string): {
        mensagem: string;
    };
}
