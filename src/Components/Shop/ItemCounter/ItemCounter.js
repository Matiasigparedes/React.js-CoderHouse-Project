import React, {useState, useEffect} from 'react';

function ItemCount({stock, initial, onAdd}){

    const [contador, setContador] = useState(initial)

    const sumarContador = () =>{
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restarContador = () =>{
        if (contador >= 1) {
            setContador(contador - 1)
        }
    }

    const confirmar = () =>{
        if (stock > 0) {
            onAdd(contador)
        }
    }

    useEffect(() => {
        console.log('El contador es: ' + contador)
    },[contador]);

        return(
            <React.Fragment>
                <p>Contador actual: {contador}</p>
                <button onClick={sumarContador} >Sumar: +</button>
                <button onClick={restarContador} >Restar: -</button>
                <button onClick={confirmar}>Confirmar</button>
            </React.Fragment>
        );
}

export default ItemCount;