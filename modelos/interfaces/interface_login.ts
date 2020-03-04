export interface InterfaceLogin{
    email: string;
    senha: string;
    getToken(): string;
}