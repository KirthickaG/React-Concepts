import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const NavStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };

  return (
    <nav>
      <NavLink style={NavStyles} to="/">
        Home
      </NavLink>
      <NavLink style={NavStyles} to="/about">
        About
      </NavLink>
      <NavLink style={NavStyles} to="/products">
        Products
      </NavLink>
    </nav>
  );
};

export default NavBar;
