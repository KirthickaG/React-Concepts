import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
const LazyAbout = React.lazy(() => import('./components/About'));
import './style.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="about"
          element={
            <React.Suspense fallback="...loading">
              <LazyAbout />
            </React.Suspense>
          }
        ></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />}></Route>
          <Route
            path="featured-products"
            element={<FeaturedProducts />}
          ></Route>
          <Route path="new-products" element={<NewProducts />}></Route>
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}
