import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import SongList from '../../components/songList';
import { addToCart, toogleAlert } from '../../context/root.actions';
import { RootContext } from '../../context/root.provider';
import Layout from '../../layout/layout';
import { IAlbum } from '../../models/albums.models';
import styles from '../../styles/albumDescription.module.css';
import { marked } from 'marked';

export default function AlbumDescription({albumInfo}: {albumInfo: IAlbum}) {
    const { dispatch } = useContext(RootContext);
    const router = useRouter();
    const options1 = { style: 'currency', currency: 'COP' };
    const numberFormat1 = new Intl.NumberFormat('es-CO', options1);

    const handleAddToCart = () => {
        //setAddToCart(true);

        const albumSelected = {
            id: albumInfo.id,
            image: albumInfo.attributes.cover.data.attributes.url,
            name: albumInfo.attributes.albumName,
            price: albumInfo.attributes.price,
            copies: albumInfo.attributes.copies,
            quantity: 1,
        }
        dispatch(new toogleAlert({
            align: 'right', 
            description: `Se agrego exitosamente el album ${albumInfo.attributes.albumName} `, 
            show: true, 
            title: 'Bien'
        }));

        dispatch(new addToCart(albumSelected))
    }

    return (
        <Layout title={albumInfo.attributes?.albumName}>
            <main>
                <button onClick={() => router.back()} className="back-button">Volver</button>
                <div className={styles.content}>
                    <Image src={albumInfo.attributes.cover.data.attributes.url} alt='cover-album' width={300} height={300} className={`${styles.shadowPopBl} ${styles.contentImg}`}/>
                    <div className={styles.description}>
                        <h1 >{albumInfo.attributes.albumName}</h1>
                        <h3 >{albumInfo.attributes.artistName}</h3>
                        <h4>{numberFormat1.format(albumInfo.attributes.price)} cop</h4>
                        <div  dangerouslySetInnerHTML={{__html: marked.parse(albumInfo.attributes.description)}}>
                        </div>
                        <h2>Algunas canciones</h2>
                        <SongList songs={albumInfo.attributes.songs} />
                        <button className={styles.btnCart} onClick={handleAddToCart} >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
                
            </main>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<{}> =  async (context) => {
    const response = await fetch(`${process.env.API_URL}/albums?filters[url]=${context.query.url}&populate=cover,songs` );
    const {data: albumInfo} = await response.json();
    return {
        props: {
            albumInfo: albumInfo[0]
        }
    }
}