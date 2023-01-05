

export interface IFormat {
    ext: string, url: string, mime: string, name: string, path: string, size: number, height: number, width: number
}

export interface Cover {
    data: {
        attributes: {
            alternativeText: string;
            caption: string;
            createdAt: string;
            ext: string;
            formats: {
                medium: IFormat;
                small : IFormat;
                thumbnail: IFormat;
            };
            hash: string;
            height:number;
            mime: string;
            name: string;
            previewUrl: string;
            provider: string;
            provider_metadata: {public_id: string, resource_type: string}
            size: number
            updatedAt: string
            url: string;
            width: number
        }
    }
}

export interface ISong {
    data: {
        attributes: {
            createdAt: string;
            duration: string;
            name: string;
            publishedAt: string;
            spotifyLink: string;
            updatedAt: string;
            youtubeLink: string;
        }
    }[]
}

export interface IAlbum {
    id: number;
    attributes: {
        albumName: string;
        artistName: string;
        copies: number;
        cover: Cover;
        createdAt: string;
        description: string;
        price: number;
        publishedAt: string;
        updatedAt: string;
        url: string;
        songs: ISong;
    }
}

