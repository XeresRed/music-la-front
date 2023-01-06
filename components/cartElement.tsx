import Image from "next/image";
import React, { FormEvent } from "react";
import { ActionType, removeFromCart, RootActions, updateItemCart } from "../context/root.actions";
import { Cart, IRootState } from "../context/root.reducer";
import styles from '../styles/cartElement.module.css';
import SelectQuantity from "./selectQuantity";
import { toogleAlert } from '../context/root.actions';

export default function CartItem({item, dispatch}: {item: Cart, dispatch: (action: ActionType, callback?: (type?: string | null, data?: IRootState) => void) => void}) {
    const options1 = { style: 'currency', currency: 'COP' };
    const numberFormat1 = new Intl.NumberFormat('es-CO', options1);

    const handleValidation = (value: string) => {
        const parsedValue = Number.parseInt(value);
        const response = [];
        if (parsedValue === 0) {
            response.push(`La cantidad debe ser superior a 0`);
        }
        if (parsedValue > item.copies) {
            response.push(`La cantidad supera al limite disponible ${item.copies}`);
        }


        return response.length ? response.join(',') : "";
    }

    const handleDeleteItem = () => {
        dispatch(new removeFromCart({id: item.id}), )
    }

    const handleUpdateQuantity = (value: string) => {
        const parsedValue = Number.parseInt(value);
        dispatch(
            new updateItemCart({
                id: item.id, 
                quantity: parsedValue, 
            }),
            () => (dispatch(new toogleAlert({
                align: 'right', 
                description: `Se actualizo la cantidad correctamente ${parsedValue}`, 
                show: true, 
                title: 'Bien'
            })))
        );

    }

    return (
        <div className={styles.container}>
            <Image 
                src={item.image} 
                alt={item.name} 
                width={200} height={300}
            />
            <div className={styles.description}>
                <h1>{item.name}</h1>
                <div className={styles.price} style={{}}>
                    <h2 style={{margin: '0'}}>{numberFormat1.format(item.price)} X</h2>
                    <SelectQuantity value={item.quantity} updateInput={handleUpdateQuantity} validation={handleValidation}/>
                </div>
                
                <button className={styles['btn-eliminar']} onClick={handleDeleteItem}>Eliminar</button>
            </div>
        </div>
    )
}