import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCounter from '../ItemCounter/ItemCounter';

//rcf
const ItemDetail = ({ producto }) => {

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

