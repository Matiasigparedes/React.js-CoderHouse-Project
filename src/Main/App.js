import Header from "../Components/Header";
import ItemCount from "../Components/Shop/ItemCounter/ItemCounter"

function App(){

    const onAdd =(cantidad) => 
    {
        console.log(cantidad)
    }

    return(
        <>
            <Header/>
            <ItemCount stock={5} initial={0} onAdd={onAdd}/>
        </>
        
    );
}

export default App;