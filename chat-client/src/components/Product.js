import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className='product_card'>
      <img className="small" src={product.image} alt={product.name} />
      <h3 className='product_name'>{product.name}</h3>
      <div className='product_price'>€{product.price}</div>
      <div>
        <button className="button" onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}