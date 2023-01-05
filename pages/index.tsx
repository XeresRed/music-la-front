
import { Inter } from '@next/font/google';
import Layout from '../layout/layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout title='inicio' description='Busqueda de musica segun tus gustos'>
        <main>
          <h1> Hello</h1>
        </main>
      </Layout>
    </>
  )
}
