import React from "react";
import Delete from "./svg/Delete";
import Edit from "./svg/Edit";

const ProductCard = ({ product }) => {

  return (
    <div className="product-card">
      <div className="card-img">
        <img src={product.imgUrl} alt={product.title} />
      </div>
      <div className="card-body">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
        <div className="btn-container">
          <Edit />
          <Delete />
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
