import React from "react";

const ProductCard = ({ product }) => {

  return (
    <div className="product-card">
      <img src={product.imgUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
