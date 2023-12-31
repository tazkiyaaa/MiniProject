import React from 'react';
import './BestSeller.scss';

export const BestSeller = ({ image, product, size }) => {
  return (
    <div className="product-container">
      <div className="products mx-auto">
        <div className="product_image" style={{ backgroundImage: `url(${image})` }} />

        <div className="product_details">
          <p className="title">{product}</p>
        </div>
      </div>
    </div>
  );
};
