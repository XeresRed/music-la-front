import { Cover } from "./albums.models";

export interface IPost {
    id: number;
    attributes: {
        title: string;
        autor: string;
        content: number;
        cover: Cover;
        isd: string;
        createdAt: string;
        publishedAt: string;
        updatedAt: string;
    }
}