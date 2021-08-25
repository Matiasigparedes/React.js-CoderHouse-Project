import {CartContext} from '../store/CartContext';
import React, { useContext } from 'react';
import ItemCart from './ItemCart'

//RSF
export default function Cart() {

    const {cart, sumaTotal, deleteItem, clear} = useContext(CartContext);

    return (
        <div className="d-flex flex-wrap">
            <img src={process.env.PUBLIC_URL + '/images/Shop.png'} />;
            {
                cart.length ? (
                    cart.map(item => <ItemCart producto = {item} key = {item.id} deleteItem = {deleteItem}/>)
                ) : <h2>No hay productos en el carrito</h2>
            }
            <h2>suma total: {sumaTotal()}</h2>
            <button onClick={clear}>Eliminar todos</button>
        </div>
    );
}