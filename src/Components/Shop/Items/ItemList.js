import React from 'react';
import Item from "./Item";

function ItemList({productos}) {

    return (
        <div>
            {productos.length !== 0 ? // Si es true renderiza el map y sino muestra el cargando (es como un else)
            (productos.map((producto) => <Item producto = {producto}/>)) : (<h2>Cargando...</h2>)};
        </div>
    );
}

export default ItemList;