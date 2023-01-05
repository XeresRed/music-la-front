import CartItem from "../components/cartElement";
import { useDispatchWithCallBack } from "../hooks/useDispatchWitCallback";
import Layout from "../layout/layout";
import styles from '../styles/carrito.module.css'

export default function Cart() {
    const {state, customDispatch} = useDispatchWithCallBack();
    const options1 = { style: 'currency', currency: 'COP' };
    const numberFormat1 = new Intl.NumberFormat('es-CO', options1);

    return (
        <Layout title="Carrito de compras">
            <main>
                <h1 className="heading">Carrito</h1>

                <div className={styles.content}>
                    <div className={styles.cart}>
                        <h1>Articulos</h1>
                        {
                            state.cart.length > 0 ?
                                state.cart.map(item => <CartItem item={item} dispatch={customDispatch} key={item.id} />) 
                                :
                                (<h2 style={{textAlign: "center", marginTop: "3rem"}}>Aún no agregas nada al carrito :c</h2>)
                        }
                    </div>
                    <aside className={styles.resume}>
                        <h1>Resumen de pedido</h1>
                        <h3>Total a pagar: {numberFormat1.format(state.cart.reduce((total, current) => total += (current.price *  current.quantity), 0))}</h3>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}