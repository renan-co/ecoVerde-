import { Usuario } from './usuario.model';
export declare class UsuariosService {
    private usuarios;
    private proximoId;
    listarTodos(): Omit<Usuario, 'senha'>[];
    cadastrar(dados: Omit<Usuario, 'id'>): Omit<Usuario, 'senha'>;
    login(email: string, senha: string): {
        mensagem: string;
        usuario?: Omit<Usuario, 'senha'>;
    };
    remover(id: number): boolean;
}
