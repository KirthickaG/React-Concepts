import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      {/* a relative link is a link that does not start with a forward slash and
      will inherit the closest route in which they are rendered */}
      <nav>
        <Link to="new-products">New Products</Link> // Relative Links
        <Link to="featured-products">Featured Products</Link>
      </nav>
      {/* absolute link will construct the path from the root of the app and not
      from the current url, p.s to make this work with absolute links you need
      to add slashes like to="/products/new-products" */}
      <nav>
        <Link to="/new-products">New Products</Link> // Absolute Links
        <Link to="/featured-products">Featured Products</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
