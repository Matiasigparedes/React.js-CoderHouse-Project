// Desde React:
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Desde firebase:
import { firestore } from "../Conexion/ConexionFirestore.js";

// Desde componentes:
import ItemList from "./ItemList";

// Desde productos archivo json:
import misProductos from "../../productos.json";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { id: idCategory } = useParams();
  
  const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (idCategory) {
          const filtroCategory = misProductos.filter(
            (item) => item.categoria === idCategory
            );
            resolve(filtroCategory);
          } else {
            resolve(misProductos);
          }
          
          reject("error al traer productos");
        }, 3000);
      });
    };
    
    useEffect(() => {
      setProductos([]);
      getItems()
      .then((res) => setProductos(res))
      .catch((acaHayError) => console.log(acaHayError));
    }, [idCategory]);

  return <ItemList productos={productos} />;
}

export default ItemListContainer;