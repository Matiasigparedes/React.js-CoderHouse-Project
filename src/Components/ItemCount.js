import React, {useState} from 'react';

function ItemCount(){

    const [contador, setContador] = useState(0)

    const sumarContador = () =>{
        if (contador < 10) {
            setContador(contador + 1)
            console.log("Sumando... " + contador)   
        }
    }

    const restarContador = () =>{
        if (contador > 0) {
            setContador(contador - 1)
            console.log("Restando... " + contador)
        }
    }

        return(
            <React.Fragment>
                <p>Contador actual: {contador}</p>
                <button onClick={sumarContador} >Va a sumar: +</button>
                <button onClick={restarContador} > Va a restar: -</button>
            </React.Fragment>
        );
}

export default ItemCount;