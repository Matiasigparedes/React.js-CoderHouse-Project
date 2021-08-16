import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
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
