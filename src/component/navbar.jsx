import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";
import {Link} from "react-router-dom"
import {FaBookOpen} from "react-icons/fa"
class Navbar extends Component {


    render(){
 
  
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand"  to="/"></Link>
    <div className="" id="navbarSupportedContent">
    <ul className="navbar-nav">
    <li className="nav-item">
        <Link className="nav-link" to="/abc">
        <FaBookOpen />
        </Link>
    </li> 
    <li className="nav-item">
        <Link className="nav-link" to="/Harry Potter">
        Harry Potter
       
        </Link>
    </li> 
    <li className="nav-item">
        <Link className="nav-link" to="/Agatha Chistie">
          Add Product
       
        </Link>
        
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/Premchand">
        Premchand
        </Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/Jane Austen">
        Premchand
        </Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/Mybooks">
        Mybooks
        </Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/settings">
        Settings
        </Link>
    </li>

    </ul>
    </div>
        </nav>
)
    }
}
export default Navbar;