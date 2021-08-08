import React, {useEffect, useState} from 'react';
import ItemDetail from './Items/ItemDetail';
import Allproducts from './AllProducts.json'

function ItemDetailContainer() {

    const[getProducts, setProducts] = useState([]);

    const getItems = () => {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
               resolve(Allproducts);
               reject("Error! → Try get all products again.");
           }, 20000); 
        });
    }

    useEffect(() => {
        setProducts([]);

        getItems()
            .then((res) => setProducts(res))
            .catch((err) => console.log(err));
    }, []);

    return(
        <>
            <ItemDetail/>
        </>
    );
}

export default ItemDetailContainer;