import React from "react";
import "./Navbar.css";
// import Invent from "./Invent.js";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="header_right">
        <h1>Inventory</h1>
      </div>
      <div className="header_left">
        <Link to="/Info" className="link">
          About the project
        </Link>
        <Link to="/Invent" className="link">
          Inventory
        </Link>
        <Link to="/Restock" className="link">
          Restock/Use
        </Link>
        <Link to="/Create" className="link">
          Create items
        </Link>
        <Link to="/Remove" className="link">
          Remove items
        </Link>
      </div>
    </div>
  );
}
export default Navbar;

// <a href="#" className="link">
//   Restock items
// </a>
// <a href="#" className="link">
//   Create items
// </a>
// <a href="#" className="link">
//   Remove items
// </a>
