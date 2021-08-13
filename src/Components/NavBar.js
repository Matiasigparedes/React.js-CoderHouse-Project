import React from 'react';
import CartWidget from './Shop/CartWidget'

import {Link} from 'react-router-dom';
//itemlist container
function Navigation() {
  return (
        <nav className="navBar">
            <a href="/">Pedir</a> |
            <a href="/"> Nuestras Sucursales</a> |
            <a href="/"> Promos</a> |
            <a href="/"> Imperdibles</a>
            <CartWidget/>

            <Link to='/categoria/1'>
              Categoria 1  
            </Link>

            <Link to='/categoria/2'>
              Categoria 2
            </Link>
        </nav>
  );
}
export default Navigation;