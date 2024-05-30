import React from 'react';
import ReactDOM from 'react-dom/client';
import GoodsPage from './GoodsPage.jsx';
import GoodsCardPage from '../goods-card/GoodsCardPage.jsx';
import ShoppingCartPage from '../shopping-cart/ShoppingCartPage.jsx'
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<GoodsPage />} />
        <Route path="/goods-card/:id" element={<GoodsCardPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
