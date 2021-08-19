import React, { useContext } from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

// Mis componentes
import ItemCounter from '../ItemCounter/ItemCounter';
//importo el contexto a usar (estado global)
import {CartContext} from '../store/CartContext'

const ItemDetail = ({ producto }) => {

  //destructuro mi objeto y traigo lo que necesite de mi estado global
  //utilizo useContext y entre parentesis le paso el contexto del cual quiero traer mi data
  const {addItem, editCart, isInCart} = useContext(CartContext);
  
  const agregarAlCarrito = () => {
    if (isInCart(producto.id)) {
      editCart({...producto, cantidad: cantidadDefinida});
    } else{
      addItem({...producto, cantidad: cantidadDefinida})
    }
  }

  const [cantidadDefinida, setCantidadDefinida] = useState(0);
  
  const onAdd = (cantidad) => {
    setCantidadDefinida(cantidad);
  };

  return (
    <div className="card" style={{ width: "15rem", margin: "10px" }}>
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
      />

      <div className="card-body">
        <h5 className="card-title"> {producto.nombre} </h5>
        <p className="card-text"> {producto.precio} </p>

        {
          cantidadDefinida == 0 ?
          (
            <ItemCounter initial={1} stock = {10} onAdd={onAdd}/>
          ) : (
            <>
            <Link to="/cart">
              <button>Terminar compra</button>
            </Link>

            <button onClick={() => setCantidadDefinida(0)}>
              Editar compra
            </button>
            </>
          )
        }
        <Link to="/">
          Seguir comprando...
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;

