import { IAuthor } from "../Author/interfaceAuthor";

//Requisitos obrigatórios
export interface IPost{
    readonly id_post: number;
    title: string;
    text: string;
    fk_id_author?: number;
    Author?: IAuthor[];

}

export function createPost({id_post, title, text, Author}: any): IPost{
    return { id_post, title, text, Author }
}
export function createPosts(data: any[]): IPost[]{
    return data.map(createPost)
}