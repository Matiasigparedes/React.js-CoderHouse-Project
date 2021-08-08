import React from 'react';
import ItemListContainer from '../Shop/ItemListContainer';


function CartWidget(){

    return (
        <React.Fragment>
            <h3>Logo de mi pagina:</h3>
            <img src={process.env.PUBLIC_URL + '/public/images/Logo.jpg'} alt="Logo" width="85" height="85"/>
            <br></br>
            <h3>Icono del carrito de compras:</h3>
            <img src={process.env.PUBLIC_URL + '/public/images/Shop.png'} alt="Shop" width="55" height="55"/>
            <ItemListContainer/>
        </React.Fragment>
    );
}

export default CartWidget;