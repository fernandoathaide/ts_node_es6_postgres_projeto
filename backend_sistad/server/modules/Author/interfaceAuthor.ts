import { IPost } from "../Post/interfacePost";
//Requisitos obrigatórios
export interface IAuthor{
    readonly id_author: number;
    name: string;
    Posts?: IPost[];
}

export function createAuthor({id_author, name, Posts}: any): IAuthor{
    return { id_author, name , Posts}
}
export function createAuthors(data: any[]): IAuthor[]{
    return data.map(createAuthor)
}