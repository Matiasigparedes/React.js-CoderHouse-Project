import React from 'react';
import CartWidget from './Shop/CartWidget'

function Navigation() {
  return (
        <nav className="navBar">
            <a href="/">Pedir</a> |
            <a href="/"> Nuestras Sucursales</a> |
            <a href="/"> Promos</a> |
            <a href="/"> Imperdibles</a>
            <CartWidget/>
        </nav>
  );
}
export default Navigation;