import React from 'react';
import ItemListContainer from './ItemListContainer';

function CartWidget(){

    return (
        <React.Fragment>
            <p>Logo de la tienda:</p>
            <img src="/images/Logo.jpg" alt="Logo" width="85" height="85"/>
            <br></br>
            <p>Tienda:</p>
            <img src="/images/Shop.png" alt="Shopping" width="55" height="55"/>
            <ItemListContainer/>
        </React.Fragment>
    );
}

export default CartWidget;