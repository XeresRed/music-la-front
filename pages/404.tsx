import Link from "next/link";
import Layout from "../layout/layout";


export default function Page404() {

    return (
        <Layout title="Pagina no encontrada">
            <main>
                <h1 className="heading">Paginada no encontrada</h1>
                <Link href='/' className="heading">Ir a inicio</Link>
            </main>
        </Layout>
    )
    
}