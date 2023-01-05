import Link from "next/link";
import styles from "../styles/footer.module.css";
export default function Footer() {

    return (
        <footer className="contenedor">
            <h1>Navegacion</h1>
            <nav className={styles.navBar}>
                <Link href="/">
                    Inicio
                </Link>
                <Link href="/about">
                    Nosotros
                </Link>
                <Link href="/blog">
                    Blog
                </Link>
                <Link href="/store">
                    Tienda
                </Link>
                </nav>
                <p>Todos los derechos reservados {new Date().getFullYear()}</p>
        </footer>
    )
}