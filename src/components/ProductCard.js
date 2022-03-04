import React from 'react';

const ProductCard = ({product}) => {
  
  return (
    <div className='product-card'>
      <img src={product.imgUrl} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>{product.isFavorite}</span>
     
    </div>
  )
}

export default ProductCard;