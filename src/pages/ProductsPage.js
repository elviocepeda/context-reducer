import React from 'react'
import Header from '../components/Header'
import ProductList from '../components/ProductList'

const ProductsPage = () => {
  return (
    <div className='products-page'>
      <Header />
      <ProductList />
    </div>
  )
}

export default ProductsPage;