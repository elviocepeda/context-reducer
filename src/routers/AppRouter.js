import React from 'react';

//REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//PAGES
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Error404 from '../pages/Error404';

export default function AppRouter() {
  return (
    <>
      <Router>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='*' element={<Error404 />} />
        </Routes>    
      </Router>
    </>
  ) 
}
