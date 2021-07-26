import React from 'react';
import CartWidget from './CartWidget'

function Navigation() {
  return (
        <nav className="navBar">
            <CartWidget/>
            <a href="/">Pedir</a> |
            <a href="/"> Nuestras Sucursales</a> |
            <a href="/"> Promos</a> |
            <a href="/"> Imperdibles</a>
        </nav>
  );
}
export default Navigation;