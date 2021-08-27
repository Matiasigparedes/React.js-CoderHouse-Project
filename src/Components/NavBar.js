import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/cart">
        <h3>Este es mi carrito:</h3> <br/>
        <img src={process.env.PUBLIC_URL + '/images/Shop.png'} width="80" height="80" /> <br /> <br />;
      </Link>

      <Link className="d-block" to="/category/1">
        Categoria uno
      </Link>
      <Link className="d-block" to="/category/2">
        Categoria dos
      </Link>
    </>
  );
};
export default Nav;
