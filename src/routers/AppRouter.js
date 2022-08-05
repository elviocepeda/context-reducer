import React from 'react';

//REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//PAGES
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import NewsPage from '../pages/NewsPage';
import ContactPage from '../pages/ContactPage';
import Error404 from '../pages/Error404';

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<Error404 />} />
        </Routes>    
      </Router>
    </>
  ) 
}
