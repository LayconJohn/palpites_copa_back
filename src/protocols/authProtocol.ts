export type AuthEntity = {
    usuario: string,
    email: string, 
    senha: string, 
    confirmarSenha: string
};

export type User = {
    id: number;
    token: string;
    userId: number;
    active: boolean;
    createAt: string | Date;
}

export type Auth = Partial<AuthEntity>