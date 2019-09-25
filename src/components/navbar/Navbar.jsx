import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
         <nav className="navbar navbar-expand-sm navbar-light bg-light">
             <Link to="/" className="navbar-brand">
                 <img src="/img/logo.svg" alt="logo"/>
             </Link>
             <div className="collapse navbar-collapse show ml-sm-5">
                 <ul className="navbar-nav ">
                      <li className="navbar-item">
                        <Link to="/"className="nav-link">Home</Link>  
                     </li>
                     <li className="navbar-item weight">
                        <Link to="/recipes"className="nav-link">Recipes</Link>  
                     </li>
                 </ul>
             </div>
         </nav>
    );
};

export default Navbar;