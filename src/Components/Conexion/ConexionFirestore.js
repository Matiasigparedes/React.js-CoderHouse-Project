import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOU0LMeLwaYGBsA5r5I--SJ_nDPDLkhr0",
    authDomain: "react-coderhouse-ad957.firebaseapp.com",
    projectId: "react-coderhouse-ad957",
    storageBucket: "react-coderhouse-ad957.appspot.com",
    messagingSenderId: "847067355530",
    appId: "1:847067355530:web:58bf34c903bb81b2e91073"
  };

const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app);



// FUNCIONALIDAD A AGREGAR A MIS COMPONENTES:

/*

    //Firestore useeffect
    useEffect(() => {
      //referencia a la DB
      const db = firestore()
      
      //referencia a una coleccion
      const collection = db.collection("productos")
      
      //Este es mi query
      //const query = collection.get()
      //console.log(query) //check si es una promise
      
      let filtro = collection.where("precio", ">=", "500")
      const query = filtro.get()
      
      // get: para el home(/) ya que muestra todos los elementos
      // where: para las categorias ya que se puede filtrar con operadores
      // doc: en cada elemento (item/id) usar un .doc

      //crea una coleccion llamada order
      //dentro de la order hay un documento donde se encuentra dos campos, nuevoProducto array y user
      const collection = db.collection('order') //nueva orden
      const user = {nombre: "matias", apellido: "paredes", correo: "xxx@gmail.com"}
      const nuevoProducto = {nombre: "nuevo producto", categoria: "0", pictureUrl: "http...", precio: 1500, stock: "1"} //nuevo producto
      const query = collection.add({items:[{nuevoProducto}], user})
      query.then((resultado) =>{
        console.log(resultado)
      })
      
      //Le saco las cosas a la promesa
      query.then((Resultados) => { //Snapshot es el resultado
      console.log(Resultados);   //Es una representacion del documento
      // el console muestra el id
      
      //Recorro cada uno de los documentos
      Resultados.forEach((documento) =>{

        const resultadoParseado = []

        //El id separado del resto de la data
        const id = documento.id
        //Toda mi data de los documentos
        const data = documento.data()
        const data_final = {id, ...data}
        resultadoParseado.push(data_final)
      })
      setProductos(resultadoParseado)
    })

  }, [])

  */