import React, { useState } from 'react';
import './App.css';

import { getCategories } from './components/fetcher';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/productDetail';
import Basket from './components/Basket';
import Checkout from './components/checkout';
import Category from './components/Category';
import Layout from './components/Layout';
import Home from './components/Home';
import Orderconfirmation from './components/orderConfirmation';
import SearchResults from './components/SearchResults';


function App() {
  const [categories, setCategories] = useState({ errorMeassage: '', data: [] });


  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path="basket" element={<Basket />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="orderconfirmation" element={<Orderconfirmation />} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="categories/:categoryId" element={<Category />} />
            <Route path="search" element={<SearchResults />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
