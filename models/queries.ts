import { gql } from "@apollo/client";

export const getAllPosts = gql`
    query getAllPosts {
        posts {
            data {
                id,
                attributes {
                    content,
                    autor,
                    title,
                    isd,
                    publishedAt,
                    cover {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            },
            meta {
                pagination {
                    total,
                    page,
                    pageSize,
                    pageCount,
                }
            }
        }
    }
`;

export const getAllAlbums = gql`
    query getAllAlbums {
        albums {
            data {
                id,
                attributes {
                albumName,
                artistName,
                copies,
                price,
                url,
                cover {
                    data {
                    attributes {
                        url,
                        name
                    }
                    }
                },
                songs {
                    data {
                    attributes {
                        name
                    }
                    }
                }
                }
            },
            meta {
                pagination {
                total,
                page,
                pageSize,
                pageCount,
                }
            }
        }
    }
`;

export const getAlbum = gql`
    query getAlbum($albumId: AlbumFiltersInput) {
        albums(filters: $albumId) {
            data {
                id,
                attributes {
                    albumName,
                    artistName,
                    copies,
                    price,
                    url,
                    description,
                    cover {
                        data {
                            attributes {
                                url
                            }
                        }
                    },
                    songs {
                        data {
                            attributes {
                                name,
                                duration,
                                spotifyLink,
                                youtubeLink,
                            }
                        }
                    }
                }
            },
        }
    }
`;