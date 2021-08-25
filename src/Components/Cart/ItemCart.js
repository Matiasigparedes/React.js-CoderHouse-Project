import React, {useContext} from 'react';
import CartContext from '../store/CartContext';

function ItemCart({producto, deleteItem}) {
    console.log(producto);

    return (
        <div>
            <img src={producto.imagen} alt={producto.nombre} />
            <h1>Nombre: {producto.nombre}</h1>
            <h1>Precio: {producto.precio}</h1>
            <button onClick={() => deleteItem(producto.id)}>Eliminar item</button>
        </div>
    );
}

export default ItemCart;