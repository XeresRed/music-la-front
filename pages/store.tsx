import Layout from "../layout/layout";
import styles from "../styles/store.module.css";
import AlbumList from "../components/albumList";
import React from "react";
import { IAlbum } from "../models/albums.models";
import client from "../apollo-client";
import { getAllAlbums } from "../models/queries";

export default function Store({albumData}: {albumData: IAlbum[]}) {
  return (
    <>
      <Layout title="Tienda" description="Tienda de musica">
        <main>
          <h1 className={styles.banner}>
            La nueva forma de conectar con la música.
          </h1>
          <AlbumList albums={albumData} />
        </main>
      </Layout>
    </>
  );
}

// Se hace el llamado unicamente cuando se hace el build de la app
/* export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/albums?populate=cover`);
  const {data: albumData, meta} = await response.json();

  return {
    props: {
        albumData,
        ...meta,
      }
    };
} */

// Se hace el llamado cada que un usuario entre a consultarla
export async function getServerSideProps() {
/*   const response = await fetch(`${process.env.API_URL}/albums?populate=cover`);
  const {data: albumData, meta} = await response.json(); */
  const { data } = await client.query({
    query: getAllAlbums
  });
  return {
    props: {
      albumData: data.albums.data,
    }
  };
}
