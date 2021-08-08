import React from 'react';


function Item ({producto}) {
    return (
        <div style= {{width: "18rem", margin:"10px"}}>
            <img src={producto.imagen} alt="imagen"/>

            <div>
                <h5>{producto.nombre}</h5>
                <p>{producto.precio}</p>
                <button>Detalles</button>
            </div>
        </div>
    );
}

export default Item;