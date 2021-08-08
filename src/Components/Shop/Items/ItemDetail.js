import React from 'react';

function  ItemDetail({producto}) {
    
    return (
        <React.Fragment>
            <h3>Producto: {producto.nombre}</h3>
            <p>descripcion: {producto.precio}</p>
            <p>detalles</p>
        </React.Fragment>
    );
}

export default ItemDetail;