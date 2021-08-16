import "./styles.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import Nav from "./Components/NavBar";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
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
  );
}
