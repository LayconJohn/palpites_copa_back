export type AuthEntity = {
    usuario: string,
    email: string, 
    senha: string, 
    confirmarSenha: string
};

export type Auth = Partial<AuthEntity>