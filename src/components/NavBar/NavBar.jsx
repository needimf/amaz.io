import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <Link className="navbar-brand ml-4" to="/">Amaz.io</Link>
        <ul className="navbar-nav navbar-right">
            <Link to="/checkout" ><li className="text-white mr-4"><i className="material-icons" style={{"font-size": "35px"}}>shopping_cart</i></li></Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;