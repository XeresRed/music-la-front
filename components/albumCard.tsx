import { IAlbum } from "../models/albums.models";
import Image from 'next/image';
import styles from '../styles/album.module.css'
import Link from "next/link";
export default function AlbumCard({album}: {album: IAlbum}) {
    const options1 = { style: 'currency', currency: 'COP' };
    const numberFormat1 = new Intl.NumberFormat('es-CO', options1);
    return (
        <div className={styles.card}>
            <Image src={album.attributes.cover.data.attributes.url} alt={album.attributes.cover.data.attributes.name} width={125} height={125} />
            <div className={styles.cardBody}>
                <h2>{album.attributes.albumName}</h2>
                <h3>{album.attributes.artistName}</h3>
                <p>{numberFormat1.format(album.attributes.price)} ({album.attributes.copies})</p>
                <Link href={`/album/${album.attributes.url}`} className={styles.cardButton}>
                    ver album
                </Link>

                
            </div>
        </div>
    )
}