import React, {useEffect, useState} from 'react';
import ItemDetail from './Items/ItemDetail';
import Allproducts from './AllProducts.json'
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const[getProducts, setProducts] = useState({});
    const {id: idProduct} = useParams();

    const getItems = () => {
        return new Promise((resolve, reject) => {
            const buscarProducto = Allproducts.find(item => item.categoria === parseInt(idProduct));
           setTimeout(() => {
               resolve(buscarProducto);
               reject("Error! → Try get all products again.");
           }, 20000); 
        });
    }

    useEffect(() => {
        setProducts([]);

        getItems()
            .then((res) => setProducts(res))
            .catch((err) => console.log(err));
    }, [idProduct]);

    return(
        <>
            <ItemDetail product = {getProducts}/>
        </>
    );
}

export default ItemDetailContainer;