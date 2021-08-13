import React, { useEffect, useState } from 'react';
import ItemList from "./Items/ItemList";
import Allproducts from './AllProducts.json';

import {
    useParams
} from 'react-router-dom';

function ItemListContainer(){

    // Mostrara el array, la lista de todos los productos.
    const [getProductos, setProductos] = useState([]);
    let {id} = useParams();

    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id) {
                    const miFiltro = Allproducts.filter(item => item.categoria === id);
                    resolve(miFiltro);
                } else{
                    resolve(Allproducts);
                }
                reject('Error al traer los productos.');
            }, 2000);
        });
    };

    useEffect(() => {
        setProductos([]);
        getItems()
            .then((res) => setProductos(res))
            .catch((err) => console.log(err));
    }, []);
    

    return (
        <>
            <ItemList productos = {getProductos}/>
        </>
    );
}

export default ItemListContainer;