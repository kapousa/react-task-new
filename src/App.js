// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UsersPage from './pages/Users';
import ProductsPage from './pages/Products';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <table className='head-table'>
            <tr>
            <td>
              <Link to="/">Home</Link>
            </td>
            <td>
              <Link to="/users">Users</Link>
            </td>
            <td>
              <Link to="/products">Products</Link>
            </td>
              </tr>
            </table>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div className='info'>
      Use the links provided above to navigate to the user or product pages.
    </div>
  );
};

export default App;

