
import React from 'react';
import {BrowserRouter as Router,
    Switch, Route} from 'react-router-dom';

import ItemCount from "../Components/Shop/ItemCounter/ItemCounter"
import Header from "../Components/Header";
import Section from '../Components/Section';
import Footer from '../Components/Footer';

import ItemListContainer from '../Components/Shop/ItemListContainer';
import ItemDetailContainer from '../Components/Shop/ItemDetailContainer';



function App(){

    const onAdd =(cantidad) => 
    {
        console.log(cantidad)
    }

    return(
        <>  
            <Router>
                <Switch>
                    <Route exact path = '/' >
                        <Header/>
                        <ItemCount stock={5} initial={0} onAdd={onAdd}/>
                        <ItemListContainer />
                        <Section/>
                        <Footer/>
                    </Route>

                    <Route exact path ="/categoria/:id">
                        <ItemListContainer />
                    </Route>

                    <Route exact path ="/item/:id">
                        <ItemDetailContainer />
                    </Route>
                </Switch>
            </Router>
        </>

    );
}

export default App;