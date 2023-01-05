import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { useRouter } from 'next/router';
import { RootContext } from "../context/root.provider";
import { useContext } from "react";

export default function Header() {
    const router = useRouter();
    const isStoreRouter = new RegExp(['/store', '/album'].join("|")).test(router.pathname);
    const { state } = useContext(RootContext);
    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.mainContainer}`}>
                <Link href={'/'} legacyBehavior>
                    <a>
                        <Image src="/img/logo.jpg" alt="Logo page" width={300} height={40} className={styles.logoImage} />
                    </a>       
                </Link>
                <nav className={styles.navBar}>
                    <Link href="/store" className={ isStoreRouter ? styles.active : ''}>
                        Tienda
                    </Link>
                    <Link href="/about" className={router.pathname === '/about' ? styles.active : ''}>
                        Nosotros
                    </Link>
                    <Link href="/blog" className={router.pathname === '/blog' ? styles.active : ''}>
                        Blog
                    </Link>
                    <Link href="/cart" className={ router.pathname === '/cart' ? styles.active : ''}>
                        <div>
                            <Image src={'/img/carrito.png'} alt="carrito" width={20} height={15}  className={styles.cart} />
                            ({state.cart.reduce((r, c) => r += c.quantity, 0)})
                        </div>
                    </Link>
                </nav>
            </div>
        </header>
    )
}