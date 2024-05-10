import React from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaFolderOpen, FaBriefcase, FaEnvelope, FaExclamationTriangle, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import CategorySelect from './CategorySelect';

const Header = () => {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);


  return (
    <header>
      <div className="logo">
        <h1>Foodology</h1>
      </div>
      <nav>
        <Link to="/" title="Home"><FaHome />Home</Link>
        <Link to="/about" title="About"><FaUser />AboutMe</Link>
        <Link to="/skills" title="Skills"><FaCode />Skills</Link>
        <Link to="/projects" title="Projects"><FaFolderOpen />Projects</Link>
        <Link to="/experience" title="Experience"><FaBriefcase />Experience</Link>
        <Link to="/contact" title="Contact"><FaEnvelope />Contact</Link>
        <Link to="/tasks" title="tasks"><FaExclamationTriangle/>Tasks</Link>
        <Link to="/cart" title="Cart"><FaShoppingCart />Cart ({totalItems})</Link>

      </nav>
    </header>
  );
}

export default Header;
