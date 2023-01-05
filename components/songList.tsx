import Image from "next/image";
import Link from "next/link";
import { ISong } from "../models/albums.models";
import styles from '../styles/songList.module.css'

export default function SongList({songs}: {songs: ISong}) {
    return (
        <ul className={styles.list}>
            {
                songs.data.map( song => (
                    <li key={song.attributes.name} className={styles.listItem}>
                        <h4 style={{margin: 'auto 0'}}>{song.attributes.name} ({song.attributes.duration})</h4>
                        <div className={styles.listenApp}>
                            {song.attributes.spotifyLink && <Link href={song.attributes.spotifyLink} target="_blank">
                                    <Image src="/img/spotify.png" alt="listen-in-spotify" width={100} height={100} className={styles.imgItem} />
                                </Link>}
                            {song.attributes.youtubeLink && <Link href={song.attributes.youtubeLink} target="_blank">
                                    <Image src="/img/youtubemusic.png" alt="listen-in-youtube" width={100} height={100} className={styles.imgItem} />
                                </Link>}
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}