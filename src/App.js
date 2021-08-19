import "./styles.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//elementos para usar REACT.ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//mis componentes
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import Nav from "./Components/NavBar";

//importo mi ContextProvider
//para rodear toda mi app y que pueda usar su info en los componentes encerrados dentro
import CartContextProvider from "./Components/store/CartContext";

export default function App() {
  return (

    <CartContextProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <Nav />
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </Router>
    </CartContextProvider>
  );
}
