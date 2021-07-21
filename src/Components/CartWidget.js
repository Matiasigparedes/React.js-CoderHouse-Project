import React from 'react';
import ItemListContainer from './ItemListContainer';

function CartWidget(){

    return (
        <>
            <p>Aqui va la imagen del negocio</p>
            <img src="../logo192.png" alt="mi logo" width="65" height="65"/>
            <ItemListContainer/>
        </>
    );
}

export default CartWidget;