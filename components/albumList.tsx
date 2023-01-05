import { IAlbum } from "../models/albums.models"
import AlbumCard from "./albumCard";

interface IAlbumListProps {
    albums: IAlbum[]
}

export default function AlbumList(props: IAlbumListProps) {
    return (
        <div className="flex-grid">
            {
                props.albums?.map(album => (
                    <AlbumCard key={album.attributes.albumName} album={album} />
                ))
            }
        </div>
    )
}