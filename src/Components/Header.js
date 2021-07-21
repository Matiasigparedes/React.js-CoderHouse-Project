import React from 'react';
import NavBar from "./NavBar";

function Header(){

    return (
        <header className="header">
            <h5 id="atention">Atencion! Ahora tenemos prmociones para clientes de empresas.</h5>
            <NavBar/>
        </header>
    );
}

export default Header;